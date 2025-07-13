import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IoPersonCircleOutline,
  IoDocumentTextOutline,
  IoCalendarOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdmin = localStorage.getItem('admin');
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
      setLoading(false);
    } else {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/admin');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-green-700">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">
          Welcome, {admin?.name || 'Admin'}!
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition"
        >
          <IoLogOutOutline className="text-xl" />
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Applicants</h2>
              <p className="text-3xl font-bold text-green-700 mt-2">1,234</p>
            </div>
            <IoPersonCircleOutline className="text-4xl text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Submitted Forms</h2>
              <p className="text-3xl font-bold text-green-700 mt-2">857</p>
            </div>
            <IoDocumentTextOutline className="text-4xl text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Scheduled Interviews</h2>
              <p className="text-3xl font-bold text-green-700 mt-2">342</p>
            </div>
            <IoCalendarOutline className="text-4xl text-green-600" />
          </div>
        </div>
      </div>

      <section className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-xl text-left transition">
            View All Applications
          </button>
          <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-xl text-left transition">
            Schedule Admission
          </button>
          <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-xl text-left transition">
            View Reports
          </button>
          <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-xl text-left transition">
            Manage Accounts
          </button>
          <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-xl text-left transition">
            System Settings
          </button>
          <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-xl text-left transition">
            Help & Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
