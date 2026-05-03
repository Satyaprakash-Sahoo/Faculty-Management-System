import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export const Landing = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500">
            <svg className="h-14 w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747M2 9h20M7 19h10" />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 leading-tight">
          Faculty Management
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            System
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
          Organize, manage, and collaborate with your faculty team seamlessly. 
          <span className="block text-purple-300 mt-2">Start today in just a few clicks!</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {/* Sign In Button */}
          <Link
            to="/login"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </span>
          </Link>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-purple-400 rounded-2xl hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 bg-white/5 backdrop-blur-lg hover:bg-white/10"
          >
            <span className="flex items-center gap-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Create Account
            </span>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 hover:bg-white/15">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-white font-bold text-lg mb-2">Easy Management</h3>
            <p className="text-gray-300 text-sm">Organize and manage faculty information with an intuitive interface</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-400 transition-all duration-300 hover:bg-white/15">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-white font-bold text-lg mb-2">Secure Access</h3>
            <p className="text-gray-300 text-sm">Your data is protected with secure authentication and encrypted storage</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-orange-400 transition-all duration-300 hover:bg-white/15">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-white font-bold text-lg mb-2">Fast & Reliable</h3>
            <p className="text-gray-300 text-sm">Lightning-fast performance for seamless faculty management experience</p>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-400 text-sm">
            Questions? <span className="text-purple-300">Your faculty system is ready to help!</span>
          </p>
        </div>
      </div>
    </div>
  );
};
