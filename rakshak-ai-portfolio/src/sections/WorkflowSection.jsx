import { motion } from 'framer-motion';
import { FileInput, Brain, Search, Tag, AlertTriangle, Monitor } from 'lucide-react';
import workflow from '../data/workflow';
import { staggerContainer, fadeInUp } from '../animations/variants';
import { easeTransition } from '../animations/transitions';

const iconMap = { FileInput, Brain, Search, Tag, AlertTriangle, Monitor };

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        System Workflow
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        From complaint submission to CERT escalation — six steps powered by AI.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start md:items-center gap-0"
      >
        {workflow.map((step, index) => {
          const Icon = iconMap[step.icon];
          const isLast = index === workflow.length - 1;

          return (
            <div key={step.id} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
              {/* Step card */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center flex-1 min-w-0 px-2"
                whileHover={{ boxShadow: '0 0 15px rgba(0,245,255,0.6)' }}
              >
                {/* Numbered circle */}
                <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 font-bold text-sm mb-3">
                  {step.step}
                </div>

                {/* Icon */}
                {Icon && <Icon size={24} className="text-cyan-400 mb-2" aria-hidden="true" />}

                {/* Title */}
                <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Connector (not after last step) */}
              {!isLast && (
                <>
                  {/* Desktop: horizontal */}
                  <motion.div
                    className="hidden md:block h-0.5 w-8 bg-cyan-400/30 flex-shrink-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={easeTransition}
                    style={{ transformOrigin: 'left' }}
                  />
                  {/* Mobile: vertical */}
                  <motion.div
                    className="md:hidden w-0.5 h-8 bg-cyan-400/30 mx-auto"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={easeTransition}
                    style={{ transformOrigin: 'top' }}
                  />
                </>
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
