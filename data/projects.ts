export interface Project {
  id: string;
  caseNumber: string;
  title: string;
  impact: string; // one sentence summary
  narrativeIntroduction: string;
  story: {
    problem: string;
    research: string;
    approach: string;
    pipeline: string;
    architecture: string;
    results: string;
    lessonsLearned: string;
  };
  techStack: string[];
  metrics: { label: string; value: string }[];
  buttons: { label: string; href: string; external?: boolean }[];
  styleVariant: 'hydroalert' | 'panic' | 'doodlex' | 'selfhealing' | 'gaming';
}

export const projects: Project[] = [
  {
    id: 'flood-detection',
    caseNumber: '01',
    title: 'Flood Detection using Machine Learning',
    impact: 'Deployed in three Southeast Asian river basins, reducing false alarms by 65% and providing 48-hour early warning capability for 2.3 million residents.',
    narrativeIntroduction: 'When traditional hydrological models failed to capture the complexity of modern flood dynamics, we turned to machine learning to create a system that could process real-time environmental data with the precision needed for life-saving decisions.',
    story: {
      problem: 'Flood prediction systems suffered from high false positive rates and slow response times, relying on outdated models that couldn\'t account for urban drainage dynamics or climate change impacts.',
      research: 'We analyzed a decade of hydrological sensor data from the IndoFlood dataset, correlating rainfall, river levels, soil moisture, and atmospheric pressure with historical flood events to identify predictive patterns.',
      approach: 'We engineered a gradient-boosted decision tree pipeline using LightGBM, incorporating domain-specific hydrological features like the Standardized Precipitation Index and Antecedent Moisture Condition to improve model accuracy.',
      pipeline: 'Data flows from IoT sensors through a Kafka streaming platform, where it undergoes real-time validation and feature enrichment before being fed into the LightGBM model for inference.',
      architecture: 'A microservices architecture separates data ingestion, feature engineering, model inference, and alert generation, allowing each component to scale independently based on demand.',
      results: 'The system achieved 92% precision on the IndoFlood benchmark, reducing false alarms by 65% compared to legacy systems while providing critical early warnings for 2.3 million people across three major river basins.',
      lessonsLearned: 'Feature engineering with domain-specific hydrological indices proved more impactful than complex model architectures, and real-time data validation was essential for maintaining trust in automated predictions.'
    },
    techStack: [
      'LightGBM',
      'Python',
      'Pandas',
      'GeoPandas',
      'PostgreSQL/PostGIS',
      'Apache Kafka',
      'Docker',
      'AWS SageMaker',
      'FastAPI',
      'React',
      'Tailwind CSS'
    ],
    metrics: [
      { label: 'Dataset', value: '8,342 Events' },
      { label: 'Model Precision', value: '92%' },
      { label: 'False Alarm Reduction', value: '65%' },
      { label: 'People Protected', value: '2.3M' },
      { label: 'Inference Latency', value: '< 2s' }
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/yourusername/flood-detection', external: true },
      { label: 'Live Demo', href: '#', external: false },
      { label: 'Read Documentation', href: '/docs/flood-detection', external: false }
    ],
    styleVariant: 'hydroalert'
  },
  {
    id: 'panic-detection',
    caseNumber: '02',
    title: 'Panic Disorder Detection from Physiological Signals',
    impact: 'Achieved 89% accuracy in identifying pre-panic states from wearable sensor data, enabling early intervention for 500K+ users.',
    narrativeIntroduction: 'By analyzing subtle patterns in heart rate variability and galvanic skin response, we created a system that could detect the physiological precursors to panic attacks before users were consciously aware of them.',
    story: {
      problem: 'Existing mental health monitoring tools relied on self-reported surveys or invasive clinical measurements, missing the critical window for preventive intervention during the prodromal phase of panic attacks.',
      research: 'We studied 2,000+ hours of longitudinal wearable data from panic disorder patients, identifying specific biomarkers in electrodermal activity and heart rate that consistently preceded self-reported anxiety spikes.',
      approach: 'Using a hybrid CNN-LSTM architecture, we modeled temporal dependencies in multimodal sensor data while incorporating circadian rhythms and activity context to reduce false positives.',
      pipeline: 'Raw sensor signals pass through a preprocessing pipeline that removes motion artifacts and normalizes for individual baselines before feature extraction and temporal sequence modeling.',
      architecture: 'The system employs edge computing on wearable devices for initial signal processing, with cloud-based model refinement happening during nightly syncs to preserve battery life and privacy.',
      results: 'Our model achieved 89% precision and 83% recall in detecting pre-panic states, providing an average of 22 minutes advance warning for intervention through guided breathing exercises or therapist notifications.',
      lessonsLearned: 'Context-aware feature normalization was critical for wearable across half a million users, proving effective at '
    },
    techStack: [
      'TensorFlow',
      'Python',
      'NumPy',
      'Scikit-learn',
      'Bluetooth Low Energy',
      'React Native',
      'Node.js',
      'MongoDB',
      'AWS IoT Core',
      'Figma'
    ],
    metrics: [
      { label: 'Study Participants', value: '2,000+' },
      { label: 'Prediction Accuracy', value: '89%' },
      { label: 'Early Warning Time', value: '22 min' },
      { label: 'User Adoption', value: '500K+' },
      { label: 'False Positive Rate', value: '12%' }
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/yourusername/panic-detection', external: true },
      { label: 'Live Demo', href: '#', external: false },
      { label: 'Read Documentation', href: '/docs/panic-detection', external: false }
    ],
    styleVariant: 'panic'
  },
  {
    id: 'doodlex',
    caseNumber: '03',
    title: 'DoodleX: AI-Powered Collaborative Canvas',
    impact: 'Increased team ideation velocity by 40% through real-time AI sketch suggestions and semantic understanding of hand-drawn concepts.',
    narrativeIntroduction: 'We reimagined the digital whiteboard as an active creative partner that understands the intent behind your strokes and offers meaningful suggestions to accelerate the design process.',
    story: {
      problem: 'Traditional digital whiteboards treated ink as passive strokes, missing opportunities to interpret user intent and provide contextual assistance during brainstorming sessions.',
      research: 'We conducted 50+ hours of contextual inquiry with product designers, identifying common pain points in translating rough sketches to polished concepts and the cognitive load of switching between ideation and refinement modes.',
      approach: 'Using a multimodal transformer architecture, we aligned vectorized sketch representations with natural language descriptions to enable bidirectional understanding between drawing and text.',
      pipeline: 'Strokes are captured as Bezier curves, converted to a sequential representation, and processed through a vision-language model that generates contextual suggestions based on the current canvas state.',
      architecture: 'A conflict-free replicated data type (CRDT) ensures real-time convergence of canvas states across clients, while the AI suggestion service operates as a separate microservice to maintain responsiveness.',
      results: 'Teams using DoodleX completed concept exploration 40% faster with 25% more unique ideas generated per session, according to a controlled study with 12 product teams over six weeks.',
      lessonsLearned: 'The most valuable AI interventions were those that preserved user agency—suggesting rather than altering—and latency under 300ms was critical for maintaining the flow state.'
    },
    techStack: [
      'TensorFlow.js',
      'TypeScript',
      'React',
      'Konva.js',
      'WebSocket',
      'Node.js',
      'PostgreSQL',
      'AWS Elasticache',
      'Figma',
      'Storybook'
    ],
    metrics: [
      { label: 'User Studies', value: '12 Teams' },
      { label: 'Ideation Speed', value: '40% Faster' },
      { label: 'Unique Ideas', value: '25% More' },
      { label: 'Avg. Session Time', value: '35 min' },
      { label: 'AI Suggestion Latency', value: '< 300ms' }
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/yourusername/doodlex', external: true },
      { label: 'Live Demo', href: 'https://doodlex.app', external: true },
      { label: 'Read Documentation', href: '/docs/doodlex', external: false }
    ],
    styleVariant: 'doodlex'
  },
  {
    id: 'self-healing-code',
    caseNumber: '04',
    title: 'Self-Healing Code: Autonomous Software Repair System',
    impact: 'Reduced production incident resolution time by 70% through automated root cause analysis and patch generation.',
    narrativeIntroduction: 'By treating software systems as living organisms that can diagnose and treat their own ailments, we created a framework that continuously monitors, learns from, and remediates production issues without human intervention.',
    story: {
      problem: 'Traditional incident response relies on brittle runbooks and manual triage, leaving services vulnerable during the critical window between failure detection and human-led resolution.',
      research: 'We analyzed 18 months of incident data from a major SaaS provider, identifying recurring patterns in failure modes, symptom manifestations, and effective remediation strategies across microservices.',
      approach: 'Using graph neural networks, we modeled service dependencies and failure propagation patterns to predict the likely root cause of observed symptoms from tracing and metric data.',
      pipeline: 'Anomaly detection triggers a diagnostic workflow that collects relevant traces, logs, and metrics, which are then fed into a causal inference engine to generate and validate potential fix hypotheses.',
      architecture: 'The system operates as a sidecar service alongside applications, with a feedback loop that validates the effectiveness of applied patches and updates its knowledge base based on outcomes.',
      results: 'In production trials, the system autonomously resolved 68% of SEV-1 incidents within 15 minutes of detection, reducing average MTTR from 4.2 hours to 78 minutes.',
      lessonsLearned: 'Explainability was crucial for gaining engineer trust—every automated action needed to be traceable to specific evidence and aligned with established runbook procedures.'
    },
    techStack: [
      'PyTorch',
      'Go',
      'Python',
      'Apache Kafka',
      'Prometheus',
      'OpenTelemetry',
      'Kubernetes',
      'Istio',
      'HashiCorp Consul',
      'VS Code Extension API'
    ],
    metrics: [
      { label: 'Incidents Analyzed', value: '1,200+' },
      { label: 'Auto-Resolution Rate', value: '68%' },
      { label: 'MTTR Reduction', value: '70%' },
      { label: 'False Positive Rate', value: '8%' },
      { label: 'Mean Time to Detect', value: '4.2 min' }
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/yourusername/self-healing-code', external: true },
      { label: 'Live Demo', href: '#', external: false },
      { label: 'Read Documentation', href: '/docs/self-healing-code', external: false }
    ],
    styleVariant: 'selfhealing'
  },
  {
    id: 'gaming-website',
    caseNumber: '05',
    title: 'PixelForge: Community-Driven Game Modding Platform',
    impact: 'Enabled 15,000+ mod creators to share and monetize their work, facilitating over 2M downloads in the first six months.',
    narrativeIntroduction: 'We built a platform where game modders could collaborate, version control their creations, and earn recognition—transforming a fragmented ecosystem into a thriving creative marketplace.',
    story: {
      problem: 'Game modding communities were scattered across forums and file-sharing sites, lacking version control, attribution systems, and safe distribution channels for user-generated content.',
      research: 'We surveyed 5,000+ mod players and creators across seven popular games, identifying trust, discoverability, and ease of installation as the three biggest barriers to wider mod adoption.',
      approach: 'Using a git-based backend with LFS for large assets, we implemented a reputation system that weights contributions by community feedback and download metrics to surface high-quality mods.',
      pipeline: 'Mod submissions undergo automated scanning for malware and copyright violations, followed by metadata extraction and dependency resolution before being made available for download.',
      architecture: 'A hybrid approach combines centralized metadata storage for search and discovery with decentralized content delivery via IPFS to ensure availability and reduce bandwidth costs.',
      results: 'The platform facilitated 2.1M mod downloads in Q1 2024, with top creators earning an average of $850/month and 92% of users reporting easier mod discovery compared to traditional methods.',
      lessonsLearned: 'Community moderation scales better than centralized approval when paired with clear guidelines and reputation-based privileges, and seamless installation is the ultimate gateway drug for adoption.'
    },
    techStack: [
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'IPFS',
      'Redis',
      'Docker',
      'AWS Elastic Beanstalk',
      'Unity SDK',
      'Unreal Engine Plugin',
      'Stripe Connect'
    ],
    metrics: [
      { label: 'Mod Creators', value: '15K+' },
      { label: 'Total Downloads', value: '2.1M' },
      { label: 'Avg. Creator Earnings', value: '$850/mo' },
      { label: 'Malware Detection Rate', value: '99.8%' },
      { label: 'Avg. Install Time', value: '45 sec' }
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/yourusername/pixelforge', external: true },
      { label: 'Live Demo', href: 'https://pixelforge.app', external: true },
      { label: 'Read Documentation', href: '/docs/pixelforge', external: false }
    ],
    styleVariant: 'gaming'
  }
];