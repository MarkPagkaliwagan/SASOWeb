import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import spcLogo from '/src/images/SPC.png';
import sasoLogo from '/src/images/SASO.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => setNav(!nav);

  const navLinks = ["Home", "Admin", "Admissions", "Department Units", "Personel", "Contact"];

  const handleNavigation = (link) => {
    if (link === "Home") {
      navigate('/');
    } else if (link === "Department Units") {
      navigate('/department-units');
    } else {
      navigate(`/${link.toLowerCase()}`);
    }
    setNav(false); // Close mobile menu on navigation
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-900 text-white shadow-md">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={spcLogo} alt="SPC Logo" className="h-12 w-auto" />
          <img src={sasoLogo} alt="SASO Logo" className="h-10 w-auto" />
          <div className="leading-tight text-left">
            <h1 className="text-sm sm:text-base font-bold">San Pablo Colleges</h1>
            <p className="text-xs sm:text-sm text-gray-200">Student Affairs and Services Office</p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link)}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation(link)}
              className="hover:text-[#f6ff72] hover:scale-105 transition-transform duration-200"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={handleNav}
          aria-label={nav ? 'Close menu' : 'Open menu'}
          className="md:hidden z-50 text-white"
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Overlay */}
      {nav && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={handleNav}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[65%] z-50 bg-emerald-800 text-white shadow-xl transform transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Header - logos side by side */}
        <div className="flex items-center gap-3 px-5 pt-6 pb-4 border-b border-white/10">
          <img src={spcLogo} alt="SPC Logo" className="h-12 w-auto rounded-full border-2 border-white shadow" />
          <img src={sasoLogo} alt="SASO Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <h2 className="text-sm font-bold sm:text-base">San Pablo Colleges</h2>
            <p className="text-xs sm:text-sm text-emerald-200">Student Affairs and Services Office</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="mt-6 px-6 space-y-3 font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => handleNavigation(link)}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation(link)}
              tabIndex={0}
              className="w-full bg-emerald-700 hover:bg-emerald-600 px-4 py-3 rounded-md shadow-md cursor-pointer transition-all duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
