// 📦 Imports
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import chapel from '../images/chapel.jpg';
import guidance from '../images/guidance.png';

const departments = [
  {
    name: 'Guidance and Career Services Unit (GCSU)',
    image: guidance,
    description: `💬 Facilitates self-actualization through counseling, testing, enrichment programs, peer facilitators, and more.`,
    posts: ['https://via.placeholder.com/300x150?text=Guidance+Announcement+1'],
  },
  {
    name: 'Student Formation and Development Unit (SFDU)',
    image: guidance,
    description: `🌱 Promotes student growth through programs fostering leadership, creativity, and responsibility.`,
    posts: [],
  },
  {
    name: 'SPC Sacred Heart Chapel',
    image: chapel,
    description: `🙏 A sacred space for Masses, novenas, and prayer meetings. Can accommodate 300 people.`,
    posts: ['https://via.placeholder.com/300x150?text=Mass+Schedule'],
  },
  {
    name: 'Medical and Dental Clinics',
    image: guidance,
    description: `🩺 Promotes health through full-time medical and dental care. Discounts available at SPC Medical Center.`,
    posts: [],
  },
  {
    name: 'Sports',
    image: guidance,
    description: `🩺 Promotes health through full-time medical and dental care. Discounts available at SPC Medical Center.`,
    posts: [],
  },
];

const Department = () => {
  const [modal, setModal] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-lime-100 py-30 px-6">
      {/* 🎯 3D Artistic Header */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 via-lime-500 to-green-700 bg-clip-text text-transparent drop-shadow-[0_3px_3px_rgba(0,0,0,0.2)] mb-20"
      >
        UNITS OF THE <br />
        <span className="text-emerald-800">OFFICE OF STUDENT AFFAIRS</span>
      </motion.h1>

      {/* 🧊 Masonry-style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white/60 backdrop-blur-md rounded-3xl shadow-lg border border-emerald-200 p-6 hover:scale-[1.02] transition-all cursor-pointer flex flex-col items-center"
            onClick={() => setModal(dept)}
          >
            <img
              src={dept.image}
              alt={dept.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md mb-4"
            />
            <h2 className="text-center text-xl font-bold text-green-800 mb-2">{dept.name}</h2>
            <p className="text-gray-700 text-sm text-center">{dept.description}</p>

            {/* 📢 Mini-tag for Announcements */}
            {dept.posts.length > 0 && (
              <div className="mt-4 text-xs text-white bg-emerald-500 px-3 py-1 rounded-full">
                📢 {dept.posts.length} Announcement{dept.posts.length > 1 ? 's' : ''}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* 📢 Announcement Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
                onClick={() => setModal(null)}
              >
                ×
              </button>
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">{modal.name}</h2>
              <p className="text-gray-700 mb-6">{modal.description}</p>

              {modal.posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {modal.posts.map((post, i) => (
                    <img
                      key={i}
                      src={post}
                      alt={`Announcement ${i + 1}`}
                      className="rounded-xl shadow-md"
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">📭 No announcements at this time.</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Department;
