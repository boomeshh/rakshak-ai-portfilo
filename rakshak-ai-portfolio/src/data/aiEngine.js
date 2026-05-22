const aiEngine = [
  {
    id: 'tfidf',
    icon: 'Hash',
    title: 'TF-IDF Vectorizer',
    description: 'Converts complaint text into numerical feature vectors for machine learning processing.',
    badge: 'Feature Extraction',
    position: 'top-left',
  },
  {
    id: 'logistic',
    icon: 'TrendingUp',
    title: 'Logistic Regression',
    description: 'Primary classification model achieving 92% accuracy in phishing threat detection.',
    badge: '92% Accuracy',
    position: 'top-right',
  },
  {
    id: 'nlp',
    icon: 'MessageSquare',
    title: 'NLP Engine',
    description: 'Natural language processing pipeline for semantic analysis and scam pattern recognition.',
    badge: 'Semantic Analysis',
    position: 'middle',
  },
  {
    id: 'rule-based',
    icon: 'GitBranch',
    title: 'Rule-Based Intelligence',
    description: 'Expert system with curated threat signatures and behavioral pattern matching rules.',
    badge: 'Pattern Matching',
    position: 'bottom-left',
  },
  {
    id: 'hybrid',
    icon: 'Cpu',
    title: 'Hybrid AI Classification',
    description: 'Ensemble model combining ML predictions with rule-based logic for superior accuracy.',
    badge: 'Hybrid Model',
    position: 'bottom-right',
  },
];

export default aiEngine;
