import React from 'react';
import Slider from 'react-slick';
import Activity1 from '../images/Activity1.jpg';
import Activity2 from '../images/Activity2.jpg';
import Activity3 from '../images/Activity3.jpg';
import Activity4 from '../images/Activity4.jpg';
import Activity5 from '../images/Activity5.jpg';
import Activity6 from '../images/Activity6.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'; // <-- Make sure this imports your CSS with .grid-bg

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

  return (
    <div className='w-full bg-yellow-100/90 pb-16 px-5 grid-bg'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Slider {...settings} className='w-full max-w-[500px] mx-auto my-4'>
          <div><img src={Activity1} alt='Activity 1' /></div>
          <div><img src={Activity2} alt='Activity 2' /></div>
          <div><img src={Activity3} alt='Activity 3' /></div>
          <div><img src={Activity4} alt='Activity 4' /></div>
          <div><img src={Activity5} alt='Activity 5' /></div>
          <div><img src={Activity6} alt='Activity 6' /></div>
        </Slider>
        <div className='flex flex-col justify-center px-4'>
          <p className='text-[#024c22] text-2xl font-bold'>Announcement for College</p>
          <h1 className='md:text-4xl sm:text-2xl text-xl font-bold py-2'>
            SPC - College Courses Offered
          </h1>
          <p>
            "Admission to San Pablo Colleges is a step-by-step journey, beginning with the
            submission of complete academic and personal credentials, followed by assessment
            through entrance examinations and interviews. Only those who fully comply with the
            admission and enrollment requirements will be considered officially enrolled."
          </p>
          <button className="relative mt-10 w-56 py-4 px-6 bg-gradient-to-r from-green-900 to-emerald-800 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-500 hover:from-emerald-700 hover:to-green-600 hover:shadow-xl hover:scale-105">
            <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></span>
            <span className="relative z-10">Apply for College</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement1;
