import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { IoKeyOutline } from 'react-icons/io5';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (!token || !email) {
      alert('Invalid or expired reset link.');
      navigate('/admin');
    }
  }, [token, email, navigate]);

  const handleReset = async () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/reset-password`, {
        token,
        email,
        password: newPassword,
      });

      alert(res.data.message);
      navigate('/admin');
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4 py-20">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          <IoKeyOutline className="inline mr-2" />
          Reset Your Password
        </h2>

        <div className="space-y-4">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="New Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Confirm Password"
          />

          <button
            onClick={handleReset}
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
          >
            Reset Password
          </button>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
