import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IoArrowBackSharp,
  IoLockClosedOutline,
  IoPersonOutline,
  IoLogInOutline,
} from 'react-icons/io5';

import icon from '../images/Login/icon.png';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="flex justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 px-4 pt-24 pb-20 relative overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
      >
        <IoArrowBackSharp className="text-green-700 text-2xl" />
      </button>

      {/* Login Card */}
      <div
        className={`my-12 w-full max-w-xl p-12 bg-white rounded-3xl shadow-2xl border border-green-200 transform transition-all duration-700 ease-out
          ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Title */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={icon} alt="Admin Icon" className="w-10 h-10" />
            <h2 className="text-4xl font-extrabold text-green-900">Admin Login</h2>
          </div>
          <p className="text-base text-gray-600 mt-2">Sign in to access the admin dashboard</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6 text-lg">
          {/* Username Field */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Username</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-green-700 text-xl">
                <IoPersonOutline />
              </span>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-green-700 text-xl">
                <IoLockClosedOutline />
              </span>
              <input
                type="password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-full bg-green-700 text-white font-semibold py-3 text-lg rounded-xl hover:bg-green-800 transition flex items-center justify-center gap-2"
          >
            <IoLogInOutline className="text-2xl" />
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-8">
          &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default AdminLogin;
