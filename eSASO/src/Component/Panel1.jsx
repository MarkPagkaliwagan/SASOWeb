import React, { useEffect, useRef, useState } from 'react';
import Campus from '../images/Campus.png';
import Campus1 from '../images/Campus1.png'; // <-- bagong import para sa mobile

const images = Object.values(
  import.meta.glob('../images/Panel1/*.{jpg,jpeg,png}', {
    eager: true,
    import: 'default',
  })
).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const Panel1 = () => {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Smooth auto-scroll
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

  // Escape key to close modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Switcher */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background */}
        <div
          className="block md:hidden w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Campus1})` }}
        />
        {/* Desktop background */}
        <div
          className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Campus})` }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-950/40 z-10" />

      {/* Thumbnails Row */}
      <div className="absolute bottom-4 w-full z-20 px-2">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 items-center scrollbar-hide py-2 px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0">
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

      {/* Custom Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Panel1;
