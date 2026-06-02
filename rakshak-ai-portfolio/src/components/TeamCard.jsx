import { useState } from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { fadeInUp } from '../animations/variants';

const getInitials = (name) =>
  name
    .replace(/^(Mr\.|Er\.|Dr\.|Ms\.|Mrs\.)\s*/i, '')
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
  linkedin,
  github,
  badge,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <motion.div variants={fadeInUp} className={`card card-hover p-6 text-center h-full flex flex-col items-center ${className}`}>
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full mb-4 overflow-hidden flex items-center justify-center bg-slate-100 ring-2 ring-slate-200">
        {showImage ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span className="text-secondary text-2xl font-bold">{getInitials(name)}</span>
        )}
      </div>

      {/* Badge */}
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-secondary mb-2">
          {badge}
        </span>
      )}

      {/* Name */}
      <h3 className="text-primary font-semibold text-base leading-tight">{name}</h3>

      {/* Role */}
      {role && <p className="text-slate-600 text-sm mt-1 leading-snug">{role}</p>}

      {/* Organization */}
      {organization && (
        <p className="text-slate-400 text-xs mt-1 leading-snug">{organization}</p>
      )}

      {/* Links */}
      {(linkedin || github) && (
        <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-slate-100 w-full">
          {linkedin && (
            <a
              href={linkedin}
              aria-label={`${name} on LinkedIn`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-secondary transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
          )}
          {github && (
            <a
              href={github}
              aria-label={`${name} on GitHub`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <GithubIcon size={18} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default TeamCard;
