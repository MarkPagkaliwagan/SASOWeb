import React from 'react';
import Slider from 'react-slick';

// College images
import Activity1 from '../images/Activity1.jpg';
import Activity2 from '../images/Activity2.jpg';
import Activity3 from '../images/Activity3.jpg';
import Activity4 from '../images/Activity4.jpg';
import Activity5 from '../images/Activity5.jpg';
import Activity6 from '../images/Activity6.jpg';

// SHS images
import SHS1 from '../images/SHS1.png';
import SHS2 from '../images/SHS2.jpg';
import SHS3 from '../images/SHS3.png';
import SHS4 from '../images/SHS4.png';
import SHS5 from '../images/SHS5.png';
import SHS6 from '../images/SHS6.png';
import SHS7 from '../images/SHS7.png';
import SHS8 from '../images/SHS8.png';

// JHS images
import JHS1 from '../images/JHS1.jpg';
import JHS2 from '../images/JHS2.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

const Announcement1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Section Component Generator
  const renderSection = ({ title, heading, description, buttonText, images, reverse }) => (
    <div className={`w-full bg-yellow-100/90 py-12 px-5 grid-bg`}>
      <div className={`max-w-[1240px] mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
        {/* Slider */}
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="w-full max-w-[500px] mx-auto">
            {images.map((img, idx) => (
              <div key={idx}><img src={img} alt={`Slide ${idx + 1}`} className="w-full h-auto rounded-md object-cover" /></div>
            ))}
          </Slider>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#024c22] text-xl sm:text-2xl font-bold">{title}</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold py-2">{heading}</h1>
          <p className="text-sm sm:text-base text-gray-800 mt-2">
            {description}
          </p>
          <button className="relative mt-8 w-full sm:w-56 py-3 px-6 bg-gradient-to-r from-green-900 to-emerald-800 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-500 hover:from-emerald-700 hover:to-green-600 hover:shadow-xl hover:scale-105">
            <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></span>
            <span className="relative z-10">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );

  const descriptionText = `Admission to San Pablo Colleges is a step-by-step journey, beginning with the
    submission of complete academic and personal credentials, followed by assessment
    through entrance examinations and interviews. Only those who fully comply with the
    admission and enrollment requirements will be considered officially enrolled.`;

  return (
    <>
      {renderSection({
        title: 'Announcement for College',
        heading: 'SPC - College Courses Offered',
        description: descriptionText,
        buttonText: 'Apply for College',
        images: [Activity1, Activity2, Activity3, Activity4, Activity5, Activity6],
        reverse: false,
      })}

      {renderSection({
        title: 'Announcement for Senior High School',
        heading: 'SPC - SHS Strands Offered',
        description: descriptionText,
        buttonText: 'Apply for SHS',
        images: [SHS1, SHS2, SHS3, SHS4, SHS5, SHS6, SHS7, SHS8],
        reverse: true,
      })}

      {renderSection({
        title: 'Announcement for Junior High School',
        heading: 'SPC - JHS Courses Offered',
        description: descriptionText,
        buttonText: 'Apply for JHS',
        images: [JHS1, JHS2],
        reverse: false,
      })}
    </>
  );
};

export default Announcement1;
