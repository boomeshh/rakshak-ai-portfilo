export const metrics = [
  {
    id: 'accuracy',
    value: 92,
    suffix: '%',
    label: 'Phishing Detection Accuracy',
    icon: 'Target',
  },
  {
    id: 'response',
    value: 2,
    suffix: 's',
    label: 'Average Response Time',
    icon: 'Zap',
  },
  {
    id: 'alerts',
    value: 1247,
    suffix: '+',
    label: 'Real-Time Alerts Processed',
    icon: 'Bell',
  },
  {
    id: 'formats',
    value: 12,
    suffix: '+',
    label: 'Evidence Formats Supported',
    icon: 'Database',
  },
];

export const barChartData = [
  { category: 'Phishing', accuracy: 92 },
  { category: 'Honeytrap', accuracy: 87 },
  { category: 'Malware', accuracy: 89 },
  { category: 'OPSEC', accuracy: 84 },
  { category: 'Fake Comms', accuracy: 91 },
  { category: 'APK', accuracy: 86 },
];

export const lineChartData = [
  { month: 'Jan', responseTime: 3.2 },
  { month: 'Feb', responseTime: 2.8 },
  { month: 'Mar', responseTime: 2.5 },
  { month: 'Apr', responseTime: 2.2 },
  { month: 'May', responseTime: 2.0 },
  { month: 'Jun', responseTime: 1.8 },
];

export const progressBars = [
  { label: 'Phishing Detection', value: 92 },
  { label: 'Malware Classification', value: 89 },
  { label: 'NLP Scam Detection', value: 87 },
  { label: 'Risk Scoring Accuracy', value: 94 },
];
