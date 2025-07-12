import React, { useRef, useEffect } from 'react';
import {
  FaBook,
  FaCross,
  FaLightbulb,
  FaGlobe,
  FaUsers,
  FaStar,
  FaUniversity,
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import spcLogo from '../images/SPC.png';

// Animation variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ScrollFadeCard = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariant}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

const Panel2 = () => {
  return (
    <>
      {/* Inline style tag for grid background */}
      <style>
        {`
          .grid-bg {
            background-color: #f0fdf4;
            position: relative;
            overflow: hidden;
          }
          .grid-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle, #bbf7d0 1px, transparent 1px);
            background-size: 30px 30px;
            opacity: 0.4;
            pointer-events: none;
            z-index: 0;
          }
        `}
      </style>

      <div className="grid-bg py-16 px-4 md:px-16 font-sans">
        <div className="relative z-10">
          {/* Header */}
          <ScrollFadeCard>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 tracking-wide">San Pablo Colleges</h1>
              <p className="text-yellow-600 mt-2 text-lg md:text-xl font-medium">A legacy of excellence since 1947</p>
            </div>
          </ScrollFadeCard>

          {/* Grid layout for top sections */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Brief History */}
            <ScrollFadeCard delay={0.1}>
              <div className="bg-white border-l-4 border-green-700 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6">
                <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-3 mb-2">
                  <FaBook className="text-green-700 bg-green-100 p-2 rounded-full text-3xl" />
                  Brief History
                </h2>
                <p className="mt-2 text-justify text-gray-700">
                  Founded in 1947 by visionaries like Major Ricardo Bonilla and Dr. Antonio Azores, SPC grew from makeshift rooms to a respected institution under leaders such as Judge Paulo Macasaet. Their vision—“a school second to none”—continues today.
                </p>
              </div>
            </ScrollFadeCard>

            {/* Philosophy */}
            <ScrollFadeCard delay={0.2}>
              <div className="bg-white border-l-4 border-yellow-500 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6">
                <h2 className="text-2xl font-semibold text-yellow-700 flex items-center gap-3 mb-2">
                  <FaCross className="text-yellow-600 bg-yellow-100 p-2 rounded-full text-3xl" />
                  Philosophy
                </h2>
                <p className="mt-2 text-justify text-gray-700">
                  A Christian institution committed to the full development of global Filipino learners for the service of God, country, and fellowmen.
                </p>
              </div>
            </ScrollFadeCard>

            {/* Vision */}
            <ScrollFadeCard delay={0.3}>
              <div className="bg-white border-l-4 border-green-700 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6">
                <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-3 mb-2">
                  <FaLightbulb className="text-green-700 bg-green-100 p-2 rounded-full text-3xl" />
                  Vision
                </h2>
                <p className="mt-2 text-justify text-gray-700">
                  An excellent academic institution nurturing diverse learners through relevant, innovative, and value-laden education.
                </p>
              </div>
            </ScrollFadeCard>

            {/* Mission */}
            <ScrollFadeCard delay={0.4}>
              <div className="bg-white border-l-4 border-yellow-500 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6">
                <h2 className="text-2xl font-semibold text-yellow-700 flex items-center gap-3 mb-2">
                  <FaGlobe className="text-yellow-600 bg-yellow-100 p-2 rounded-full text-3xl" />
                  Mission
                </h2>
                <p className="mt-2 text-justify text-gray-700">
                  To holistically develop learners and transform them into globally competitive professionals through quality instruction, research, and community engagement.
                </p>
              </div>
            </ScrollFadeCard>
          </div>

          {/* Core Values */}
          <ScrollFadeCard delay={0.5}>
            <div className="bg-green-50 border-l-4 border-green-700 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 mt-12">
              <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-3 mb-3">
                <FaUsers className="text-green-700 bg-green-100 p-2 rounded-full text-3xl" />
                SPC Core Values
              </h2>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li><strong>Stewardship:</strong> Shaping services to evolving needs with responsibility, transparency, and life-long learning.</li>
                <li><strong>Passion for Learning:</strong> Engaged learners constantly improving themselves and others.</li>
                <li><strong>Caring Community:</strong> Valuing relationships, respect, and diversity within the school and society.</li>
                <li><strong>Sense of Pride:</strong> Taking joy in personal and collective success as SPCians.</li>
              </ul>
            </div>
          </ScrollFadeCard>

          {/* SPCian Traits */}
          <ScrollFadeCard delay={0.6}>
            <div className="bg-white border-l-4 border-yellow-500 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 mt-10">
              <h2 className="text-2xl font-semibold text-yellow-700 flex items-center gap-3 mb-3">
                <FaStar className="text-yellow-500 bg-yellow-100 p-2 rounded-full text-3xl" />
                A Transformed SPCian Embodies
              </h2>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
                <li>SENSE OF HUMANISM AND NATIONHOOD</li>
                <li>SPIRITUAL AND MORAL STRENGTH</li>
                <li>PROFESSIONAL COMPETENCY</li>
                <li>ACCOUNTABILITY AND SOCIAL RESPONSIBILITY</li>
              </ul>
            </div>
          </ScrollFadeCard>

          {/* SPC Seal */}
          <ScrollFadeCard delay={0.7}>
            <div className="bg-green-50 border-l-4 border-green-700 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 mt-10">
              <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-3 mb-3">
                <FaUniversity className="text-green-700 bg-green-100 p-2 rounded-full text-3xl" />
                The SPC Seal
              </h2>
              <p className="text-gray-700 text-justify mt-4">
                The seal includes a circular design bearing “San Pablo Colleges” and “City of San Pablo.” Inside is a triangle labeled with <strong>Patria</strong>, <strong>Virtus</strong>, and <strong>Scientia</strong>—symbolizing excellence in patriotism, character, and knowledge. A Cross radiates light across the seal, and 1947 marks SPC's foundation.
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-green-700">Seal Colors & Meanings:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li><strong>WHITE:</strong> Purity in mind, heart, and performance</li>
                  <li><strong>GREEN:</strong> Growth and sustainability</li>
                  <li><strong>YELLOW (GOLD):</strong> Courage and academic excellence</li>
                </ul>
                <p className="mt-2">
                  The official SPC colors — <span className="text-green-800 font-bold">Green</span> and <span className="text-yellow-600 font-bold">Gold</span> — define its strong academic identity.
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <img src={spcLogo} alt="SPC Logo" className="w-28 h-28 rounded-full border-2 border-green-600" />
              </div>
            </div>
          </ScrollFadeCard>
        </div>
      </div>
    </>
  );
};

export default Panel2;
