import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C5AA0] via-[#4A1E3A] to-[#8B1538]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-white/20 -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 mt-12 flex justify-center">
          <img 
            src="/iai_webjam_logo.svg" 
            alt="IAI WebJam Logo" 
            className="h-32 w-auto filter drop-shadow-2xl"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          IAI WebJam
          <span className="block text-3xl md:text-4xl font-normal mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            2025
          </span>
        </h1>

        {/* Slogan 
        <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
          Code ta créativité
        </p>*/}

        {/* Theme */}
        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-12">
          <p className="text-white/80 font-medium tracking-wide">
            Thème : Un monde sans frontières
          </p>
        </div>

        {/* Key Info Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <a 
          href="https://forms.gle/J8Y5qzbu4qPY1J4R7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer group"
        >
          <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-white font-semibold mb-2">Inscription</h3>
          <p className="text-white/80 text-sm">12 - 19 Sept 2025</p>
        </a>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-white font-semibold mb-2">Participation</h3>
          <p className="text-white/80 text-sm">Individuelle - Étudiants IAI</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-white font-semibold mb-2">Durée</h3>
          <p className="text-white/80 text-sm">Une semaine de défi</p>
        </div>
      </div>
        
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-white/30 rounded-full relative">
            <div className="w-1 h-4 bg-white rounded-full absolute top-0 animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;