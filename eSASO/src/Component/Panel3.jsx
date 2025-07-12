import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Image Imports...
import College1 from '../images/DepartmentProgram/College1.jpg';
import College2 from '../images/DepartmentProgram/College2.jpg';
import College3 from '../images/DepartmentProgram/College3.jpg';
import College4 from '../images/DepartmentProgram/College4.jpg';
import College5 from '../images/DepartmentProgram/College5.jpg';
import College6 from '../images/DepartmentProgram/College6.jpg';

import SHS1 from '../images/DepartmentProgram/SHS1.png';
import SHS2 from '../images/DepartmentProgram/SHS2.jpg';
import SHS3 from '../images/DepartmentProgram/SHS3.png';
import SHS4 from '../images/DepartmentProgram/SHS4.png';
import SHS5 from '../images/DepartmentProgram/SHS5.png';
import SHS6 from '../images/DepartmentProgram/SHS6.png';
import SHS7 from '../images/DepartmentProgram/SHS7.png';
import SHS8 from '../images/DepartmentProgram/SHS8.png';

import JHS1 from '../images/DepartmentProgram/JHS1.jpg';
import JHS2 from '../images/DepartmentProgram/JHS2.jpg';

import GS1 from '../images/DepartmentProgram/GS1.jpg';
import GS2 from '../images/DepartmentProgram/GS2.jpg';
import GS3 from '../images/DepartmentProgram/GS3.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

const Panel3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSection = ({ title, heading, description, buttonText, images, reverse }) => {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

    const variants = {
      hidden: { opacity: 0, x: reverse ? 100 : -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        className="w-full bg-yellow-100/90 py-12 px-5 grid-bg"
      >
        <div
          className={`max-w-[1240px] mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
        >
          {/* Slider */}
          <div className="w-full md:w-1/2">
            <Slider {...settings} className="w-full max-w-[500px] mx-auto">
              {images.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-auto rounded-md object-cover" />
                </div>
              ))}
            </Slider>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-[#024c22] text-xl sm:text-2xl font-bold">{title}</p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold py-2">{heading}</h1>
            <p className="text-sm sm:text-base text-gray-800 mt-2">{description}</p>
            <button className="relative mt-8 w-full sm:w-56 py-3 px-6 bg-gradient-to-r from-green-900 to-emerald-800 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-500 hover:from-emerald-700 hover:to-green-600 hover:shadow-xl hover:scale-105">
              <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></span>
              <span className="relative z-10">{buttonText}</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const descriptionText = `Admission to San Pablo Colleges is a step-by-step journey, beginning with the
    submission of complete academic and personal credentials, followed by assessment
    through entrance examinations and interviews. Only those who fully comply with the
    admission and enrollment requirements will be considered officially enrolled.`;

  return (
    <>
      {renderSection({
        title: 'Announcement From College',
        heading: 'SPC - College Program Offered',
        description: descriptionText,
        buttonText: 'Apply for College',
        images: [College1, College2, College3, College4, College5, College6],
        reverse: false,
      })}

      {renderSection({
        title: 'Announcement From Senior High School',
        heading: 'SPC - SHS Program Offered',
        description: descriptionText,
        buttonText: 'Apply for SHS',
        images: [SHS1, SHS2, SHS3, SHS4, SHS5, SHS6, SHS7, SHS8],
        reverse: true,
      })}

      {renderSection({
        title: 'Announcement From Junior High School',
        heading: 'SPC - JHS Program Offered',
        description: descriptionText,
        buttonText: 'Apply for JHS',
        images: [JHS1, JHS2],
        reverse: false,
      })}

      {renderSection({
        title: 'Announcement for Grade School',
        heading: 'SPC - GS Program Offered',
        description: descriptionText,
        buttonText: 'Apply for GS',
        images: [GS1, GS2, GS3],
        reverse: true,
      })}
    </>
  );
};

export default Panel3;
