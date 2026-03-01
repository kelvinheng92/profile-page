export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}
export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  note?: string;
}
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}
export interface Achievement {
  year: string;
  category: string;
  title: string;
  detail?: string;
}
export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations: number;
  url?: string;
}
export interface SkillGroups {
  leadership: string[];
  ml_ai: string[];
  engineering: string[];
  finance: string[];
  other: string[];
}
export const profile = {
  name: "Kenneth Zhu",
  fullName: "Kenneth Zhu Ke",
  title: "MD, Head of Data Science",
  tagline: "AI & Data Science leader specialising in financial crime detection — 400 AI models making 6 million decisions daily",
  location: "Singapore",
  contact: {
    linkedin: "https://www.linkedin.com/in/kennethzhusg/",
    email: "",
    github: "https://github.com/kennethzhu88",
    scholar: "",
  },
  languages: ["English", "Mandarin Chinese"],
  summary: "Managing Director and Head of Data Science at OCBC with a PhD from NTU and nearly 8 years at the bank spanning six progressive roles — from AVP Data Scientist to MD. Specialist in financial crime detection, fraud prevention, and scalable ML infrastructure. Oversees a platform of 400 AI models that collectively make 6 million decisions every day. Combines deep engineering roots (robotics, mechatronics) with modern data science leadership to deliver measurable risk and business impact.",
  experience: [
    { company: "OCBC", role: "MD, Head of Data Science", period: "Mar 2026 – Present", location: "Singapore", bullets: ["Promoted to Managing Director, Head of Data Science in March 2026.", "Oversees 400+ AI models making 6 million decisions daily across fraud detection, financial crime, and customer analytics.", "Leads a cross-functional data science organisation spanning OCBC and Bank of Singapore."] },
    { company: "OCBC", role: "ED, Head of Data Science", period: "Mar 2025 – Feb 2026", location: "Singapore", bullets: ["Elevated to Executive Director, Head of Data Science.", "Co-authored research on multi-stage extraction from scanned financial documents (arXiv 2025).", "Key speaker at Fraud & Financial Crime Asia 2024 on AI-powered financial crime prevention."] },
    { company: "OCBC", role: "ED, Data Science Lead – Compliance, Ops & GenAI", period: "Mar 2024 – Feb 2025", location: "Singapore", bullets: ["Promoted to Executive Director; expanded scope to include GenAI initiatives alongside compliance and operations.", "Led adoption of generative AI capabilities within financial crime and operational workflows."] },
    { company: "OCBC", role: "VP, Data Science Lead – Compliance & Ops", period: "Sep 2021 – Feb 2024", location: "Singapore", bullets: ["Led data science for compliance and operations domains.", "Scaled AI models for AML, fraud, and regulatory compliance use cases."] },
    { company: "OCBC", role: "AVP, Data Science Lead – Compliance", period: "Aug 2019 – Aug 2021", location: "Singapore", bullets: ["Built and led the compliance-focused data science team.", "Developed production ML models for financial crime detection and AML."] },
    { company: "OCBC", role: "AVP, Data Scientist", period: "Jun 2018 – Jul 2019", location: "Singapore", bullets: ["Joined OCBC as an Associate Vice President Data Scientist.", "Developed ML models for fraud and financial crime use cases."] },
    { company: "National University of Singapore", role: "Industry Mentor", period: "2023 – Present", location: "Singapore", bullets: ["Mentors students in data science and AI, bridging academic research with industry practice."] },
    { company: "TÜV SÜD", role: "Senior Data Scientist", period: "2017 – 2018", location: "Singapore", bullets: ["Developed predictive ML models for industrial safety and quality assurance applications.", "Applied statistical modeling and analytics to sensor and manufacturing data."] },
    { company: "HP Inc.", role: "R&D Engineer", period: "2015 – 2017", location: "Singapore", bullets: ["Conducted thermal inkjet systems research and development.", "Applied statistical modeling and data analytics to manufacturing and product quality."] },
    { company: "Nanyang Technological University", role: "Graduate Teaching Assistant", period: "2013 – 2015", location: "Singapore", bullets: ["Assisted in teaching and research in the School of Mechanical & Aerospace Engineering."] },
  ] as Experience[],
  education: [
    { school: "Nanyang Technological University (NTU)", degree: "Doctor of Philosophy (PhD)", field: "Mechatronics, Robotics & Automation Engineering", period: "2013 – 2018", note: "School of Mechanical & Aerospace Engineering" },
    { school: "National University of Singapore (NUS)", degree: "Master of Technology (MTech)", field: "Software Engineering", period: "Completed" },
    { school: "Quantic School of Business and Technology", degree: "Executive MBA", field: "Business Administration", period: "Completed" },
    { school: "Hunan University", degree: "Bachelor of Engineering (BEng)", field: "Automotive Engineering", period: "Completed" },
  ] as Education[],
  skills: {
    leadership: ["Team Management", "Senior Stakeholder Management", "AI Strategy", "Hiring & Talent Development", "Industry Mentoring"],
    ml_ai: ["Machine Learning", "Deep Learning", "Fraud Detection", "Financial Crime Prevention", "Computer Vision", "MLOps", "LLMs", "Prompt Engineering"],
    engineering: ["Python", "SQL", "Tableau", "Scalable Systems Architecture", "Statistical Modeling", "Data Pipelines"],
    finance: ["Financial Crime Detection", "Risk Management", "Regulatory Compliance", "Anti-Money Laundering (AML)"],
    other: ["Mechatronics", "Robotics", "R&D", "CFA Level I"],
  } as SkillGroups,
  certifications: [
    { name: "Architecting Scalable Systems", issuer: "National University of Singapore", date: "Completed" },
    { name: "Designing Modern Software Systems", issuer: "National University of Singapore", date: "Completed" },
    { name: "ChatGPT Prompt Engineering for Developers", issuer: "OpenAI", date: "Completed" },
    { name: "Machine Learning Engineering for Production (MLOps) Specialization", issuer: "DeepLearning.AI", date: "Completed" },
  ] as Certification[],
  achievements: [
    { year: "2026", category: "Career", title: "Promoted to MD, Head of Data Science at OCBC", detail: "Elevated to Managing Director — the culmination of a 6-role, 8-year progression at OCBC from AVP to MD." },
    { year: "2025", category: "Career", title: "Promoted to ED, Head of Data Science at OCBC", detail: "Appointed Executive Director and Head of Data Science, taking full ownership of the bank's data science organisation." },
    { year: "2024", category: "Career", title: "Promoted to ED, Data Science Lead – Compliance, Ops & GenAI", detail: "First promotion to Executive Director; scope expanded to include GenAI initiatives." },
    { year: "2024", category: "Speaking", title: "Speaker — Fraud & Financial Crime Asia 2024", detail: "Presented on AI-powered financial crime prevention at OCBC." },
    { year: "2025", category: "Research", title: "arXiv Publication — Financial Document AI", detail: "Co-authored 'Multi-Stage Field Extraction of Financial Documents with OCR and Compact Vision-Language Models' with Jin Yichao et al." },
    { year: "2021", category: "Career", title: "Promoted to VP, Data Science Lead – Compliance & Ops", detail: "Recognised for building and scaling the compliance data science function at OCBC." },
  ] as Achievement[],
  publications: [
    { title: "Multi-Stage Field Extraction of Financial Documents with OCR and Compact Vision-Language Models", authors: "Y Jin, Y Wang, Q Zhong, K Chiu Jin-Chun, K Zhu, D MacDonald", venue: "arXiv preprint", year: 2025, citations: 0, url: "https://arxiv.org/abs/2510.23066" },
  ] as Publication[],
  testimonials: [],
};
