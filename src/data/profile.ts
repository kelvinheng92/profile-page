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
  licenseNumber?: string;
}

export interface Achievement {
  year: string;
  category: string;
  title: string;
  detail?: string;
}

export interface SkillGroups {
  leadership: string[];
  ml_ai: string[];
  engineering: string[];
  finance: string[];
  other: string[];
}

export const profile = {
  name: "Kelvin Heng",
  fullName: "Heng Chang Rong Kelvin",
  title: "Executive Director of Data Science",
  tagline:
    "Hands-on Data Science leader with a decade of experience across banks, fintech, e-commerce and super-apps",
  location: "Singapore",
  contact: {
    linkedin: "https://www.linkedin.com/in/kelvin-heng/",
    email: "kelvinheng92@gmail.com",
    github: "kelvinheng92",
  },
  languages: ["English", "Mandarin Chinese"],
  summary:
    "Hands-on Data Science leader with a decade of leadership experience in delivering outsized impact across banks, fintech, e-commerce and super-apps — from Zero to One. Experienced in building elite data science teams to make data-driven business decisions, developing ML/AI products at scale, and driving measurable business impact across campaign optimisation, fraud detection, recommendation systems, and GenAI applications.",

  experience: [
    {
      company: "OCBC",
      role: "Executive Director of Data Science",
      period: "Feb 2026 – Present",
      location: "Singapore",
      bullets: [
        "Leading the next phase of data monetisation for the group.",
      ],
    },
    {
      company: "OCBC",
      role: "VP of Data Science",
      period: "Nov 2024 – Feb 2026",
      location: "Singapore",
      bullets: [
        "Led 15 talented data scientists to deliver impact on all monetisation initiatives: campaigns, Copilot, Recommendation, GenAI, trading, and more.",
      ],
    },
    {
      company: "GoTo Group",
      role: "Head of Data Science & Analytics",
      period: "Oct 2023 – 2025",
      location: "Indonesia / Remote",
      bullets: [
        "Responsible for data initiatives impacting budget optimisation, user growth, and fraud detection.",
        "Directly reported to VP of Data & Engineering, fostering strategic alignment with C-suite.",
        "Led strategic decisions on data investments and cost structure.",
        "Led hiring, talent acquisition, development, and retention of the data function.",
      ],
    },
    {
      company: "Stealth Startup",
      role: "Freelance Data Consulting",
      period: "Jan 2023 – Nov 2024",
      location: "Remote",
      bullets: [
        "Offered consulting services in data science, machine learning, deep learning, data pipelines, and data modelling.",
      ],
    },
    {
      company: "GoTo Group",
      role: "Senior Data Science Manager",
      period: "Apr 2022 – Oct 2023",
      location: "Indonesia / Remote",
      bullets: [
        "Implemented strategies to tackle growth, profitability, fraud, and churn across multiple business units.",
        "Led ~10 Business Intelligence Engineers, Data Scientists & Analytics Engineers (~USD 100M annual savings).",
      ],
    },
    {
      company: "GoTo Group",
      role: "Data Science Manager",
      period: "2021 – Apr 2022",
      location: "Indonesia / Remote",
      bullets: [
        "Implemented full-stack machine learning pipeline for GoTo's promotion allocation service serving 300M+ customers and 1M+ merchants.",
      ],
    },
    {
      company: "Grab",
      role: "Senior Data Scientist",
      period: "2019 – 2021",
      location: "Singapore",
      bullets: [
        "Built regional (Singapore, Malaysia, etc.) Grab PayLater scorecards for loan approvals.",
        "Built model monitoring dashboard to track model performance and loan book risk exposure.",
        "Ingested alternative data achieving 25% incremental uplift over existing models.",
        "Built end-to-end Machine Learning pipelines using Airflow and Kubernetes.",
      ],
    },
    {
      company: "GIC",
      role: "Algorithm Developer",
      period: "2017 – 2019",
      location: "Singapore",
      bullets: [
        "Researched algorithms to improve trade performance and reduce risk by 80%.",
        "Designed and implemented performance attribution models for private markets using Python.",
      ],
    },
  ] as Experience[],

  teaching: [
    {
      company: "Heicoders Academy",
      role: "Instructor",
      period: "Jan 2022 – Nov 2024",
      location: "Singapore",
      bullets: [
        "Taught courses in Machine Learning, Data Visualisation, and Python.",
        "Achieved instructor score of 4.9 / 5.0.",
      ],
    },
    {
      company: "Purwadhika Digital Technology School",
      role: "Data Science Mentor & Expertise Consultant",
      period: "Jan 2022 – 2023",
      location: "Singapore",
      bullets: [
        "Mentored data science students, providing expertise in machine learning and real-world industry applications.",
      ],
    },
  ] as Experience[],

  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Master of Science (Accelerated Programme)",
      field: "Computer Science",
      period: "Completed",
      note: "Top Graduate",
    },
    {
      school: "National University of Singapore",
      degree: "Bachelor of Applied Science (B.A.Sc.)",
      field: "Quantitative Finance",
      period: "Completed",
      note: "Top 1% of Graduates",
    },
    {
      school: "Stanford University",
      degree: "Courses (Non-degree)",
      field: "Machine Learning, Deep Learning, Computer Vision, NLP",
      period: "Audited",
    },
  ] as Education[],

  skills: {
    leadership: [
      "Team Management",
      "Senior Stakeholder Management",
      "OKRs",
      "Hiring & Talent Development",
      "Professional Mentoring",
      "Training & Development",
    ],
    ml_ai: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Reinforcement Learning",
      "Causal Inference",
      "A/B Testing",
      "Neural Networks",
      "Convolutional Neural Networks (CNN)",
      "Experimental Analysis",
    ],
    engineering: [
      "Python",
      "SQL",
      "Airflow",
      "Kubernetes",
      "Docker",
      "Apache Spark",
      "AWS",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Flask",
      "Linux",
      "GitHub",
    ],
    finance: [
      "Quantitative Finance",
      "Financial Modeling",
      "Risk Management",
      "Portfolio Management",
      "Financial Analysis",
      "Investments",
    ],
    other: [
      "Teaching",
      "R",
      "MATLAB",
      "VBA",
      "Analytical Skills",
      "Requirements Analysis",
      "E-Learning",
    ],
  } as SkillGroups,

  certifications: [
    {
      name: "Machine Learning",
      issuer: "Coursera",
      date: "Mar 2017",
      url: "http://www.coursera.org/account/accomplishments/verify/88BQ4L8H6XM9",
      licenseNumber: "88BQ4L8H6XM9",
    },
    {
      name: "Triplebyte Certified Data Scientist",
      issuer: "Triplebyte",
      date: "Aug 2020",
      url: "https://triplebyte.com/tb/kelvin-heng-terkyxc/certificate/track/data",
      licenseNumber: "terkyxc",
    },
    {
      name: "AWS Machine Learning Pipeline",
      issuer: "Amazon Web Services (AWS)",
      date: "Sep 2020",
      url: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=ew2XvlZssUGkVIBwl1h9aA2",
      licenseNumber: "ew2XvlZssUGkVIBwl1h9aA2",
    },
    {
      name: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services (AWS)",
      date: "Nov 2020",
      url: "https://www.youracclaim.com/earner/earned/badge/cdc424c9-944a-4394-9a20-911b8566e3e9",
      licenseNumber: "cdc424c9-944a-4394-9a20-911b8566",
    },
  ] as Certification[],

  achievements: [
    {
      year: "2010",
      category: "Sports",
      title: "1st Place — Singapore Canoeing Marathon 2010",
      detail: "Finished 1st in the T1 NM (Touring 1-person) category representing TPJC. Time: 1 hr 24:21.09 (Bib #523).",
    },
    {
      year: "",
      category: "Sports",
      title: "Track & Field",
      detail: "Competed in track & field events.",
    },
    {
      year: "",
      category: "Sports",
      title: "Road Relay",
      detail: "Participated in road relay competitions.",
    },
    {
      year: "",
      category: "Sports",
      title: "Cheerleading",
      detail: "Competitive cheerleading.",
    },
    {
      year: "",
      category: "Sports",
      title: "Weightlifting",
      detail: "Competitive weightlifting.",
    },
  ] as Achievement[],
};
