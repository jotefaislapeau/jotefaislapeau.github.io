import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-yellow-500/20 bg-black/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          © {new Date().getFullYear()} Votre Nom d'Artiste. Tous droits réservés.
        </p>
        <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Créé avec passion, encre et une touche d'or.
        </p>
      </div>
    </footer>
  );
};

export default Footer;