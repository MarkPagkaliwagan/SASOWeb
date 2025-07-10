import React from 'react';
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mb-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Learn More */}
        <div>
          <h4 className="font-bold text-xl mb-3">Learn More</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">History of SPC</a></li>
            <li><a href="#" className="hover:underline">Campus Facilities</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-bold text-xl mb-3">Contact Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><FaEnvelope /> spc.admin@sanpablocollegesspcofficial</li>
            <li className="flex items-center gap-2"><FaPhone /> +63 917 109 0015</li>
          </ul>
        </div>

        {/* Campus Address + Mini Map aligned */}
        <div>
          <h4 className="font-bold text-xl mb-3">Campus Address</h4>
          <div className="flex gap-4 items-start">
            <div className="text-gray-300 w-1/2 leading-snug">
              <p className="flex items-start gap-2 mt-1">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Hermanos Belen St.,<br />
                  Barangay 3A,<br />
                  San Pablo City, Laguna, 4000
                </span>
              </p>
            </div>

            <div className="w-1/2">
              <iframe
                title="SPC Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.140044521832!2d121.32187927458005!3d14.067346990088353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd631b802b1b6d%3A0x8f84f6cd7701d203!2sSan%20Pablo%20Colleges!5e0!3m2!1sen!2sph!4v1689651905314!5m2!1sen!2sph"
                width="100%"
                height="88"
                style={{
                  border: 0,
                  borderRadius: '6px',
                  margin: 0,
                  padding: 0,
                  display: 'block',
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center">
        <div className="space-x-4">
          <a href="https://www.facebook.com/sanpablocollegesspcofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
            <FaFacebook className="inline-block text-2xl" />
          </a>
          <a href="https://www.youtube.com/@sanpablocollegesspcofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
            <FaYoutube className="inline-block text-2xl" />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">&copy; 2025 San Pablo Colleges. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
