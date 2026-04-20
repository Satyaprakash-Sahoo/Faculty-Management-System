import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useFaculty } from '../context/FacultyContext';

export const FacultyList = () => {
    const { faculty, deleteFacultyMember, loading, error } = useFaculty();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFaculty = useMemo(() => {
        return faculty.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.subject.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [faculty, searchTerm]);

    return (
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Faculty Members</h2>
                <Link to="/add" className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-center">
                    Add New Faculty
                </Link>
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name or subject..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}

            {!loading && !error && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Photo</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Subject</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Contact</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {filteredFaculty.map(member => (
                                <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-3 px-4">
                                        <img src={member.profilePicture || `https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} className="h-12 w-12 rounded-full object-cover"/>
                                    </td>
                                    <td className="py-3 px-4 font-medium">{member.name}</td>
                                    <td className="py-3 px-4">{member.subject}</td>
                                    <td className="py-3 px-4">
                                        <div className="text-sm">{member.email}</div>
                                        <div className="text-xs text-gray-500">{member.phone}</div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center space-x-4">
                                            <Link to={`/edit/${member.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                            <button onClick={() => deleteFacultyMember(member.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};