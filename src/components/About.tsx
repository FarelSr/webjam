import React from 'react';
import { Lightbulb, Target, Zap, Award } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Lightbulb,
      title: "Promouvoir l'innovation",
      description: "Stimuler la créativité et l'innovation dans le développement web"
    },
    {
      icon: Target,
      title: "Valoriser les compétences",
      description: "Offrir une plateforme d'expression et de valorisation des talents"
    },
    {
      icon: Zap,
      title: "Esprit de compétition",
      description: "Favoriser la compétition individuelle et le dépassement de soi"
    },
    {
      icon: Award,
      title: "Excellence technique",
      description: "Encourager l'apprentissage et la maîtrise des technologies web"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5AA0] mb-6">
            À propos du WebJam
          </h2>
          <p className="text-xl text-[#374151] max-w-4xl mx-auto leading-relaxed">
            La première édition du IAI WebJam voit le jour en 2025. Cet événement est pensé comme un espace de créativité et de challenge, dédié exclusivement aux étudiants de l'Institut Africain d'Informatique (IAI).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#2C5AA0]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C5AA0]/5 to-[#4A1E3A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2C5AA0] to-[#4A1E3A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#374151] mb-4 group-hover:text-[#2C5AA0] transition-colors duration-300">
                  {objective.title}
                </h3>
                
                <p className="text-[#374151]/80 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#2C5AA0]/10 to-[#4A1E3A]/10 rounded-3xl p-12 border border-[#2C5AA0]/20">
            <blockquote className="text-2xl md:text-3xl font-medium text-[#2C5AA0] italic mb-4">
              "Zéro frontière, zéro limite : à toi de montrer ce que le web peut devenir entre tes mains."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;