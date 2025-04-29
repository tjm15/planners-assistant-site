import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlannersPage from './pages/PlannersPage';
import TechPage from './pages/TechPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';     // Optional
import LedgerPage from './pages/LedgerPage'; // Optional

function App() {
  const location = useLocation(); // To potentially change layout based on route

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planners" element={<PlannersPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Optional Routes */}
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/ledger" element={<LedgerPage />} />
          {/* Add a 404 Not Found page later */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;