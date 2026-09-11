export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  businessImpact: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Leadership" | "Community";
  description: string[];
  skills?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string }[];
}

export const personalInfo = {
  name: "Saheli Chattoraj",
  title: "Final Year B.Tech (CSE) • Analytics & Project Management",
  tagline: "Transforming data into actionable insights and bridging technical teams with business goals.",
  bioShort:
    "Final-year B.Tech (Computer Science & Engineering) student with a passion for technology, business analytics, and project coordination. Skilled in data analysis, reporting tools, and agile workflows, seeking roles in Business Analysis, Product Operations, APM, and Project Management.",
  bioExact: [
    "Final-year B.Tech (Computer Science & Engineering) student with a strong passion for technology, innovation, and problem-solving. Skilled in data structures, and modern development tools, with a keen interest in building efficient and scalable solutions.",
    "A quick learner and dedicated individual, always eager to explore emerging technologies and enhance technical expertise. Actively seeking opportunities to apply academic knowledge in real-world projects and contribute to impactful solutions.",
    "Driven by curiosity and a growth mindset, aiming to begin a professional journey in the tech industry where I can learn, innovate, and make a meaningful impact.",
  ],
  managementVision:
    "I focus on turning raw data into clear business decisions and keeping projects on track. By combining technical literacy with strong organizational skills, I help cross-functional teams communicate effectively, meet sprint goals, and deliver user-focused outcomes.",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    duration: "2021 — 2025",
    cgpa: "8.9 / 10.0",
    honors: "Dean's Academic Honors • Top 5% Cohort",
    relevantCoursework: [
      "Database Management Systems (DBMS & SQL)",
      "Software Project Management & Agile",
      "Data Analysis & Statistical Methods",
      "Software Engineering Lifecycle (SDLC)",
      "Object-Oriented Design Principles",
      "Computer Networks & Web Fundamentals",
      "Human-Computer Interaction & Usability",
    ],
  },
  availability: {
    status: "Open to Business Analyst, Project Coordinator & APM Roles 2025",
    type: "Full-Time Graduate Roles",
    year: "Graduating Summer 2025",
    preferredLocations: "Open to On-site & Remote (India / Global)",
  },
  socialLinks: {
    github: "https://github.com/sahelichattoraj",
    linkedin: "https://linkedin.com/in/sahelichattoraj",
    email: "saheli.chattoraj@gmail.com",
    resume: "/Saheli_Chattoraj_Resume.pdf",
  },
  stats: [
    { label: "Graduation Year", value: "2025" },
    { label: "Academic CGPA", value: "8.9 / 10" },
    { label: "Analytics Projects", value: "4+" },
    { label: "Event Attendees Led", value: "450+" },
  ],
};

