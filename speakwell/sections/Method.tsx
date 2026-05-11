"use client";

import { motion } from "framer-motion";
import { MessageCircle, Target, Zap, Users } from "lucide-react";

const methods = [
  {
    icon: MessageCircle,
    title: "Conversación real desde el día 1",
    description: "No más ejercicios de gramática vacíos. Desde tu primera clase estás hablando y pensando en inglés.",
  },
  {
    icon: Target,
    title: "Enfoque en fluidez, no en perfección",
    description: "Priorizamos que communicates con claridad antes que tener una gramática perfecta. Los errores son parte del aprendizaje.",
  },
  {
    icon: Users,
    title: "Clases 100% personalizadas",
    description: "Cada clase se adapta a tu nivel, objetivos y áreas de mejora. Tu plan de estudios es único.",
  },
  {
    icon: Zap,
    title: "Materiales relevantes para tu contexto",
    description: "Usamos temas de business, entrevistas, viajes o cualquier área que necesites para alcanzar tus metas.",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-24 px-6 bg-bg-base">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            El Método SpeakWell
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Un enfoque práctico que prioriza la comunicación real sobre la teoría.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {methods.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-bg-card border border-border-soft hover:border-accent-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 bg-bg-dark text-white font-medium rounded-xl hover:bg-accent-primary transition-colors"
          >
            Ver resultados de estudiantes
          </a>
        </motion.div>
      </div>
    </section>
  );
}