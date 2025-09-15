import React from 'react';
import { Check, X } from 'lucide-react';

const Technologies = () => {
  const allowedTechs = [
    {
      name: "GitHub Pages",
      logo: "/Github_logo.png",
      description: "Hébergement gratuit pour sites statiques"
    },
    {
      name: "Netlify",
      logo: "/netlify_logo.png",
      description: "Déploiement continu et CDN"
    }
  ];

  const restrictedTechs = [
    {
      name: "Node.js",
      logo: "/node_logo.png",
      description: "Runtime JavaScript côté serveur"
    },
    {
      name: "PHP",
      logo: "/php_logo.png",
      description: "Langage de programmation côté serveur"
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C5AA0] mb-6">
            Technologies et déploiement
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            Guide des technologies autorisées et recommandations pour le déploiement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Allowed Technologies */}
          <div>
            <div className="flex items-center mb-8">
              
              <h3 className="text-2xl font-bold text-[#374151]">
                Recommandé pour le déploiement
              </h3>
            </div>
            
            <div className="space-y-6">
              {allowedTechs.map((tech, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#374151] mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-[#374151]/80 text-sm">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <h4 className="font-bold text-[#2C5AA0] mb-2">
                Autres plateformes acceptées :
              </h4>
              <p className="text-[#374151]/80">
                Vercel, Surge.sh, Firebase Hosting, et toute autre plateforme de déploiement statique
              </p>
            </div>
          </div>

          {/* Restricted Technologies */}
          <div>
            <div className="flex items-center mb-8">
              
              <h3 className="text-2xl font-bold text-[#374151]">
                Technologies backend interdites
              </h3>
            </div>
            
            <div className="space-y-6">
              {restrictedTechs.map((tech, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain rounded-lg "
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#374151] mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-[#374151]/80 text-sm">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-[#8B1538] mb-2">
                Également interdits :
              </h4>
              <p className="text-[#374151]/80">
                Bases de données, APIs côté serveur, services cloud avec traitement backend
              </p>
            </div>
          </div>
        </div>

        {/* Frontend Technologies Reminder */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2C5AA0]/10 to-[#4A1E3A]/10 rounded-3xl p-8 border border-[#2C5AA0]/20">
            <h3 className="text-2xl font-bold text-[#374151] mb-4">
              Focus sur le frontend
            </h3>
            <p className="text-[#374151]/80 mb-6 max-w-2xl mx-auto">
              HTML, CSS, JavaScript, React, Vue.js, Angular, TypeScript... Toutes les technologies frontend sont les bienvenues !
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind'].map((tech, index) => (
                <span key={index} className="bg-white px-4 py-2 rounded-full text-[#2C5AA0] font-medium shadow-sm border border-[#2C5AA0]/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;