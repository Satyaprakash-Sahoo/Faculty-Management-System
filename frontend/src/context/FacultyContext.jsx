import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const FacultyContext = createContext(undefined);

export const FacultyProvider = ({ children }) => {
    const [faculty, setFaculty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'http://localhost:5002/api/faculty';

    // Helper function to get auth headers
    const getAuthHeaders = () => {
        const token = localStorage.getItem('token');
        return {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        };
    };

    const fetchFaculty = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(API_URL, {
                headers: getAuthHeaders()
            });
            if (!response.ok) throw new Error('Failed to fetch faculty data.');
            const data = await response.json();
            setFaculty(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFaculty();
    }, [fetchFaculty]);

    const getFacultyMember = (id) => faculty.find(m => m.id === id);

    const addFacultyMember = async (member) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify(member),
            });
            if (!response.ok) throw new Error('Failed to add faculty member.');
            await fetchFaculty(); // Re-fetch to get the new list with ID
        } catch (err) {
            setError(err.message);
        }
    };

    const updateFacultyMember = async (updatedMember) => {
        try {
            const response = await fetch(`${API_URL}/${updatedMember.id}`, {
                method: 'PUT',
                headers: getAuthHeaders(),
                body: JSON.stringify(updatedMember),
            });
            if (!response.ok) throw new Error('Failed to update faculty member.');
            await fetchFaculty(); // Re-fetch for consistency
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteFacultyMember = async (id) => {
        if (window.confirm('Are you sure you want to delete this faculty member?')) {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                    headers: getAuthHeaders()
                });
                if (!response.ok) throw new Error('Failed to delete faculty member.');
                fetchFaculty(); // Re-fetch
            } catch (err) {
                setError(err.message);
            }
        }
    };

    const value = {
        faculty,
        loading,
        error,
        getFacultyMember,
        addFacultyMember,
        updateFacultyMember,
        deleteFacultyMember,
    };

    return (
        <FacultyContext.Provider value={value}>
            {children}
        </FacultyContext.Provider>
    );
};

export const useFaculty = () => {
    const context = useContext(FacultyContext);
    if (context === undefined) {
        throw new Error('useFaculty must be used within a FacultyProvider');
    }
    return context;
};
