import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>  

          <Route path="/"          element={<Home />} />
          <Route path="/features"  element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
