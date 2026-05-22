const workflow = [
  {
    id: 'complaint',
    step: 1,
    icon: 'FileInput',
    title: 'User Complaint',
    description: 'Defence personnel submit cyber incident reports through the secure complaint portal.',
  },
  {
    id: 'analysis',
    step: 2,
    icon: 'Brain',
    title: 'AI Analysis',
    description: 'AI engine processes the complaint using TF-IDF vectorization and NLP analysis.',
  },
  {
    id: 'detection',
    step: 3,
    icon: 'Search',
    title: 'Threat Detection',
    description: 'Machine learning models identify threat type, attack vector, and malicious indicators.',
  },
  {
    id: 'classification',
    step: 4,
    icon: 'Tag',
    title: 'Risk Classification',
    description: 'Threats are scored and classified into severity tiers: Critical, High, Medium, Low.',
  },
  {
    id: 'escalation',
    step: 5,
    icon: 'AlertTriangle',
    title: 'CERT Escalation',
    description: 'Critical threats are automatically escalated to CERT-In with full evidence packages.',
  },
  {
    id: 'monitoring',
    step: 6,
    icon: 'Monitor',
    title: 'Dashboard Monitoring',
    description: 'All incidents are tracked in real-time on the command dashboard with live analytics.',
  },
];

export default workflow;
