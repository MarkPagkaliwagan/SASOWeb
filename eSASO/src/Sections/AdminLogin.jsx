// src/Sections/AdminLogin.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  IoArrowBackSharp,
  IoLockClosedOutline,
  IoPersonOutline,
  IoLogInOutline,
  IoCloseOutline,
  IoMailOutline,
} from 'react-icons/io5';
import icon from '../images/Login/icon.png';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        { username, password },
        { withCredentials: true }
      );

      localStorage.setItem('admin', JSON.stringify(res.data.admin));
      localStorage.setItem('isAdminLoggedIn', 'true');

      navigate('/admin/dashboard');
      window.location.reload();
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid username or password.');
    }
  };

  const handleForgotPassword = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/forgot-password`,
        { email: forgotEmail },
        { withCredentials: true }
      );
      alert(res.data.message || 'Reset link sent!');
      setShowForgotModal(false);
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to send reset link');
    }
  };

  return (
    <main className="flex justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 px-4 pt-24 pb-20 relative overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
      >
        <IoArrowBackSharp className="text-green-700 text-2xl" />
      </button>

      <div
        className={`my-12 w-full max-w-xl p-12 bg-white rounded-3xl shadow-2xl border border-green-200 transform transition-all duration-700 ease-out ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={icon} alt="Admin Icon" className="w-10 h-10" />
            <h2 className="text-4xl font-extrabold text-green-900">Admin Login</h2>
          </div>
          <p className="text-base text-gray-600 mt-2">Sign in to access the admin dashboard</p>
        </div>

        <form className="space-y-6 text-lg" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Username</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-green-700 text-xl">
                <IoPersonOutline />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-green-700 text-xl">
                <IoLockClosedOutline />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-green-700 text-white font-semibold py-3 text-lg rounded-xl hover:bg-green-800 transition flex items-center justify-center gap-2"
          >
            <IoLogInOutline className="text-2xl" />
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-green-800 font-medium">
          <button onClick={() => setShowForgotModal(true)} className="hover:underline">
            Forgot Password?
          </button>
        </div>

        <p className="text-sm text-gray-400 text-center mt-8">
          &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <IoCloseOutline className="text-2xl" />
            </button>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <IoMailOutline />
              Forgot Password
            </h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
              required
            />
            <button
              onClick={handleForgotPassword}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Reset Link
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminLogin;
