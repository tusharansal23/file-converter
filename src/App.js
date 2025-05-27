import React from 'react';
import  FileConvert  from './components/FileConvert';
import AdBanner from './components/AdBanner';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <AdBanner position="top" />
        <FileConvert />
        <AdBanner position="bottom" />
      </main>
      <Footer />
    </div>
  );
}

export default App;