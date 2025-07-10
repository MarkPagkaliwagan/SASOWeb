import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import spcLogo from '/src/images/SPC.png';

const College = () => {
  const [profilePic, setProfilePic] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const renderInput = (label) => (
    <div key={label}>
      <label className="text-sm text-gray-700">{label}</label>
      <input required className="w-full mt-1 p-2 border border-gray-300 rounded-md" type="text" />
    </div>
  );

  const renderTextarea = (label) => (
    <div className="mt-4">
      <label className="text-sm text-gray-700">{label}</label>
      <textarea required className="w-full mt-1 p-2 border border-gray-300 rounded-md" rows={3}></textarea>
    </div>
  );

  return (
 <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4 min-h-screen">
  <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200 space-y-8 mt-12 mb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <img src={spcLogo} alt="SPC Logo" className="h-24 sm:h-28" />
          <div className="flex-1 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">SAN PABLO COLLEGES</h1>
            <p className="text-sm text-gray-600">Hermanos Belen St. San Pablo City</p>
            <p className="text-sm text-gray-600">Tel. Nos. (049) 562-4688, 562-8139-40</p>
            <p className="text-sm text-gray-600">Website: www.sanpablocolleges.edu.ph</p>
          </div>
          <div className="text-center">
            <label className="relative w-24 h-24 block mx-auto rounded-full overflow-hidden border-2 border-gray-300 shadow-md group cursor-pointer">
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaCamera className="text-white text-xl" />
              </div>
            </label>
            <p className="text-xs text-gray-600 mt-2">Upload Photo</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">Application for Admission</h2>
          <p className="text-gray-600 text-sm">College Level</p>
          <p className="text-red-600 text-sm font-medium">Note: All fields are required. Write "N/A" if not applicable.</p>
        </div>

        <p className="text-sm text-gray-700 border-l-4 border-blue-500 pl-4">
          DIRECTIONS: Fill in all information needed as accurately as possible. Write N/A for items that do not apply to you. PLEASE PRINT.
        </p>

        {/* Personal Data */}
        <h3 className="text-lg font-semibold border-b-2 border-blue-500 pb-1 mt-8">Personal Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {['Family Name', 'Given Name', 'Middle Name', 'Gender'].map(renderInput)}
        </div>
        {renderInput('Permanent Address')}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {['No. Street', 'Barangay', 'City/Municipality/Province', 'Zip code'].map(renderInput)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {['Tel. No.', 'Mobile No.', 'E-mail Address', 'Age'].map(renderInput)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {['Religion', 'Place of Birth', 'Civil Status', 'Citizenship'].map(renderInput)}
        </div>
        <div className="mt-4">
          <label className="text-sm text-gray-700">Living with:</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {['With Parents', 'With Relatives', 'Boarding'].map((opt) => (
              <label key={opt} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Family Background */}
        <h3 className="text-lg font-semibold border-b-2 border-blue-500 pb-1 mt-8">Family Background</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {['FATHER', 'MOTHER'].map((parent) => (
            <div key={parent}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{parent}</label>
              {[
                'Name', 'Home Address', 'Tel. No./Mobile No.', 'Citizenship',
                'Occupation', 'Office Address', 'Office Tel. No.',
                'Educational Attainment', 'Last School Attended',
              ].map(renderInput)}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label className="text-sm text-gray-700">Is your father or mother an alumnus of San Pablo Colleges?</label>
          <div className="flex gap-4 mt-2">
            {['YES', 'NO'].map((opt) => (
              <label key={opt} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {['If YES, school year graduated', 'Level/Course'].map(renderInput)}
          </div>
        </div>

        {/* Educational Background */}
        <h3 className="text-lg font-semibold border-b-2 border-blue-500 pb-1 mt-8">Educational Background</h3>
        {[
          'Name of School last attended', 'School Address', 'School year attended', 'Date of Graduation'
        ].map(renderInput)}

        <h4 className="mt-6 font-semibold text-gray-800">FOR TRANSFEREE ONLY:</h4>
        {[
          'Name of School Last attended', 'Course/Degree', 'Major',
          'School Address', 'School year attended'
        ].map(renderInput)}

        {renderTextarea('List of honors/awards/talents/skills')}
        {renderTextarea('List of membership in school/outside organizations')}

        {/* Consent */}
        <h3 className="text-lg font-semibold border-b-2 border-blue-500 pb-1 mt-8">Declaration of Consent</h3>
        <p className="text-sm text-gray-700 mt-2">
          I express consent for the school to collect, store, and process my personal data solely for academic and administrative purposes. This includes any documents submitted during the admissions process.
        </p>
        <div className="mt-4">
          {renderInput('Signature over printed name of the Student')}
        </div>

        {/* Submit */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-lg transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default College;
