import React, { useEffect, useRef, useState } from 'react';
import Campus from '../images/Campus.png';
import Campus1 from '../images/Campus1.png';

const images = Object.values(
  import.meta.glob('../images/Panel1/*.{jpg,jpeg,png}', {
    eager: true,
    import: 'default',
  })
).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const Panel1 = () => {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile nav state

  // Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scroll = () => {
      scrollContainer.scrollLeft += 0.5;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Escape key closes modal and menu
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setMenuOpen(false); // ✅ closes menu too
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="relative h-screen w-screen overflow-x-hidden overflow-y-auto">
      
      {/* ✅ Mobile Burger Button (top-left corner) */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {/* ✅ Mobile Side Navigation Drawer */}
      {menuOpen && (
        <>
          {/* Overlay behind drawer */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          />
          {/* Side menu itself */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 space-y-4">
            <button
              className="text-2xl text-emerald-900 self-end mb-4"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <a href="#" className="text-lg text-emerald-800 font-medium hover:text-emerald-600">Home</a>
            <a href="#" className="text-lg text-emerald-800 font-medium hover:text-emerald-600">Admissions</a>
            <a href="#" className="text-lg text-emerald-800 font-medium hover:text-emerald-600">Contact</a>
          </div>
        </>
      )}

      {/* Background Switcher */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background */}
        <div
          className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Campus1})` }}
        />
        {/* Desktop background */}
        <div
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Campus})` }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-950/40 z-10" />

      {/* Thumbnails Row */}
      <div className="absolute bottom-4 w-full z-20 px-2 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 items-center scrollbar-hide py-2 px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 max-w-[90vw]">
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="h-28 w-44 sm:h-32 sm:w-48 object-cover rounded-xl shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl transition-transform duration-300 scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hide Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Panel1;
