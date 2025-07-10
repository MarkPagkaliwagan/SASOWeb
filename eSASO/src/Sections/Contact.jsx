import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-lime-100 py-30 px-6">
      {/* 📢 Header */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-green-700 via-emerald-500 to-lime-600 bg-clip-text drop-shadow-md mb-16"
      >
        CONTACT US
      </motion.h1>

      {/* 🧾 Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {/* Cards for Address, Phone, Email, Office Hours */}
        {[{
          Icon: MapPin,
          title: "Campus Address",
          content: "San Pablo Colleges\nHermanos Belen St., San Pablo City, Laguna"
        }, {
          Icon: Phone,
          title: "Phone",
          content: "(+63) 49 562-1234\nMon - Sat, 8:00 AM – 5:00 PM"
        }, {
          Icon: Mail,
          title: "Email",
          content: "studentaffairs@spc.edu.ph"
        }, {
          Icon: Clock,
          title: "Office Hours",
          content: "Mon – Sat: 8:00 AM – 5:00 PM"
        }].map(({ Icon, title, content }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 + i * 0.1 }}
            className="bg-white border border-emerald-200 rounded-2xl shadow-lg p-6 flex items-start gap-4"
          >
            <Icon className="text-green-700 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg text-emerald-700">{title}</h3>
              <p className="text-gray-700 whitespace-pre-line">{content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 💬 Message Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white border border-emerald-200 rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-[1.02] transition-transform duration-200 shadow-lg"
          >
            <Send className="mr-2" size={18} /> Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
