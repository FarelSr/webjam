import React from 'react';
import { Code2, Mail, Calendar, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2C5AA0] via-[#4A1E3A] to-[#8B1538] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-2xl">IAI WebJam 2025</div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Le premier concours de développement web dédié aux étudiants de l'Institut Africain d'Informatique. 
              Un événement unique pour révéler les talents de demain.
            </p>
            <div className="text-white/60 text-sm">
              "Code ta créativité"
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Informations pratiques</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-white/60" />
                <div>
                  <p className="font-medium">Inscription</p>
                  <p className="text-white/80 text-sm">12 - 19 septembre 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/60" />
                <div>
                  <p className="font-medium">Lieu</p>
                  <p className="text-white/80 text-sm">Tout se fera en ligne</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-white/80 text-sm">yvt.hngs@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links
          <div>
            <h3 className="text-xl font-bold mb-6">Liens rapides</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-white/80 hover:text-white transition-colors duration-200">
                À propos du WebJam
              </a>
              <a href="#theme" className="block text-white/80 hover:text-white transition-colors duration-200">
                Thème officiel
              </a>
              <a href="#details" className="block text-white/80 hover:text-white transition-colors duration-200">
                Modalités
              </a>
              <a href="#evaluation" className="block text-white/80 hover:text-white transition-colors duration-200">
                Critères d'évaluation
              </a>
            </div> 
          </div>*/}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 IAI WebJam. Tous droits réservés.
            </div>
            <div className="text-white/60 text-sm">
              Organisé par IAI WebJam Team
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 border border-white rotate-45"></div>
        <div className="absolute top-32 right-32 w-16 h-16 border border-white rotate-12"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border border-white -rotate-12"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 border border-white rotate-45"></div>
      </div>
    </footer>
  );
};

export default Footer;