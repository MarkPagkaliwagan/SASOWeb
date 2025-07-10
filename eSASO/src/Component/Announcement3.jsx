import React from 'react';
import Slider from 'react-slick';
import JHS1 from '../images/JHS1.jpg';
import JHS2 from '../images/JHS2.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'; // Ensure this file contains the .grid-bg class

const Announcement3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='w-full bg-yellow-100/90 pb-16 px-5 grid-bg'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>

        {/* SLIDESHOW LEFT */}
        <Slider {...settings} className='w-full max-w-[500px] mx-auto my-4'>
          <div><img src={JHS1} alt='Junior High School Activity 1' /></div>
          <div><img src={JHS2} alt='Junior High School Activity 2' /></div>
        </Slider>

        {/* TEXT RIGHT */}
        <div className='flex flex-col justify-center px-4'>
          <p className='text-[#024c22] text-2xl font-bold'>
            Announcement for Junior High School
          </p>
          <h1 className='md:text-4xl sm:text-2xl text-xl font-bold py-2'>
            SPC - JHS Courses Offered
          </h1>
          <p>
            "Admission to San Pablo Colleges is a step-by-step journey, beginning with the submission of complete academic and personal credentials, followed by assessment through entrance examinations and interviews. Only those who fully comply with the admission and enrollment requirements will be considered officially enrolled."
          </p>
          <button className="relative mt-10 w-56 py-4 px-6 bg-gradient-to-r from-green-900 to-emerald-800 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-500 hover:from-emerald-700 hover:to-green-600 hover:shadow-xl hover:scale-105">
            <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></span>
            <span className="relative z-10">Apply for JHS</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement3;
