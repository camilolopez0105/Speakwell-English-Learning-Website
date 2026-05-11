"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Desarrollador Full Stack",
    image: "CM",
    content: "Después de 6 meses con SpeakWell, pude conseguir mi primer trabajo remoto con clientes angloparlantes. Mi confianza al speak inglés cambió completamente.",
    stars: 5,
  },
  {
    name: "Ana García",
    role: "Gerenta de Marketing",
    image: "AG",
    content: "Necesitaba business English para reuniones ejecutivas. Ahora puedo presentar y negociar sin depender de intérpretes. La inversión valió la pena.",
    stars: 5,
  },
  {
    name: "Miguel Torres",
    role: "Estudiante Universitario",
    image: "MT",
    content: "Preparé mi entrevista para estudiar en el extranjero. Obtuve la beca gracias a mi nivel de inglés. Las clases de mock interview fueron clave.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Estudiantes que transformaron su inglés
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Historias reales de personas que alcanzaron sus objetivos con SpeakWell.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="p-6 rounded-2xl bg-bg-base border border-border-soft"
            >
              <Quote className="w-8 h-8 text-accent-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-primary text-accent-primary" />
                ))}
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary font-semibold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-bold text-text-primary">
            +200 estudiantes satisfechos
          </p>
          <p className="text-text-muted mt-2">Y cada día más</p>
        </motion.div>
      </div>
    </section>
  );
}