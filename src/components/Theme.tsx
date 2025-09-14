import React from 'react';
import { Globe, Heart, Compass } from 'lucide-react';

const Theme = () => {
  const axes = [
    {
      icon: Globe,
      title: "Culture et diversité",
      description: "Valoriser les traditions, musiques, langues, cuisines et arts du monde",
      gradient: "from-[#2C5AA0] to-[#1E3A8A]",
      bgGradient: "from-[#2C5AA0]/10 to-[#1E3A8A]/10"
    },
    {
      icon: Compass,
      title: "Voyage et découverte",
      description: "Explorer le monde au-delà des barrières géographiques",
      gradient: "from-[#4A1E3A] to-[#8B1538]",
      bgGradient: "from-[#4A1E3A]/10 to-[#8B1538]/10"
    },
    {
      icon: Heart,
      title: "Solidarité et entraide",
      description: "Illustrer la coopération et le soutien entre les peuples",
      gradient: "from-[#0F4C75] to-[#2C5AA0]",
      bgGradient: "from-[#0F4C75]/10 to-[#2C5AA0]/10"
    }
  ];

  return (
    <section id="theme" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5AA0] mb-6">
            Un monde sans frontières
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Choisis l'un de ces trois axes pour donner vie à ta vision d'un monde connecté et uni par la technologie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {axes.map((axe, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${axe.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent transform hover:-translate-y-2`}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${axe.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <axe.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#374151] mb-4 group-hover:text-[#2C5AA0] transition-colors duration-300">
                  {axe.title}
                </h3>
                
                <p className="text-[#374151]/80 leading-relaxed text-lg">
                  {axe.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#374151] mb-4">
              Prêt à relever le défi ?
            </h3>
            <p className="text-[#374151]/80 mb-6">
              Laisse libre cours à ton imagination et crée une expérience web qui transcende les frontières.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-r from-[#2C5AA0] to-[#1E3A8A] text-white px-4 py-2 rounded-full text-sm font-medium">
                Frontend uniquement
              </span>
              <span className="bg-gradient-to-r from-[#4A1E3A] to-[#8B1538] text-white px-4 py-2 rounded-full text-sm font-medium">
                Technologies libres
              </span>
              <span className="bg-gradient-to-r from-[#0F4C75] to-[#2C5AA0] text-white px-4 py-2 rounded-full text-sm font-medium">
                Déploiement obligatoire
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;