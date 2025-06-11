import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Instagram, Mail, ChevronDown, Gem } from 'lucide-react';

const HeroSection = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochain message ! 🚀",
      variant: "default",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center particle-bg-gold">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <img 
            alt="Logo élégant noir et or de l'artiste tatoueur"
            className="w-40 h-40 rounded-full mx-auto border-4 border-yellow-500/50 shadow-xl floating-animation glow-effect-gold"
           src="https://images.unsplash.com/photo-1564510508737-94c64202a296" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text-gold text-glow-gold-strong uppercase tracking-wider"
          style={{ fontFamily: "'Cormorant Garamond', serif" }} 
        >
          Votre Nom d'Artiste
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Artiste Tatoueuse | Créatrice d'Encre Luxueuse
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Je transforme votre peau en une œuvre d'art somptueuse, avec des créations uniques et personnalisées. 
          L'élégance du noir et or, gravée dans l'encre.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="gradient-bg-gold hover:scale-105 transition-transform shadow-md hover:shadow-lg glow-effect-gold"
            onClick={handleContactClick}
          >
            <Gem className="mr-2 h-5 w-5" />
            Prendre Rendez-vous
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-center gap-6 mt-12"
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform text-yellow-400 hover:text-yellow-300"
            onClick={handleContactClick}
          >
            <Instagram className="h-7 w-7" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:scale-110 transition-transform text-yellow-400 hover:text-yellow-300"
            onClick={handleContactClick}
          >
            <Mail className="h-7 w-7" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-yellow-500/70" />
      </motion.div>
    </section>
  );
};

export default HeroSection;