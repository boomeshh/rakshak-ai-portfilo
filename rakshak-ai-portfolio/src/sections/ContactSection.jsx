/**
 * ContactSection — Professional contact + project details.
 * Replaces the previous cyber-themed CTA section.
 */

import { motion } from 'framer-motion';
import { Mail, Building2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { fadeInUp, staggerContainer } from '../animations/variants';

const CONTACT = {
  email: 'rakshakai.admin@gmail.com',
  github: 'https://github.com/boomeshh/ai-cyber-safety-portal-defence',
};

const detailItems = [
  { icon: ShieldCheck, label: 'Project', value: 'RAKSHAK AI' },
  { icon: Building2, label: 'Organization', value: 'Rathinam Technical Campus' },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/boomeshh/ai-cyber-safety-portal-defence', href: CONTACT.github },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface scroll-mt-16">
      <div className="section">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mt-4 mx-auto">
            For reviews, demonstrations, or collaboration on RAKSHAK AI, reach out to the team.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {detailItems.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? 'a' : 'div';
            const wrapperProps = href
              ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
              : {};
            return (
              <motion.div key={label} variants={fadeInUp}>
                <Wrapper
                  {...wrapperProps}
                  className={`card p-5 flex items-center gap-4 h-full ${href ? 'card-hover' : ''}`}
                >
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-blue-50 text-secondary shrink-0">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide uppercase text-slate-400">
                      {label}
                    </p>
                    <p className="text-primary font-medium truncate">{value}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <Mail size={18} />
            Contact Team
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-primary font-semibold hover:bg-white transition-colors"
          >
            <GithubIcon size={18} />
            View GitHub Repository
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