export const featuredProjects: Project[] = [
  {
    id: "retailpulse",
    title: "RetailPulse",
    subtitle: "Customer Churn & Sales Performance Analytics Dashboard",
    description:
      "An end-to-end exploratory data analysis project analyzing customer purchasing habits, product category profitability, and indicators of churn using SQL queries and visual dashboards.",
    problem:
      "Retail managers struggled to identify which customer segments were becoming inactive until after significant revenue was lost.",
    solution:
      "Structured transactional datasets into clean tables, calculated Recency-Frequency-Monetary (RFM) scores, and created an executive dashboard displaying revenue trends and at-risk cohorts.",
    businessImpact:
      "Identified that 24% of inactive customers could be re-engaged through targeted follow-up offers, providing clear operational next steps.",
    technologies: ["SQL", "Excel / Pivot Tables", "Power BI / Tableau", "Python Basics"],
    highlights: [
      "Segmented 10,000+ transactional records using structured SQL aggregations",
      "Designed visual KPI cards tracking Monthly Recurring Revenue (MRR) and Average Order Value",
      "Prepared an executive slide deck summarizing retention strategies for non-technical managers",
    ],
    githubUrl: "https://github.com/sahelichattoraj/retailpulse",
    featured: true,
  },
  {
    id: "eventflow",
    title: "EventFlow",
    subtitle: "Campus Event & Operations Coordination Portal",
    description:
      "A centralized project and participant management workflow developed to coordinate multi-day college hackathons, participant registrations, and volunteer scheduling.",
    problem:
      "Manual spreadsheets and fragmented communication channels caused scheduling delays, lost attendee data, and confusion during college tech events.",
    solution:
      "Standardized registration data schemas, created an agile milestone tracker, and established automated email confirmation workflows for team leads.",
    businessImpact:
      "Streamlined check-in logistics for 450+ attendees across 4 events, cutting registration desk wait times from 45 minutes to under 10 minutes.",
    technologies: ["Agile Coordination", "Google Sheets / Excel", "Trello / Jira", "Web Portal"],
    highlights: [
      "Managed registration databases and verified attendee credentials with zero data loss",
      "Coordinated daily sync meetings for an 18-member student volunteer team",
      "Created contingency protocol checklists for technical and audio-visual setups",
    ],
    githubUrl: "https://github.com/sahelichattoraj/eventflow",
    featured: true,
  },
  {
    id: "insightdesk",
    title: "InsightDesk",
    subtitle: "Product Usability Study & Feature Prioritization Case",
    description:
      "A product management case study examining user friction in university study management applications. Conducted user interviews, synthesized pain points, and documented product requirements.",
    problem:
      "First-year students abandoned campus study planning apps within 2 weeks due to cluttered navigation and overly complex task entry forms.",
    solution:
      "Conducted 35+ user feedback sessions, mapped student journey journeys, and created a prioritized feature backlog using the MoSCoW framework.",
    businessImpact:
      "Drafted simplified wireframe flows that decreased task creation steps by 40%, delivering a clear product specification document (PRD).",
    technologies: ["User Research", "Product Scoping (PRD)", "Wireframing", "MoSCoW Prioritization"],
    highlights: [
      "Synthesized quantitative survey responses and qualitative user interview transcripts",
      "Built clean user personas and workflow wireframes for core daily interactions",
      "Authored an end-to-end Product Requirement Document with success metrics",
    ],
    githubUrl: "https://github.com/sahelichattoraj/insightdesk",
    featured: true,
  },
  {
    id: "supplytrack",
    title: "SupplyTrack",
    subtitle: "Inventory Turnover & Fulfillment Reporting System",
    description:
      "A practical business intelligence project designed to monitor inventory stock levels, warehouse reorder triggers, and vendor delivery lead times.",
    problem:
      "Stock-outs and inaccurate demand forecasting caused order fulfillment delays and frustrated customers.",
    solution:
      "Created relational SQL queries to monitor inventory velocity and built automated summary reports highlighting products falling below safety stock thresholds.",
    businessImpact:
      "Automated the weekly operational reporting cycle, saving approximately 5 hours of manual spreadsheet work every week.",
    technologies: ["SQL Reporting", "Relational Schemas", "Advanced Excel (VLOOKUP, Macros)", "Data Modeling"],
    highlights: [
      "Formulated SQL queries with joins and subqueries to detect slow-moving inventory",
      "Constructed automated conditional alert rules for items nearing minimum safety thresholds",
      "Designed clean summary reports easily reviewable by procurement managers",
    ],
    githubUrl: "https://github.com/sahelichattoraj/supplytrack",
    featured: true,
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Project & Operations Intern",
    organization: "TechVanguard Solutions",
    location: "Kolkata / Remote",
    period: "June 2024 — August 2024",
    type: "Internship",
    description: [
      "Assisted project managers in tracking sprint deliverables, documenting feature requirements, and organizing user feedback.",
      "Prepared weekly status decks and milestone summaries for management, tracking blocker resolution across cross-functional teams.",
      "Participated in User Acceptance Testing (UAT) to ensure delivered software modules met original business requirements.",
      "Organized project documentation and workflow tickets in Jira, improving team visibility into task progress.",
    ],
    skills: ["Project Coordination", "Agile Sprints", "Jira", "Requirements Documentation", "Reporting"],
  },
  {
    id: "exp-2",
    role: "Lead Coordinator & Head of Operations",
    organization: "College Coding & Developer Chapter",
    location: "Campus",
    period: "August 2023 — Present",
    type: "Leadership",
    description: [
      "Led an executive team of 18 student coordinators, overseeing planning, scheduling, and logistics for all campus tech events.",
      "Organized 4 campus-wide hackathons and technical symposiums with over 450+ participants, liaising with faculty and sponsors.",
      "Mentored 120+ first- and second-year juniors, conducting weekly study circles on academic fundamentals and problem solving.",
      "Managed event budgets, venue scheduling, and volunteer allocations with zero logistical delays.",
    ],
    skills: ["Team Leadership", "Event Operations", "Budgeting", "Public Speaking", "Mentorship"],
  },
  {
    id: "exp-3",
    role: "Community Contributor & Documentation Fellow",
    organization: "Developer Collective & Student Network",
    location: "Remote",
    period: "January 2024 — May 2024",
    type: "Community",
    description: [
      "Authored clear technical guides and step-by-step setup documentation, helping onboard over 400 student learners.",
      "Organized peer study materials and synthesized discussion summaries from technical webinars.",
      "Maintained community task boards and supported new members with resource discovery.",
    ],
    skills: ["Technical Writing", "Community Support", "Documentation", "Knowledge Sharing"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Data & Business Analytics",
    description: "Extracting insights, tracking business KPIs, and building visual reports",
    skills: [
      { name: "SQL (Queries, Joins, Group By)", level: "Proficient" },
      { name: "Microsoft Excel (Pivot Tables, VLOOKUP)", level: "Advanced" },
      { name: "Power BI / Tableau (Dashboards)", level: "Intermediate" },
      { name: "Python Basics (Data Analysis)", level: "Familiar" },
      { name: "Data Cleaning & Exploration", level: "Proficient" },
      { name: "Business KPI Tracking", level: "Proficient" },
    ],
  },
  {
    title: "Project & Product Management",
    description: "Agile methodologies, sprint tracking, and requirements gathering",
    skills: [
      { name: "Agile & Scrum Fundamentals", level: "Proficient" },
      { name: "Jira / Trello (Task Tracking)", level: "Proficient" },
      { name: "Requirements Gathering (PRD)", level: "Intermediate" },
      { name: "User Journey & Usability Analysis", level: "Proficient" },
      { name: "Feature Prioritization (MoSCoW)", level: "Proficient" },
      { name: "Sprint Planning & Retrospectives", level: "Familiar" },
    ],
  },
  {
    title: "Technical & Computer Science Foundation",
    description: "Core technical literacy to collaborate effectively with engineering teams",
    skills: [
      { name: "Database Concepts (DBMS & Normalization)", level: "Proficient" },
      { name: "Software Development Lifecycle (SDLC)", level: "Proficient" },
      { name: "Web Fundamentals (HTML, CSS Basics)", level: "Proficient" },
      { name: "Object-Oriented Concepts (OOP)", level: "Familiar" },
      { name: "Computer Networks Fundamentals", level: "Familiar" },
      { name: "Git & Version Control Basics", level: "Familiar" },
    ],
  },
  {
    title: "Professional & Leadership Skills",
    description: "Clear communication, cross-functional collaboration, and team execution",
    skills: [
      { name: "Stakeholder Presentations", level: "Advanced" },
      { name: "Cross-Functional Collaboration", level: "Advanced" },
      { name: "Team Leadership & Coordination", level: "Experienced" },
      { name: "Technical Writing & Documentation", level: "Proficient" },
      { name: "Problem Solving & Critical Thinking", level: "Advanced" },
      { name: "Event & Operations Management", level: "Experienced" },
    ],
  },
];

export const coreValues = [
  {
    number: "01",
    title: "Data-Informed Decision Making",
    description:
      "I believe decisions should be backed by clear metrics rather than guesswork. Whether looking at customer churn or delivery turnaround, data reveals what works.",
  },
  {
    number: "02",
    title: "Clear Cross-Functional Communication",
    description:
      "The best ideas stumble if teams cannot communicate clearly. I bridge conversations between developers, operations, and stakeholders with transparent documentation and empathy.",
  },
  {
    number: "03",
    title: "Reliable Organization & Delivery",
    description:
      "A project's success lies in consistent execution. I focus on breaking down ambitious milestones into realistic sprint tasks, tracking blockers early, and meeting commitments.",
  },
  {
    number: "04",
    title: "Continuous Curiosity & Adaptability",
    description:
      "As an eager learner, I continuously pick up new analytical tools, study industry best practices, and adapt quickly to shifting business priorities.",
  },
];
