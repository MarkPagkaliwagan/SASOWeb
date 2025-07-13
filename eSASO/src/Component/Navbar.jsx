// src/Components/Navbar.jsx
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import { IoKeyOutline, IoCloseOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import spcLogo from '/src/images/SPC.png';
import sasoLogo from '/src/images/SASO.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [changeForm, setChangeForm] = useState({
    username: '',
    old_password: '',
    new_password: '',
  });

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdminLoggedIn(isLoggedIn);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = () => setNav(!nav);

  const handleNavigation = (link) => {
    const normalized = link.toLowerCase().replace(/\s/g, '-');

    if (link === 'Home') {
      navigate('/');
    } else if (link === 'Admin') {
      navigate(isAdminLoggedIn ? '/admin/dashboard' : '/admin');
    } else {
      navigate(`/${normalized}`);
    }

    setNav(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdminLoggedIn(false);
    navigate('/admin');
    window.location.reload();
  };

  const handleChangePassword = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/change-password`,
        changeForm,
        { withCredentials: true }
      );
      alert(res.data.message);
      setShowChangeModal(false);
      setDropdownOpen(false);
    } catch (err) {
      alert(err?.response?.data?.message || 'Failed to change password');
    }
  };

  const navLinks = ["Home", "Admin", "Admissions", "Department Units", "Personel", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-900 text-white shadow-md">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={spcLogo} alt="SPC Logo" className="h-12 w-auto" />
          <img src={sasoLogo} alt="SASO Logo" className="h-10 w-auto" />
          <div className="leading-tight text-left">
            <h1 className="text-sm sm:text-base font-bold">San Pablo Colleges</h1>
            <p className="text-xs sm:text-sm text-gray-200">Student Affairs and Services Office</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold items-center">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link)}
              className="hover:text-[#f6ff72] hover:scale-105 transition-transform duration-200"
            >
              {link}
            </button>
          ))}

          {isAdminLoggedIn && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="ml-4 text-white hover:text-yellow-300"
              >
                <HiDotsVertical size={24} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => setShowChangeModal(true)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-t-lg"
                  >
                    Change Password
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleNav}
          className="md:hidden z-50 text-white"
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[65%] z-50 bg-emerald-800 text-white transform transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-3 px-5 pt-6 pb-4 border-b border-white/10">
          <img src={spcLogo} alt="SPC Logo" className="h-12 w-auto rounded-full border-2 border-white shadow" />
          <img src={sasoLogo} alt="SASO Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <h2 className="text-sm font-bold sm:text-base">San Pablo Colleges</h2>
            <p className="text-xs sm:text-sm text-emerald-200">Student Affairs and Services Office</p>
          </div>
        </div>

        <ul className="mt-6 px-6 space-y-3 font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => handleNavigation(link)}
              className="w-full bg-emerald-700 hover:bg-emerald-600 px-4 py-3 rounded-md shadow-md cursor-pointer"
            >
              {link}
            </li>
          ))}

          {isAdminLoggedIn && (
            <>
              <li
                onClick={() => setShowChangeModal(true)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 px-4 py-3 rounded-md shadow-md cursor-pointer"
              >
                Change Password
              </li>
              <li
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 px-4 py-3 rounded-md shadow-md cursor-pointer"
              >
                Logout
              </li>
            </>
          )}
        </ul>
      </div>

      {/* 🔐 Change Password Modal */}
      {showChangeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowChangeModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <IoCloseOutline className="text-2xl" />
            </button>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
              <IoKeyOutline />
              Change Password
            </h3>
           <input
            type="text"
            placeholder="Username"
            value={changeForm.username}
            onChange={(e) => setChangeForm({ ...changeForm, username: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-gray-800 placeholder-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Old Password"
            value={changeForm.old_password}
            onChange={(e) => setChangeForm({ ...changeForm, old_password: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-gray-800 placeholder-gray-500"
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={changeForm.new_password}
            onChange={(e) => setChangeForm({ ...changeForm, new_password: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 placeholder-gray-500"
            required
          />

            <button
              onClick={handleChangePassword}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save New Password
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
