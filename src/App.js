import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import FileConvert from './components/FileConvert';
import AboutUs from './components/AboutUs';
import Terms from "./components/Terms";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Header />
      <main className="main container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AdBanner position="top" />
                <FileConvert />
                <AdBanner position="bottom" />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
