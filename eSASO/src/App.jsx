// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';

import Panel1 from './Component/Panel1';
import Panel2 from './Component/Panel2'; 
import Panel3 from './Component/Panel3'; 

import Footer from './Component/Footer'; // 👈 Import Footer

import Department from './Sections/Department';
import AdminLogin from './Sections/AdminLogin'; 
import Admissions from './Sections/Admission';
import Personel from './Sections/Personel';
import Contact from './Sections/Contact';

import College from './Forms/College';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Panel1 />
              <Panel2 />
              <Panel3 />
            </div>
          }
        />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/department-units" element={<Department />} />
        <Route path="/Personel" element={<Personel />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/admission-form/college" element={<College />} />

      </Routes>
      <Footer /> {/* 👈 Add Footer here */}
    </Router>
  );
}

export default App;
