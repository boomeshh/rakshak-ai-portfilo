import researchPdf from '../assets/FINAL RAKSHAKI AI PAPER.pdf';
import demoVideo from '../assets/DEMO VIDEO.mp4';

const resources = [
  {
    id: 'paper',
    icon: 'FileText',
    title: 'Research Paper',
    description: '28-page academic paper on RAKSHAK AI — hybrid NLP + ML threat detection, CERT escalation, and 90–92% phishing detection accuracy. Presented at YUDHISTRA 2026.',
    href: researchPdf,
    label: 'Download PDF',
    download: 'RAKSHAK-AI-Research-Paper.pdf',
    accent: 'cyan',
  },
  {
    id: 'dataset',
    icon: 'Database',
    title: 'GitHub Dataset',
    description: 'Annotated cyber threat dataset used for training and evaluating the AI classification models.',
    href: 'https://bit.ly/rakshak-ai-dataset',
    label: 'View Dataset',
    accent: 'blue',
  },
  {
    id: 'demo',
    icon: 'Play',
    title: 'Demo Video',
    description: 'Live demonstration of the RAKSHAK AI portal showcasing key features and workflows.',
    href: demoVideo,
    label: 'Watch Demo',
    accent: 'purple',
  },
  {
    id: 'architecture',
    icon: 'Layout',
    title: 'Architecture Diagrams',
    description: 'Detailed system architecture showing component interactions, AI pipeline, and data flows.',
    href: researchPdf,
    label: 'View in Paper',
    accent: 'cyan',
  },
  {
    id: 'sih',
    icon: 'Award',
    title: 'SIH Problem Statement',
    description: 'Original Smart India Hackathon problem statement that inspired the RAKSHAK AI solution.',
    href: '#',
    label: 'View Statement',
    accent: 'blue',
  },
];

export default resources;
