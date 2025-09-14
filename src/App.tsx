import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Theme from './components/Theme';
import Details from './components/Details';
import Evaluation from './components/Evaluation';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Theme />
      <Details />
      <Evaluation />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;