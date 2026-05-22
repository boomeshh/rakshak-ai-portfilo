// Auto-loads all images from src/screenshot/ using Vite's import.meta.glob
// Filenames are mapped to human-readable labels via keyword matching

const rawImages = import.meta.glob('../screenshot/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Keyword → label mapping (order matters — first match wins)
const KEYWORD_MAP = [
  { keywords: ['ADMIN LOGIN'],           label: 'Admin Login',           category: 'Auth' },
  { keywords: ['USER LOGIN'],            label: 'User Login',            category: 'Auth' },
  { keywords: ['CERT LOGIN'],            label: 'CERT Login',            category: 'Auth' },
  { keywords: ['USER CREATE'],           label: 'User Registration',     category: 'Auth' },
  { keywords: ['VERFIY MAIL COMPLETED'], label: 'Email Verified',        category: 'Auth' },
  { keywords: ['VERFIY MAIL'],           label: 'Verify Email',          category: 'Auth' },
  { keywords: ['EMAIL NOT'],             label: 'Email Not Verified',    category: 'Auth' },
  { keywords: ['COMMAND CENTER'],        label: 'Command Center',        category: 'Dashboard' },
  { keywords: ['ADMIN DASHBOARD'],       label: 'Admin Dashboard',       category: 'Dashboard' },
  { keywords: ['USER DASHBOARD'],        label: 'User Dashboard',        category: 'Dashboard' },
  { keywords: ['USER FRONTPAGE'],        label: 'User Front Page',       category: 'Dashboard' },
  { keywords: ['COMPLAINT DASHBOARD-1'], label: 'Complaint Dashboard',   category: 'Complaints' },
  { keywords: ['COMPLAINT DASHBOARD-2'], label: 'Complaint Overview',    category: 'Complaints' },
  { keywords: ['COMPLAINT SUMBISSION'],  label: 'Complaint Submission',  category: 'Complaints' },
  { keywords: ['COMPLAINT SUMBITED'],    label: 'Complaint Submitted',   category: 'Complaints' },
  { keywords: ['SUMBIT COMPLAINT'],      label: 'Submit Complaint',      category: 'Complaints' },
  { keywords: ['HAETMAP'],               label: 'Heatmap Analytics',     category: 'Analytics' },
  { keywords: ['CAMPAGAIN'],             label: 'Campaign Cluster',      category: 'Analytics' },
  { keywords: ['CERT RECENT'],           label: 'CERT Incident Feed',    category: 'CERT' },
  { keywords: ['EXPORT EXCEL'],          label: 'Export Analytics',      category: 'CERT' },
  { keywords: ['CASE TIMEKINE'],         label: 'Case Timeline',         category: 'Admin' },
  { keywords: ['RECENT AUDIT'],          label: 'Audit Trail Logs',      category: 'Admin' },
  { keywords: ['RESGITERD USER'],        label: 'Registered Users',      category: 'Admin' },
  { keywords: ['ALERT EMAIL'],           label: 'Alert Email System',    category: 'Alerts' },
];

const CATEGORY_COLORS = {
  Auth:       'from-cyan-500/20 to-blue-500/20',
  Dashboard:  'from-blue-500/20 to-purple-500/20',
  Complaints: 'from-purple-500/20 to-indigo-500/20',
  Analytics:  'from-cyan-500/20 to-indigo-500/20',
  CERT:       'from-indigo-500/20 to-blue-500/20',
  Admin:      'from-blue-500/20 to-cyan-500/20',
  Alerts:     'from-orange-500/20 to-red-500/20',
  Other:      'from-gray-500/20 to-slate-500/20',
};

const CATEGORY_GLOW = {
  Auth:       'rgba(6,182,212,0.4)',
  Dashboard:  'rgba(99,102,241,0.4)',
  Complaints: 'rgba(139,92,246,0.4)',
  Analytics:  'rgba(6,182,212,0.4)',
  CERT:       'rgba(99,102,241,0.4)',
  Admin:      'rgba(59,130,246,0.4)',
  Alerts:     'rgba(249,115,22,0.4)',
  Other:      'rgba(100,116,139,0.4)',
};

function getLabel(filename) {
  const upper = filename.toUpperCase();
  for (const entry of KEYWORD_MAP) {
    if (entry.keywords.some((kw) => upper.includes(kw.toUpperCase()))) {
      return { label: entry.label, category: entry.category };
    }
  }
  const clean = filename
    .replace(/\.(png|jpg|jpeg|webp)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { label: clean, category: 'Other' };
}

const SUPPORTED_EXT = /\.(png|jpg|jpeg|webp)$/i;

const CATEGORY_ORDER = ['Auth', 'Dashboard', 'Complaints', 'Analytics', 'CERT', 'Admin', 'Alerts', 'Other'];

const screenshots = Object.entries(rawImages)
  .filter(([path]) => SUPPORTED_EXT.test(path))
  .map(([path, url], index) => {
    const filename = path.split('/').pop();
    const { label, category } = getLabel(filename);
    return {
      id: `screenshot-${index}`,
      title: label,
      category,
      gradient: CATEGORY_COLORS[category] || CATEGORY_COLORS.Other,
      glow: CATEGORY_GLOW[category] || CATEGORY_GLOW.Other,
      image: url,
      filename,
    };
  })
  .sort((a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category));

export default screenshots;
