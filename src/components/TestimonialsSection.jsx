import React from 'react';
import { motion } from 'framer-motion';
import { Star, Crown } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alexandra V.",
      feedback: "Une expérience de tatouage absolument royale ! Le design est magnifique et l'artiste est d'un professionnalisme rare. Les détails dorés sont sublimes.",
      rating: 5,
      avatar: "Portrait d'une femme élégante avec des bijoux dorés discrets"
    },
    {
      name: "Thomas G.",
      feedback: "Le studio est somptueux, on se sent privilégié. [Votre Nom d'Artiste] a un talent incroyable pour le noir et gris avec ces touches d'or. Résultat parfait.",
      rating: 5,
      avatar: "Portrait d'un homme au style soigné, fond sombre et éclairage chaud"
    },
    {
      name: "Jasmine K.",
      feedback: "Mon tatouage est une pure merveille, si chic et unique. L'attention aux détails est impressionnante. Je recommande les yeux fermés !",
      rating: 5,
      avatar: "Portrait d'une femme avec un maquillage sophistiqué et des cheveux foncés"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-gold uppercase tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Avis des Clients</h2>
          <p className="text-lg text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Ce que mes clients pensent de leur expérience luxueuse.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect-gold p-6 rounded-xl border border-yellow-500/30"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>"{testimonial.feedback}"</p>
              
              <div className="flex items-center">
                <img 
                  alt={`Avatar de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-yellow-600/50"
                 src="https://images.unsplash.com/photo-1528892952291-009c663ce843" />
                <div>
                  <h4 className="font-bold text-yellow-400" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{testimonial.name}</h4>
                  <Crown className="h-4 w-4 text-yellow-500 inline-block fill-yellow-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;