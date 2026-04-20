import React from 'react';
import { Link } from 'react-router-dom';
import { useFaculty } from '../context/FacultyContext';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
    const { faculty, loading, error, deleteFacultyMember } = useFaculty();
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            {/* Animated header */}
            <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-lg">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
                                <span className="text-4xl">👨‍🏫</span>
                                <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                                    Faculty Dashboard
                                </span>
                            </h1>
                            <p className="text-purple-100 mt-1">Manage your team with style! ✨</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30">
                                <p className="text-white font-semibold">
                                    👋 Hey, <span className="text-yellow-200">{user?.username}</span>!
                                </p>
                            </div>
                            <button
                                onClick={logout}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white px-6 py-2 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                            <div>
                                <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Your Faculty Squad 🎓
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    {faculty.length} amazing {faculty.length === 1 ? 'member' : 'members'}
                                </p>
                            </div>
                            <Link 
                                to="/add" 
                                className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add New Member
                            </Link>
                        </div>
                        
                        {loading && (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center">
                                    <svg className="animate-spin h-12 w-12 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="ml-4 text-xl text-gray-600 font-semibold">Loading your team...</span>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="text-center py-12 bg-red-50 border-2 border-red-200 rounded-2xl">
                                <p className="text-red-600 font-bold text-lg">❌ Oops! {error}</p>
                            </div>
                        )}

                        {!loading && !error && (
                            <>
                                {faculty.length === 0 ? (
                                    <div className="text-center py-20">
                                        <div className="text-8xl mb-6">📚</div>
                                        <p className="text-gray-600 text-2xl font-bold mb-2">No faculty members yet.</p>
                                        <p className="text-gray-500 mb-8">Start building your amazing team!</p>
                                        <Link 
                                            to="/add" 
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                                        >
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Add Your First Member
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {faculty.map(member => (
                                            <div 
                                                key={member.id} 
                                                className="group relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                                            >
                                                <div className="flex items-start gap-4 mb-4">
                                                    <img 
                                                        src={member.profilePicture || `https://i.pravatar.cc/150?u=${member.id}`} 
                                                        alt={member.name} 
                                                        className="h-16 w-16 rounded-2xl object-cover border-4 border-purple-200 group-hover:border-purple-400 transition-colors shadow-lg"
                                                    />
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                            {member.name}
                                                        </h3>
                                                        <p className="text-purple-600 font-semibold">
                                                            📖 {member.subject}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="space-y-3 mb-4">
                                                    <div className="flex items-center text-gray-700">
                                                        <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="text-sm">{member.email}</span>
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <svg className="h-5 w-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                        <span className="text-sm">{member.phone}</span>
                                                    </div>
                                                </div>

                                                <div className="flex gap-2 pt-4 border-t border-purple-100">
                                                    <Link 
                                                        to={`/edit/${member.id}`} 
                                                        className="flex-1 flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-2 px-4 rounded-xl transition-all duration-300 group-hover:scale-105"
                                                    >
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        Edit
                                                    </Link>
                                                    <button 
                                                        onClick={() => deleteFacultyMember(member.id)} 
                                                        className="flex-1 flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-4 rounded-xl transition-all duration-300 group-hover:scale-105"
                                                    >
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

