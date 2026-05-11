"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const problems = [
  "Llevas años estudiando inglés y sigues sin entenderte",
  "La gramática te abruma y olvidas todo lo que aprendes",
  "Tienes miedo de hablar y cometer errores",
  "Los cursos tradicionales son aburridos y no te preparan para la realidad",
  "Necesitas inglés para tu carrera pero no progresas",
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            ¿Te sientes identificado?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            La mayoría de las personas que aprenden inglés enfrentan los mismos obstáculos.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-bg-base border border-border-soft"
            >
              <XCircle className="w-6 h-6 text-accent-primary flex-shrink-0" />
              <span className="text-text-secondary text-lg">{problem}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-text-primary font-medium">
            Pero esto no tiene que ser tu realidad.
          </p>
          <a
            href="#method"
            className="inline-block mt-4 text-accent-primary font-semibold hover:underline"
          >
            Descubre cómo SpeakWell lo hace diferente →
          </a>
        </motion.div>
      </div>
    </section>
  );
}