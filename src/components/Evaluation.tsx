import React from 'react';
import { Palette, Monitor, Users2, Target } from 'lucide-react';

const Evaluation = () => {
  const criteria = [
    {
      icon: Palette,
      title: "Créativité",
      percentage: 30,
      description: "Innovation, originalité et caractère unique de ton projet",
      gradient: "from-[#2C5AA0] to-[#1E3A8A]"
    },
    {
      icon: Monitor,
      title: "Design et interface utilisateur",
      percentage: 25,
      description: "Esthétique, cohérence visuelle et qualité graphique",
      gradient: "from-[#4A1E3A] to-[#8B1538]"
    },
    {
      icon: Users2,
      title: "Expérience utilisateur",
      percentage: 25,
      description: "Facilité d'utilisation, navigation et accessibilité",
      gradient: "from-[#0F4C75] to-[#2C5AA0]"
    },
    {
      icon: Target,
      title: "Respect du thème",
      percentage: 20,
      description: "Adéquation avec 'Un monde sans frontières' et l'axe choisi",
      gradient: "from-[#8B1538] to-[#4A1E3A]"
    }
  ];

  return (
    <section id="evaluation" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5AA0] mb-6">
            Critères d'évaluation
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            Ton projet sera évalué par un jury composé d'enseignants, d'alumni et de professionnels selon ces critères
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {criteria.map((criterion, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${criterion.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <criterion.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#374151] group-hover:text-[#2C5AA0] transition-colors duration-300">
                      {criterion.title}
                    </h3>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${criterion.gradient} bg-clip-text text-transparent`}>
                      {criterion.percentage}%
                    </span>
                  </div>
                  
                  <p className="text-[#374151]/80 leading-relaxed mb-4">
                    {criterion.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${criterion.gradient} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${criterion.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Jury Info */}
        <div className="bg-gradient-to-r from-[#2C5AA0]/5 to-[#4A1E3A]/5 rounded-3xl p-8 border border-[#2C5AA0]/20 text-center">
          <h3 className="text-2xl font-bold text-[#374151] mb-4">
            Composition du jury
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-[#374151]/80">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#2C5AA0] rounded-full"></div>
              <span>Enseignants</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#0F4C75] rounded-full"></div>
              <span>Professionnels</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;