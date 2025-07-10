import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { FaUniversity, FaUserGraduate, FaSchool } from 'react-icons/fa';

const formButtons = [
  {
    title: 'College',
    levels: [
      'College of Accountancy',
      'College of Arts and Sciences',
      'College of Business Administration',
      'College of Computer Studies',
      'College of Education Student Organization (CEDSO)',
      'College of Nursing/School of Midwifery',
      'College of Physical Therapy',
      'College of Radiologic Technology',
    ],
    path: '/admission-form/college',
    icon: <FaUniversity />,
  },
  {
    title: 'Senior High School',
    levels: ['Grade 11', 'Grade 12'],
    path: '/admission-form/shs',
    icon: <FaUserGraduate />,
  },
  {
    title: 'Junior High School',
    levels: ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
    path: '/admission-form/jhs',
    icon: <FaSchool />,
  },
];

const Admissions = () => {
  const navigate = useNavigate();
  const [showConsent, setShowConsent] = React.useState(false);
  const [consentPath, setConsentPath] = React.useState('');

  const handleCardClick = (path) => {
    setConsentPath(path);
    setShowConsent(true);
  };

  const handleConsentProceed = () => {
    setShowConsent(false);
    navigate(consentPath);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 font-sans">
      <header className="border-b py-6 px-6 shadow-sm bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-800">San Pablo Colleges Admissions</h1>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900"
          >
            <IoArrowBackSharp className="text-lg" />
            Back
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-800 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Welcome to SPC Admissions</h2>
          <p className="text-lg text-white">
            Discover your future here. Choose the program that fits you and take the first step toward success.
          </p>
        </div>
      </section>

      {/* Choose Program Cards */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h3 className="text-2xl font-bold text-green-700 text-center mb-10">Choose Your Program</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {formButtons.map(({ title, levels, path, icon }) => (
            <div
              key={title}
              className="relative bg-white border border-gray-200 rounded-3xl shadow-xl p-6 pt-12 hover:shadow-green-200 transition-all group"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-100 rounded-full p-4 shadow-md group-hover:bg-green-200">
                <div className="text-green-700 text-3xl">{icon}</div>
              </div>

              <h4 className="text-xl font-bold text-center text-green-800 mt-2 mb-2">{title}</h4>
              <hr className="border-t-2 border-green-100 mb-4 w-2/3 mx-auto" />

              <ul className="text-sm text-gray-700 space-y-1 mb-6">
                {levels.map((level, i) => (
                  <li key={i} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-green-600">
                    {level}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCardClick(path)}
                className="block w-full mt-auto bg-green-600 text-white text-sm font-semibold py-2 rounded-full hover:bg-green-700 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions Information Panel */}
      <AdmissionsInfoPanel />

      {/* Consent Modal */}
      {showConsent && (
        <ConsentModal onClose={() => setShowConsent(false)} onProceed={handleConsentProceed} />
      )}

      {/* Spacer */}
      <div className="h-32" />
    </div>
  );
};

// Reusable Info Panel Component
const InfoPanel = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);
  const panelId = `panel-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="bg-white border rounded-xl shadow p-4 transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-green-800 font-semibold text-lg flex justify-between"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{title}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={panelId} className="mt-4 text-sm text-gray-700 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

// Admissions Info Section
const AdmissionsInfoPanel = () => (
  <section className="max-w-4xl mx-auto mt-20 px-6 space-y-6">
    <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Admissions Process & Requirements</h2>

    <InfoPanel title="📋 On-site Registration Procedures">
      <ol className="list-decimal ml-6 space-y-2">
        <li>Submit to the Dean:
          <ul className="list-disc ml-4">
            <li>SHS Grade 12 Report Card</li>
            <li>Good Moral Character Certificate</li>
            <li>Two 2x2 ID Photos with name tag</li>
          </ul>
        </li>
        <li>Pay admission fee at Cashier’s Office</li>
        <li>Secure Admission Kit (2 forms, SPC Primer, Instructions)</li>
        <li>Fill out forms, submit with photos, schedule SPCAT</li>
        <li>Take SPCAT at the Guidance Office</li>
        <li>Check results at Dean’s Office after 3 days</li>
        <li>Interview with department dean</li>
      </ol>
    </InfoPanel>

    <InfoPanel title="🧮 Evaluation Criteria">
      <ul className="list-disc ml-6">
        <li>Scholastic Standing – 33.33%</li>
        <li>Entrance Examination – 33.33%</li>
        <li>Interview Result – 33.33%</li>
      </ul>
    </InfoPanel>

    <InfoPanel title="📥 Entrance Requirements">
      <div>
        <h4 className="font-semibold text-green-700">For Freshmen</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>SPCAT Result</li>
          <li>Form 138 and 137</li>
          <li>4 pcs 2x2 photos (white background)</li>
          <li>Good Moral Certificate</li>
          <li>NCAE result (if available)</li>
          <li>PSA Birth Certificate</li>
          <li>Marriage Certificate (if married)</li>
        </ul>

        <h4 className="font-semibold text-green-700">For Transferees</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>SPCAT Result</li>
          <li>Honorable Dismissal</li>
          <li>Transcript of Records</li>
          <li>Good Moral Certificate</li>
          <li>PSA Birth Certificate</li>
        </ul>

        <h4 className="font-semibold text-green-700">For Juris Doctor</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>SPCCLAT Result</li>
          <li>Required academic units (English, Math, Social Science)</li>
          <li>GWA Certificate (80%+)</li>
          <li>Certificate of Eligibility</li>
          <li>Transcript of Records</li>
          <li>PSA Birth & Marriage Certificate</li>
        </ul>

        <h4 className="font-semibold text-green-700">For Graduate School</h4>
        <ul className="list-disc ml-6">
          <li>Transcript with Evaluation</li>
          <li>Certification of Grades</li>
          <li>Dean Interview</li>
          <li>Valid PRC ID (if applicable)</li>
          <li>PSA Birth & Marriage Certificate</li>
        </ul>
      </div>
    </InfoPanel>
  </section>
);

// Consent Modal Component
const ConsentModal = ({ onClose, onProceed }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg space-y-4">
        <h2 className="text-xl font-bold text-green-800">📜 Declaration of Consent</h2>
        <p className="text-sm text-gray-700">
          I express consent for the school to collect, store, and process my personal data. I understand that my consent
          does not preclude the existence of other criteria for lawful processing of personal data, and does not waive
          any of my rights under the Data Privacy Act of 2012 and other applicable laws. Furthermore, I certify that the
          information given herein is correct and complete.
        </p>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="consent"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-1 accent-green-600"
          />
          <label htmlFor="consent" className="text-sm text-gray-800">
            I have read and agree to the statement above.
          </label>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onProceed}
            disabled={!checked}
            className={`px-4 py-1 rounded text-sm ${
              checked
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
