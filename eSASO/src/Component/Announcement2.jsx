import React from 'react';
import Slider from 'react-slick';
import SHS1 from '../images/SHS1.png';
import SHS2 from '../images/SHS2.jpg';
import SHS3 from '../images/SHS3.png';
import SHS4 from '../images/SHS4.png';
import SHS5 from '../images/SHS5.png';
import SHS6 from '../images/SHS6.png';
import SHS7 from '../images/SHS7.png';
import SHS8 from '../images/SHS8.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'; // Make sure this file contains the .grid-bg class

const Announcement2 = () => {
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
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center'>

        {/* TEXT SA LEFT */}
        <div className='flex flex-col justify-center px-4'>
          <p className='text-[#024c22] text-2xl font-bold'>
            Announcement for Senior High School
          </p>
          <h1 className='md:text-4xl sm:text-2xl text-xl font-bold py-2'>
            SPC - SHS Strand Offered
          </h1>
          <p>
            "Admission to San Pablo Colleges is a step-by-step journey, beginning with the
            submission of complete academic and personal credentials, followed by assessment
            through entrance examinations and interviews. Only those who fully comply with the
            admission and enrollment requirements will be considered officially enrolled."
          </p>
          <button className="relative mt-10 w-56 py-4 px-6 bg-gradient-to-r from-green-900 to-emerald-800 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-500 hover:from-emerald-700 hover:to-green-600 hover:shadow-xl hover:scale-105">
            <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></span>
            <span className="relative z-10">Apply for SHS</span>
          </button>
        </div>

        {/* SLIDESHOW SA RIGHT */}
        <Slider {...settings} className='w-full max-w-[500px] mx-auto my-4'>
          <div><img src={SHS1} alt='SHS 1' /></div>
          <div><img src={SHS2} alt='SHS 2' /></div>
          <div><img src={SHS3} alt='SHS 3' /></div>
          <div><img src={SHS4} alt='SHS 4' /></div>
          <div><img src={SHS5} alt='SHS 5' /></div>
          <div><img src={SHS6} alt='SHS 6' /></div>
          <div><img src={SHS7} alt='SHS 7' /></div>
          <div><img src={SHS8} alt='SHS 8' /></div>  
        </Slider>

      </div>
    </div>
  );
};

export default Announcement2;
