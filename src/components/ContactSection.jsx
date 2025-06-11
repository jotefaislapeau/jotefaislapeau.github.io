import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochain message ! 🚀",
      variant: "default",
    });
  };

  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-gold uppercase tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Prête pour votre Tatouage ?</h2>
          <p className="text-lg text-gray-300 mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Discutons de votre projet et donnons vie à votre idée. Contactez-moi pour prendre rendez-vous ou poser vos questions.
          </p>
          
          <div className="glass-effect-gold p-8 rounded-2xl border border-yellow-500/30">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-lg text-yellow-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Email</h3>
                <p className="text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>votre.email@tattoo.com</p>
              </div>
              <div className="text-center">
                <Instagram className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-lg text-yellow-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Instagram</h3>
                <p className="text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>@VotrePseudoInsta</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-lg text-yellow-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Studio</h3>
                <p className="text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>123 Rue du Tatouage, Votre Ville</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="gradient-bg-gold hover:scale-105 transition-transform shadow-md hover:shadow-lg glow-effect-gold-soft"
              onClick={handleContactClick}
            >
              <Mail className="mr-2 h-5 w-5" />
              Envoyer un Message
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;