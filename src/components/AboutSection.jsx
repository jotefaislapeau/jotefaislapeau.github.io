import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-gold uppercase tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mon Art, Ma Passion</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Depuis des années, je me consacre à l'art du tatouage, explorant divers styles et techniques pour offrir des pièces uniques qui racontent une histoire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              alt="Artiste tatoueur travaillant dans un studio élégant aux tons sombres et dorés"
              className="rounded-2xl shadow-xl object-cover w-full h-[400px] md:h-[500px] border-4 border-gray-800 glow-effect-gold-soft"
             src="https://images.unsplash.com/photo-1516259705224-1034fe762389" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect-gold p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ma Philosophie</h3>
              <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Chaque tatouage est une collaboration entre l'artiste et le client. Mon objectif est de traduire vos idées et émotions en une œuvre d'art corporelle intemporelle et significative.
              </p>
            </div>

            <div className="glass-effect-gold p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mon Approche</h3>
              <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                J'utilise des équipements stériles de haute qualité et des encres véganes. L'hygiène et votre confort sont mes priorités absolues, du design initial à la cicatrisation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;