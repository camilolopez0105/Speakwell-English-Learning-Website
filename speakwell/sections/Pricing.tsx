"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Para probar y comenzar tu transformación",
    price: "149",
    period: "/mes",
    classes: "4 clases",
    features: [
      "Clases 1:1 de 50 min",
      "Plan de estudio personalizado",
      "Materiales incluidos",
      "Acceso a grabaciones",
      "Soporte por email",
    ],
    cta: "Empezar ahora",
    popular: false,
  },
  {
    name: "Pro",
    description: "El plan más popular para resultados reales",
    price: "279",
    period: "/mes",
    classes: "8 clases",
    features: [
      "Todo lo del plan Starter",
      "Sesiones de pronunciation review",
      "Feedback detallado por escrito",
      "Acceso a comunidad de práctica",
      "Horario prioritario",
    ],
    cta: "Empezar mi transformación",
    popular: true,
  },
  {
    name: "Intensivo",
    description: "Para accelerate tu progreso",
    price: "499",
    period: "/mes",
    classes: "16 clases",
    features: [
      "Todo lo del plan Pro",
      "2 sesiones de business simulation",
      "Preparación de entrevistas",
      "Coach dedicado",
      "Plan de progreso mensual",
    ],
    cta: "Transformarme rápido",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-bg-base">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Inversión en tu futuro
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus objetivos. Todos incluyen una clase de prueba gratuita.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-bg-card border-accent-primary shadow-lg shadow-accent-primary/10"
                  : "bg-bg-card border-border-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent-primary text-white text-sm font-medium rounded-full">
                    <Zap className="w-4 h-4" />
                    Más popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-muted text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-text-muted">{plan.period}</span>
                </div>
                <p className="text-accent-primary font-medium mt-2">{plan.classes}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <Check className="w-5 h-5 text-success-soft flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent-primary text-white hover:bg-accent-secondary"
                    : "bg-bg-base text-text-primary border border-border-soft hover:border-accent-primary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-text-muted mt-8"
        >
          ¿No sure? Agenda tu clase de prueba gratuita sin compromiso.
        </motion.p>
      </div>
    </section>
  );
}