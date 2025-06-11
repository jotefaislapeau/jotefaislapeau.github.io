import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Eye, Brush } from 'lucide-react';

const GallerySection = () => {
  const handleViewClick = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochain message ! 🚀",
      variant: "default",
    });
  };

  const tattooWorks = [
    {
      title: 'Ornement Doré',
      style: 'Ornemental / Fine Line',
      description: 'Des motifs complexes et délicats rehaussés de touches rappelant l\'or, pour un effet luxueux.',
      image: 'Tatouage ornemental noir avec des accents dorés sur un avant-bras'
    },
    {
      title: 'Serpent Élégant',
      style: 'Noir et Gris / Illustratif',
      description: 'Un serpent sinueux et détaillé, symbolisant la transformation, avec des ombres subtiles.',
      image: 'Tatouage d\'un serpent noir et gris enroulé sur une clavicule'
    },
    {
      title: 'Constellation Personnalisée',
      style: 'Minimaliste / Céleste',
      description: 'Votre constellation astrologique ou une carte du ciel significative, finement tracée.',
      image: 'Tatouage minimaliste d\'une constellation d\'étoiles sur une côte'
    },
    {
      title: 'Lettrage Gothique Moderne',
      style: 'Lettrage / Dark',
      description: 'Une calligraphie inspirée du gothique, modernisée pour une esthétique forte et élégante.',
      image: 'Tatouage d\'un lettrage gothique moderne sur un biceps'
    },
    {
      title: 'Rose Sombre',
      style: 'Noir et Gris / Réalisme',
      description: 'Une rose en noir et gris profond, capturant la beauté mélancolique de la fleur.',
      image: 'Tatouage réaliste d\'une rose noire et grise sur une cuisse'
    },
    {
      title: 'Joyau Baroque',
      style: 'Néo-Traditionnel / Ornemental',
      description: 'Un design inspiré des bijoux baroques, avec des détails riches et des lignes audacieuses.',
      image: 'Tatouage néo-traditionnel d\'un joyau orné sur un sternum'
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-gold uppercase tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Galerie de Tatouages</h2>
          <p className="text-lg text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Découvrez une sélection de mes créations. Chaque pièce est unique et réalisée avec une touche d'élégance sombre.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tattooWorks.map((tattoo, index) => (
            <motion.div
              key={tattoo.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-effect-gold rounded-xl overflow-hidden group border border-yellow-500/30 hover:shadow-yellow-400/20 hover:shadow-lg"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  alt={`Tatouage: ${tattoo.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                 src="https://images.unsplash.com/photo-1604338411017-2051009b0217" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Button 
                    size="sm" 
                    className="gradient-bg-gold shadow-md hover:shadow-lg self-start mb-2 glow-effect-gold-soft"
                    onClick={handleViewClick}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Voir en détail
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{tattoo.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <Brush className="h-4 w-4 mr-2 text-yellow-500" />
                  <span>{tattoo.style}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 h-16 overflow-y-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>{tattoo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;