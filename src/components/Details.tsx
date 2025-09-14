import React from 'react';
import { Calendar, Clock, User, Upload, CheckCircle } from 'lucide-react';

const Details = () => {
  const timeline = [
    {
      icon: CheckCircle,
      title: "Inscription",
      date: "12/09 - 19/09/2025",
      description: "Période d'inscription ouverte aux étudiants IAI"
    },
    {
      icon: Clock,
      title: "Lancement officiel",
      date: "20/09/2025",
      description: "Début du challenge et accès aux ressources"
    },
    {
      icon: User,
      title: "Développement",
      date: "7 jours",
      description: "Une semaine pour concevoir et développer ton projet"
    },
    {
      icon: Upload,
      title: "Soumission",
      date: "Fin du challenge",
      description: "Dépôt du lien de déploiement + code source"
    }
  ];

  const constraints = [
    {
      title: "Participation individuelle",
      description: "Réservée exclusivement aux étudiants de l'IAI",
      color: "text-[#2C5AA0]"
    },
    {
      title: "Technologies libres",
      description: "Aucune contrainte, choisis tes outils favoris",
      color: "text-[#4A1E3A]"
    },
    {
      title: "Déploiement obligatoire",
      description: "GitHub Pages, Netlify, Vercel, etc.",
      color: "text-[#0F4C75]"
    },
    {
      title: "Pas de backend",
      description: "PHP, Node.js, bases de données interdits",
      color: "text-[#8B1538]"
    }
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5AA0] mb-6">
            Modalités du challenge
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            Tout ce que tu dois savoir pour participer au WebJam 2025
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#374151] text-center mb-12">
            Déroulement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2C5AA0] to-[#4A1E3A] rounded-xl flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#374151] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[#2C5AA0] font-semibold mb-3">
                      {step.date}
                    </p>
                    <p className="text-[#374151]/80 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connector line for desktop 
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#2C5AA0]/30 to-[#4A1E3A]/30"></div>
                )}*/}
              </div>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div>
          <h3 className="text-2xl font-bold text-[#374151] text-center mb-12">
            Cadre et contraintes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constraints.map((constraint, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${constraint.color === 'text-[#2C5AA0]' ? 'bg-[#2C5AA0]' : constraint.color === 'text-[#4A1E3A]' ? 'bg-[#4A1E3A]' : constraint.color === 'text-[#0F4C75]' ? 'bg-[#0F4C75]' : 'bg-[#8B1538]'} mt-2`}></div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-2 ${constraint.color}`}>
                      {constraint.title}
                    </h4>
                    <p className="text-[#374151]/80">
                      {constraint.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;