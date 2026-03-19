import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wholesale from './pages/Wholesale';
import Spaces from './pages/Spaces';
import About from './pages/About';

function App() {
  useEffect(() => {
    // Force a layout recalculation after images have had a chance to load
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
