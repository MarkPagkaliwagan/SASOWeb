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
    <header className="fixed top-0 left-0 w-full z-50 bg-green-900/90 backdrop-blur-lg text-white shadow-md">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img src={spcLogo} alt="SPC Logo" className="h-8 sm:h-10 w-auto" />
          <img src={sasoLogo} alt="SASO Logo" className="h-6 sm:h-8 w-auto" />
          <h1 className="hidden sm:block text-xs sm:text-sm md:text-base font-serif tracking-wide">
            SPC. Student Affairs and Services Office
          </h1>
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

        {/* Overlay for dimming background */}
{nav && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={handleNav}
  ></div>
)}

{/* Mobile Sidebar Menu */}
<div
  className={`md:hidden fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-green-900 z-50 transform transition-transform duration-300 ${
    nav ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="flex items-center gap-2 px-4 pt-6">
    <img src={spcLogo} alt="SPC Logo" className="h-8 w-auto" />
    <h2 className="text-lg font-serif text-[#33af88]">SPC.SASO</h2>
  </div>

  <ul className="mt-8 px-6 space-y-4 text-base font-medium">
    {navLinks.map((link, index) => (
      <li
        key={index}
        onClick={() => handleNavigation(link)}
        onKeyDown={(e) => e.key === 'Enter' && handleNavigation(link)}
        tabIndex={0}
        className="bg-white text-green-900 px-4 py-2 rounded-md shadow hover:bg-[#00df9a] hover:text-white cursor-pointer transition-all duration-200"
      >
        {link}
      </li>
    ))}
  </ul>
</div>

      </div>
    </header>
  );
};

export default Navbar;
