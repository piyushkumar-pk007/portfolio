const EXPERIENCE_START_DATE = new Date(Date.UTC(2021, 8, 1))

function getExperienceYearsValue(now = new Date()) {
  const currentYear = now.getUTCFullYear()
  const currentMonth = now.getUTCMonth()
  const currentDay = now.getUTCDate()
  let totalMonths =
    (currentYear - EXPERIENCE_START_DATE.getUTCFullYear()) * 12 +
    (currentMonth - EXPERIENCE_START_DATE.getUTCMonth())

  if (currentDay < EXPERIENCE_START_DATE.getUTCDate()) {
    totalMonths -= 1
  }

  const years = Math.max(totalMonths, 0) / 12
  return Math.floor(years * 10) / 10
}

const experienceYearsValue = getExperienceYearsValue()
const experienceYearsLabel = `${experienceYearsValue.toFixed(1)}+`
const experienceYearsText = `${experienceYearsLabel} years`

export const profile = {
  name: 'Piyush Kumar',
  title: 'Data Scientist · Supply Chain Analytics',
  tagline: `ML | MLOps | GenAI · ${experienceYearsValue.toFixed(1)}+ Years`,
  avatarUrl: '/images/avatar.jpg',
  availableForWork: true,
  heroRoles: ['Data Scientist', 'Supply Chain Analyst', 'ML Engineer', 'AI-ML Engineer', 'Full Stack Developer'],
  summary:
    `Data Scientist with ${experienceYearsText} and ₹1 Cr+ in documented savings — embedded with supply chain teams at Jayanita Exports and Laysan Technologies to turn messy operational data into forecasts, procurement decisions, and inventory plans that actually get used. Forecast MAPE as low as 4.8%. Inventory holding cut by 18%. 24+ competitions entered.`,
  location: 'Greater Noida, India',
  email: 'piyushkumar.aspk@gmail.com',
  phone: '+91 96081 46506',
  linkedin: 'https://www.linkedin.com/in/piyushkumar-pk/',
  github: 'https://github.com/piyushkumar-pk007',
  resumeUrl: '/resume/Piyush_Kumar_Resume.pdf',
  heroStats: [
    { label: 'Years experience', value: experienceYearsLabel },
    { label: 'Annual savings delivered', value: '₹1 Cr+' },
    { label: 'Inventory holding cut', value: '18%' },
    { label: 'Data science competitions', value: '24+' },
  ],
}

export const siteCopy = {
  resumeLabel: 'Resume',
  viewProjectsLabel: 'View Projects',
  heroSlogan: 'Turning raw data into AI-powered decisions.',
  heroSnapshotLabel: 'Snapshot',
  heroRolePrefix: 'Shaping systems as a',
  loadingPageLabel: 'Loading page...',
  loadingStackLabel: 'Loading stack details...',
  copyPathLabel: 'Copy path',
  copiedPathLabel: 'Copied',
  aboutHeading: 'About',
  aboutTitle: 'Data. ML. Systems. Shipped.',
  aboutBody:
    `I'm a Data Scientist, ML Engineer, and full-stack developer with ${experienceYearsText} of end-to-end delivery across analytics, AI/ML, and product. I've built forecasting systems hitting sub-5% MAPE, reduced inventory holding costs by 18%, shipped MILP optimizers that cut procurement spend by ₹1 Cr+, and deployed full-stack dashboards with React and Node.js that teams open every morning. I work across the full stack — Python and SQL on the data side, XGBoost and Prophet for ML, PuLP and SimPy for optimization, React and Node.js for the product layer. Whether the problem is demand forecasting, supplier risk, network planning, or a web app, I take it from raw inputs to something a real user acts on.`,
  skillsHeading: 'Skills',
  skillsTitle: 'A toolkit shaped by planning and execution.',
  experienceHeading: 'Experience',
  experienceTitle: 'Work that compounds into operating leverage.',
  projectsHeading: 'Projects',
  projectsTitle: 'Public prototypes with honest framing.',
  educationHeading: 'Education',
  educationTitle: 'Academic grounding for applied analytics.',
  achievementsHeading: 'Achievements & Certifications',
  achievementsTitle: 'Competition rigor and continuous upskilling.',
  competitionsLabel: 'Competitions',
  certificationsLabel: 'Certifications',
  contactHeading: 'Contact',
  contactTitle: 'Let’s talk about planning, data, and decision systems.',
  contactBody:
    'Open to conversations around data science, supply chain analytics, forecasting, optimization, and applied AI.',
  footerNote: 'Built with React, Tailwind, and care.',
  backToPortfolioLabel: 'Back to portfolio',
  nextProjectLabel: 'Next project',
  previousProjectLabel: 'Previous project',
  contactCtaLabel: 'Reach out directly',
}

export const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
