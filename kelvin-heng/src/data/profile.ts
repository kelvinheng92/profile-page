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

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  date: string;
  text: string;
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
      detail: "Finished 1st in the T1 NM (Touring 1-person) category. Time: 1 hr 24:21.09.",
    },
    {
      year: "2013–2016",
      category: "Sports",
      title: "Track & Field",
      detail: "University representation in track & field events.",
    },
    {
      year: "2013–2016",
      category: "Sports",
      title: "Road Relay",
      detail: "University representation in road relay competitions.",
    },
    {
      year: "2013–2016",
      category: "Sports",
      title: "Cheerleading",
      detail: "University representation in cheerleading.",
    },
    {
      year: "2013–2016",
      category: "Sports",
      title: "Weightlifting",
      detail: "University representation in weightlifting.",
    },
  ] as Achievement[],

  testimonials: [
    {
      name: "Jia Xiang Lim",
      title: "Lead Data Scientist",
      company: "GoTo Group",
      date: "Dec 2025",
      text: "Kelvin is highly hands-on, delivery-driven and a first-principles technical data scientist lead. He has excellent vision in scoping the path towards achieving OKRs and completing initiatives, being able to break down highly complex projects into manageable snippets. He is a highly capable lead who is able mentor and guide data scientists in both technical decisions as well as business technicalities. Without a doubt, I would strongly recommend Kelvin.",
    },
    {
      name: "Joven Heng",
      title: "Data Scientist",
      company: "OCBC",
      date: "Jul 2025",
      text: "Kelvin is an exceptional manager. He has the ability to organize multiple projects across different subteams while maintaining clear communication throughout. He is also personally involved in every team member's career development through regular career talks and being involved in their innovation projects. He consistently provided thoughtful guidance and created opportunities for growth that helped advance my career. He is a leader that any organisation would be fortunate to have.",
    },
    {
      name: "Syafri Bahar FRM®",
      title: "Director of Data Science, ML & Analytics",
      company: "Coupang",
      date: "Dec 2024",
      text: "I highly recommend Kelvin for any role requiring exceptional technical expertise, business acumen, and project management skills. Kelvin's primary responsibility was managing a sophisticated machine learning system that disbursed $100s MM of promotions. What sets Kelvin apart is his remarkable reliability and execution skills — I could trust him implicitly to take immediate action. It's no surprise that Kelvin was one of the fastest-promoted employees in our company. Any organization would be fortunate to have Kelvin on their team.",
    },
    {
      name: "Nabila Zahra",
      title: "Product Manager — Recommendations",
      company: "GoTo Group",
      date: "Oct 2024",
      text: "Kelvin is an exceptional leader who combines deep technical expertise with a genuine commitment to his team's success. His impressive technical prowess along with his unwavering support of his team members' professional growth makes him a one of a kind leader. Kelvin is also a very dependable team player that is always keen to solve problems hands on, and to consistently deliver high-impact results. Any organization would be fortunate to have Kelvin at the helm of their data science initiatives.",
    },
    {
      name: "Min Yan Beh",
      title: "Co-Founder & CEO",
      company: "Heicoders Academy",
      date: "Jul 2023",
      text: "Kelvin is that person you can always rely on to get things done. His resourcefulness and intellectual agility immediately stood out — not only did he possess strong technical expertise and astute product sense, he was also exceptional at distilling information from first principles. As both a contributor and a manager, Kelvin sets the bar high and fosters an environment primed for success. Kelvin epitomizes the kind of manager we all aspire to have in our careers.",
    },
    {
      name: "Ties Boukema",
      title: "Head of Data, Tech & AI",
      company: "Dawn Capital",
      date: "May 2023",
      text: "Hired Kelvin to help me set up dbt for our organization. Very professional and knowledgeable. Always did what we agreed, and went above & beyond in terms of finding solutions to problems. Highly recommend!",
    },
    {
      name: "Praveen Prashant",
      title: "Assistant Vice President",
      company: "OCBC",
      date: "May 2023",
      text: "I had the privilege of working on Kelvin's team, where his exceptional managerial and technical skills were evident. He effortlessly balances being a skilled code contributor with effectively managing people. Under Kelvin's leadership, the incentives team expanded rapidly to support all Gojek On-Demand Services, achieving remarkable speed with minimal resources. He is an inspiring leader who values transparency, responsibility, and the growth of his team members' careers.",
    },
    {
      name: "Shenghao (Shawn) Wang",
      title: "Data Scientist",
      company: "Arima",
      date: "Apr 2023",
      text: "As a lead data scientist, Kelvin is equipped with expert DS and software engineering skills, and has extensive experience with architecting and developing sophisticated machine learning systems. As a team lead, Kelvin has superior leadership and project management skills, and has always been approachable to his team. Moreover, Kelvin is proficient at working with cross-functional teams — he always thinks in the shoes of stakeholders to ensure their needs are properly addressed.",
    },
    {
      name: "Manjunath Subramanyam",
      title: "Senior Manager — Data",
      company: "Target",
      date: "Mar 2023",
      text: "Kelvin consistently demonstrated a deep understanding of data analytics and machine learning techniques, and a strong ability to lead and inspire the team to deliver impactful results. His approach to data-driven decision-making was impressive, and he was able to design and develop end-to-end data science solutions for multiple teams within Gojek. I would highly recommend Kelvin for any data science management role.",
    },
    {
      name: "Yu Ning Kong",
      title: "Co-Founder & Chief of Growth",
      company: "Heicoders Academy",
      date: "Jul 2022",
      text: "Kelvin is a rockstar-level contributor who exudes excellence in his attitude and competencies. In the very first ML course he taught, undeterred by his lack of teaching experience, he diligently spent several hours prepping for each class — delivering the course smoothly with NPS 9/10. He takes feedback seriously, and remains humble and willing-to-learn despite his strong technical competency. I would unreservedly recommend him to any employer looking for their next rock-star employee.",
    },
    {
      name: "Praveen Prashant",
      title: "Assistant Vice President",
      company: "OCBC",
      date: "Apr 2022",
      text: "Kelvin, in short, is the embodiment of a rockstar employee every company looks for. He is super quick at his feet aided by his impressive tech skills. He is very grounded and always focused on improving his and the team's hard and soft skills. He is a strong believer of teamwork and makes it a point to recognise the team's efforts before his individual contributions. He is a pleasure to work with!",
    },
    {
      name: "Sylvain Truong",
      title: "Senior Data Scientist",
      company: "Airwallex",
      date: "Mar 2022",
      text: "It is a true privilege and a great learning experience to be working alongside Kelvin. Beyond his undeniably strong technical foundation, I was truly impressed by Kelvin's ability to handle high-pressure situations. His business sense and strategic mindset allows him to defend the interests of his team and the company in a remarkable manner. No matter which lucky team Kelvin joins, I have no doubt he will be a contributor with outstanding impact.",
    },
    {
      name: "Kilian Tep",
      title: "Applied AI Scientist",
      company: "Mistral AI",
      date: "Mar 2022",
      text: "When Kelvin joined Gojek, he immediately became a rockstar just a few months in. Kelvin has great technical ability and always strives to make things better. He will instil the best practices within your team and will strive to innovate with the latest state of the art tools available. Kelvin shows great ability to juggle between multiple projects at the same time while always volunteering to help his fellow teammates.",
    },
    {
      name: "Chee Pong Lee",
      title: "Data Scientist",
      company: "TikTok Shop",
      date: "Aug 2021",
      text: "Kelvin is professional and exceptional. He knows what he wants for output and is able to communicate this well to his teammates. Kelvin is highly motivated and takes pride in his work — he will move mountains to get things done. He is also intellectual and extremely sharp, grasping ideas very quickly. He is my go-to person when I face problems in data science. Not only is he extremely friendly, he will offer his help without expecting anything in return.",
    },
    {
      name: "Brian Cheng",
      title: "Senior Solutions Consultant",
      company: "Databricks",
      date: "Aug 2021",
      text: "Kelvin is a sharp guy with critical thinking in projects related to ML. He also gave us some thoughts on data pipeline improvement from his experience. Needless to say that he has high skills in ML, and he is a great team player.",
    },
    {
      name: "Roy Sai",
      title: "Digital Credit Model Specialist",
      company: "DBS Bank",
      date: "Aug 2021",
      text: "I was particularly impressed by Kelvin's ability to think fast and critically. He has good understanding of data science best practice and always delivers projects in a well-organised manner. It makes Kelvin a great team player and even better project partner. Kelvin would be an asset to any team!",
    },
    {
      name: "Jia Xiang Lim",
      title: "Lead Data Scientist",
      company: "GoTo Group",
      date: "Feb 2022",
      text: "Kelvin is highly driven, a strong team player and an excellent technical data scientist. He clearly demonstrates the ability to manage multiple projects concurrently while actively keeping stakeholders excited and engaged. He is a reliable and knowledgeable teammate who provides feasible suggestions and alternatives during problem solving sessions, and adopts an engineering-focused mindset centred around productionisation and solution scaling.",
    },
  ] as Testimonial[],
};
