import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFaculty } from '../context/FacultyContext';

const initialFormState = {
    name: '',
    subject: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
};

export const FacultyForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getFacultyMember, addFacultyMember, updateFacultyMember } = useFaculty();
    
    const [formData, setFormData] = useState(initialFormState);
    const isEditing = Boolean(id);

    useEffect(() => {
        if (isEditing && id) {
            const member = getFacultyMember(id);
            if (member) {
                setFormData({
                    name: member.name,
                    subject: member.subject,
                    email: member.email,
                    phone: member.phone,
                    qualification: member.qualification,
                    experience: member.experience,
                });
            }
        }
    }, [id, isEditing, getFacultyMember]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing && id) {
            updateFacultyMember({ ...formData, id });
        } else {
            addFacultyMember(formData);
        }
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">
                            {isEditing ? '✏️' : '➕'}
                        </span>
                    </div>
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                        {isEditing ? 'Update Faculty Member' : 'Add New Faculty Member'}
                    </h1>
                    <p className="text-gray-600">
                        {isEditing ? 'Make changes to the faculty details' : 'Fill in the details to add a new member to your squad'}
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300" 
                                placeholder="Enter full name"
                                required 
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Subject Expertise
                            </label>
                            <input 
                                type="text" 
                                name="subject" 
                                id="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-emerald-300" 
                                placeholder="e.g., Mathematics, Physics, Computer Science"
                                required 
                            />
                        </div>

                        {/* Email & Phone Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <svg className="h-5 w-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-cyan-300" 
                                    placeholder="faculty@example.com"
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <svg className="h-5 w-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-teal-300" 
                                    placeholder="+1 234 567 8900"
                                    required 
                                />
                            </div>
                        </div>

                        {/* Qualification Field */}
                        <div>
                            <label htmlFor="qualification" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                <svg className="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                Qualification
                            </label>
                            <input 
                                type="text" 
                                name="qualification" 
                                id="qualification" 
                                value={formData.qualification} 
                                onChange={handleChange} 
                                className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-yellow-300" 
                                placeholder="e.g., Ph.D. in Computer Science, M.A. in History"
                                required 
                            />
                        </div>

                        {/* Experience Field */}
                        <div>
                            <label htmlFor="experience" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Experience
                            </label>
                            <textarea 
                                name="experience" 
                                id="experience" 
                                value={formData.experience} 
                                onChange={handleChange} 
                                rows={4} 
                                className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 resize-none" 
                                placeholder="Describe the teaching experience, achievements, etc."
                                required 
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
                            <button 
                                type="button" 
                                onClick={() => navigate('/')} 
                                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                            >
                                {isEditing ? (
                                    <>
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Save Changes
                                    </>
                                ) : (
                                    <>
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add to Squad!
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
