/**
 * Footer — Improved white academic footer for the RAKSHAK AI research portfolio.
 */

import { Award, Database, Mail, FileText } from 'lucide-react';

const DATASET_URL = 'https://bit.ly/rakshak-ai-dataset';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-surface">
      <div className="section py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand / institution */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">
                R
              </span>
              <span className="text-primary text-lg font-bold tracking-tight">RAKSHAK AI</span>
            </div>
            <p className="text-primary font-semibold">Rathinam Technical Campus</p>
            <p className="text-slate-500 text-sm">Department of Science &amp; Humanities</p>
            <p className="mt-3 inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-wide bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5">
              <Award size={14} />
              YUDHISTRA 2026
            </p>
          </div>

          {/* Project */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
              Project
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollTo('research')} className="inline-flex items-center gap-2 text-slate-600 hover:text-secondary transition-colors">
                  <FileText size={15} /> RAKSHAK AI Research Project
                </button>
              </li>
              <li>
                <a href={DATASET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-secondary transition-colors">
                  <Database size={15} /> Research Dataset Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 text-slate-600 hover:text-secondary transition-colors">
                  <Mail size={15} /> Contact the Team
                </button>
              </li>
              <li className="text-slate-500">Rathinam Technical Campus, Coimbatore</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500">
          <p>© 2026 RAKSHAK AI · Defence Cyber Incident &amp; Safety Portal</p>
          <p>Research Showcase · YUDHISTRA 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
