import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import GlassCard from './GlassCard';
import { fadeInUp } from '../animations/variants';

const accentStyles = {
  cyan: {
    border: 'border-cyan-400/50',
    glow: '0 0 20px rgba(0,245,255,0.35)',
    hoverGlow: '0 0 30px rgba(0,245,255,0.5)',
    badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    avatar: 'from-cyan-500/30 to-blue-500/30 border-cyan-400/50',
    text: 'text-cyan-400',
    ring: '0 0 15px rgba(0,245,255,0.4)',
  },
  purple: {
    border: 'border-purple-400/50',
    glow: '0 0 20px rgba(139,92,246,0.35)',
    hoverGlow: '0 0 30px rgba(139,92,246,0.5)',
    badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    avatar: 'from-purple-500/30 to-blue-500/30 border-purple-400/50',
    text: 'text-purple-400',
    ring: '0 0 15px rgba(139,92,246,0.4)',
  },
};

const getInitials = (name) =>
  name
    .split(' ')
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

const TeamCard = ({
  name,
  role,
  organization,
  image,
  accent = 'cyan',
  linkedin,
  github,
  badge,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const styles = accentStyles[accent] || accentStyles.cyan;
  const showImage = image && !imgError;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, boxShadow: styles.hoverGlow }}
      className={`h-full ${className}`}
    >
      <GlassCard
        className={`p-6 rounded-xl text-center h-full flex flex-col items-center border ${styles.border}`}
        style={{ boxShadow: styles.glow }}
      >
        {/* Avatar */}
        <div
          className={`w-20 h-20 rounded-full mx-auto mb-4 border-2 ${styles.avatar.split(' ').slice(-1)[0]} overflow-hidden flex items-center justify-center bg-gradient-to-br ${styles.avatar.split(' ').slice(0, 2).join(' ')}`}
          style={{ boxShadow: styles.ring }}
        >
          {showImage ? (
            <img
              src={image}
              alt={name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
            />
          ) : (
            <span className={`${styles.text} text-2xl font-bold`}>{getInitials(name)}</span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-white font-semibold text-base mb-1 leading-tight">{name}</h3>

        {/* Role badge */}
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs border mb-2 leading-snug ${styles.badge}`}
        >
          {badge || role}
        </span>

        {/* Role (full) if badge is different */}
        {badge && (
          <p className="text-gray-400 text-xs mb-1 leading-snug">{role}</p>
        )}

        {/* Organization */}
        {organization && (
          <p className={`text-xs font-medium mb-4 ${styles.text} opacity-80`}>{organization}</p>
        )}

        {/* Links */}
        <div className="flex justify-center gap-3 mt-auto">
          {linkedin && (
            <a
              href={linkedin}
              aria-label={`${name} LinkedIn`}
              className={`text-gray-400 hover:${styles.text} transition-colors`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link size={16} />
            </a>
          )}
          {github && (
            <a
              href={github}
              aria-label={`${name} GitHub`}
              className={`text-gray-400 hover:${styles.text} transition-colors`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* GitHub icon via SVG since lucide Code2 is generic */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default TeamCard;
