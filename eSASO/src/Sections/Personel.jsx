// 📦 Imports
import React from 'react';
import { motion } from 'framer-motion';

// 👤 Sample Data
const head = {
  name: 'Bien Benido R. Lugo Jr RPm',
  title: 'OIC, Office of Student Affairs',
  photo: 'https://via.placeholder.com/150x150.png?text=Maria+Dela+Cruz',
};

const personnelList = [
  {
    name: 'Juan Santos',
    title: 'Guidance Counselor',
    photo: 'https://via.placeholder.com/150x150.png?text=Juan+Santos',
  },
  {
    name: 'Ana Reyes',
    title: 'Medical Officer',
    photo: 'https://via.placeholder.com/150x150.png?text=Ana+Reyes',
  },
  {
    name: 'Carlos Rivera',
    title: 'Sports Coordinator',
    photo: 'https://via.placeholder.com/150x150.png?text=Carlos+Rivera',
  },
];

const studentAssistants = [
  {
    name: 'Jenny Lopez',
    title: 'Student Assistant',
    photo: 'https://via.placeholder.com/150x150.png?text=Jenny+Lopez',
  },
  {
    name: 'Mark Villanueva',
    title: 'Student Assistant',
    photo: 'https://via.placeholder.com/150x150.png?text=Mark+Villanueva',
  },
];

const Personnel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 py-30 px-6">
      {/* 🔰 Title */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-green-700 via-emerald-500 to-lime-600 bg-clip-text drop-shadow-md mb-16"
      >
        PERSONNEL DIRECTORY
      </motion.h1>

      {/* 🧑‍💼 Head */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto mb-16"
      >
        <div className="bg-white/70 backdrop-blur-lg border border-emerald-200 rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition-all">
          <img
            src={head.photo}
            alt={head.name}
            className="w-28 h-28 mx-auto object-cover rounded-full border-4 border-white shadow-md mb-4"
          />
          <h2 className="text-xl font-bold text-emerald-800">{head.name}</h2>
          <p className="text-sm text-gray-700">{head.title}</p>
        </div>
      </motion.div>

      {/* 👥 Personnel */}
      <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Staff</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
        {personnelList.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/60 backdrop-blur-lg border border-emerald-200 rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition-all"
          >
            <img
              src={person.photo}
              alt={person.name}
              className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white shadow-md mb-4"
            />
            <h2 className="text-lg font-bold text-emerald-800">{person.name}</h2>
            <p className="text-sm text-gray-700">{person.title}</p>
          </motion.div>
        ))}
      </div>

      {/* 🧑‍🎓 Student Assistants */}
      <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Student Assistants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {studentAssistants.map((student, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/60 backdrop-blur-lg border border-lime-200 rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition-all"
          >
            <img
              src={student.photo}
              alt={student.name}
              className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white shadow-md mb-4"
            />
            <h2 className="text-lg font-bold text-lime-700">{student.name}</h2>
            <p className="text-sm text-gray-600">{student.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Personnel;
