// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Panel1 from './Component/Panel1';
import Panel2 from './Component/Panel2';
import Panel3 from './Component/Panel3';

import AdminLogin from './Sections/AdminLogin';
import AdminDashboard from './Sections/AdminDashboard';
import ResetPassword from './Sections/ResetPassword';
import Department from './Sections/Department';
import Admissions from './Sections/Admission';
import Personel from './Sections/Personel';
import Contact from './Sections/Contact';
import College from './Forms/College';

function App() {
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Panel1 />
              <Panel2 />
              <Panel3 />
            </>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={isLoggedIn ? <Navigate to="/admin/dashboard" replace /> : <AdminLogin />}
        />
        <Route path="/admin/reset-password-form" element={<ResetPassword />} />
        <Route
          path="/admin/dashboard"
          element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/admin" replace />}
        />

        {/* Public Routes */} 
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/department-units" element={<Department />} />
        <Route path="/personel" element={<Personel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission-form/college" element={<College />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
