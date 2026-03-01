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
  research: string[];
  ml_ai: string[];
  engineering: string[];
  other: string[];
}
export const profile = {
  name: "Jin Yichao",
  fullName: "Jin Yichao (金逸超)",
  title: "Executive Director of Data Science",
  tagline: "PhD researcher turned industry leader — 20+ publications, 800+ citations, decade of ML/AI across finance, government, and biotech",
  location: "Singapore",
  contact: {
    linkedin: "https://www.linkedin.com/in/yichaojin/",
    email: "",
    github: "https://github.com/jinyichao",
    scholar: "https://scholar.google.com/citations?user=P74WJTMAAAAJ&hl=en",
  },
  languages: ["English", "Mandarin Chinese"],
  summary: "Data Science Executive Director with a PhD in Computer Engineering from NTU Singapore (GPA 4.88/5.0) and 10+ years of industry experience spanning finance, government, and biotech. Brings rare depth across the full stack — from peer-reviewed research (20+ publications, 823 citations, h-index 16) to production-grade ML systems at scale. Led data science at OCBC, GovTech Singapore, and Indeed, with expertise in cloud computing, adaptive media streaming, recommendation systems, and applied AI.",
  scholarMetrics: { totalCitations: 823, hIndex: 16, i10Index: 20 },
  experience: [
    { company: "OCBC", role: "Executive Director of Data Science", period: "2024 – Present", location: "Singapore", bullets: ["Leading data science initiatives driving production-grade ML/DS systems across the group.", "Co-authored research on multi-stage field extraction from scanned financial documents using OCR and compact vision-language models (arXiv 2025)."] },
    { company: "GovTech Singapore", role: "Lead Data Scientist", period: "Jul 2023 – 2024", location: "Singapore", bullets: ["Led the READ project — an AI-powered document automation solution for Singapore's government sector.", "Drove NLP and document intelligence capabilities across government digital services."] },
    { company: "Indeed", role: "Staff Data Scientist / Data Science Manager", period: "Jan 2019 – May 2023", location: "Singapore", bullets: ["Led data science for search and recommendation systems serving millions of job seekers globally.", "Managed cross-functional teams across Asia-Pacific."] },
    { company: "BBM", role: "Data Scientist", period: "May 2017 – Nov 2018", location: "Singapore", bullets: ["Applied ML techniques to messaging and social platform analytics."] },
    { company: "Human Longevity Inc.", role: "Senior Software Engineer", period: "Nov 2016 – May 2017", location: "Singapore", bullets: ["Developed TB-scale genome data analysis pipelines.", "Contributed to cloud-scale bioinformatics infrastructure."] },
    { company: "Works Applications Co. Ltd.", role: "Software Engineer", period: "Aug 2015 – Nov 2016", location: "Singapore", bullets: ["Built enterprise software solutions in Java."] },
    { company: "IBM", role: "Blue Pathway Intern", period: "Jun 2010 – Nov 2010", location: "Singapore", bullets: ["Developed IoT-related software prototypes as part of IBM's research internship programme."] },
  ] as Experience[],
  education: [
    { school: "Nanyang Technological University (NTU)", degree: "Doctor of Philosophy (PhD)", field: "Computer Engineering", period: "2011 – 2015", note: "GPA 4.88 / 5.0 · Supervised by Prof. Yonggang Wen" },
    { school: "Nanjing University of Posts & Telecommunications", degree: "Master of Engineering (MEng)", field: "Computer Software and Theory", period: "2008 – 2011", note: "Grade: 88.2 / 100" },
    { school: "Nanjing University of Posts & Telecommunications", degree: "Bachelor of Engineering (BEng)", field: "Computer Science", period: "2004 – 2008", note: "Grade: 87.6 / 100" },
  ] as Education[],
  skills: {
    research: ["Cloud Computing", "Content Delivery Networks (CDN)", "Adaptive Video Streaming", "Network Function Virtualization (NFV)", "Information-Centric Networking (ICN)", "Energy-Efficient Data Centers", "Media Cloud"],
    ml_ai: ["Machine Learning", "Deep Learning", "Generative Adversarial Networks (GAN)", "Medical Image Analysis", "Multi-modal Learning", "Computer Vision", "NLP", "LLMs / LangChain", "Recommendation Systems"],
    engineering: ["Python", "Java", "Scala", "C++", "Apache Spark", "BigDL", "Linux", "Cassandra", "PaddlePaddle"],
    other: ["Research & Publications", "Technical Leadership", "Optimization", "LaTeX", "JavaScript / Node.js"],
  } as SkillGroups,
  certifications: [] as Certification[],
  achievements: [
    { year: "All-time", category: "Academic", title: "h-index: 16 · 823 Total Citations", detail: "16 papers each cited 16+ times; 20 publications indexed on Google Scholar." },
    { year: "2012", category: "Academic", title: "Most-cited paper: 149 citations", detail: "Energy Efficiency and Server Virtualization in Data Centers — IEEE INFOCOM 2012." },
    { year: "2015", category: "Academic", title: "115 citations — IEEE TCSVT", detail: "Optimal Transcoding and Caching for Adaptive Streaming in Media Cloud." },
  ] as Achievement[],
  publications: [
    { title: "Multi-Stage Field Extraction of Financial Documents with OCR and Compact Vision-Language Models", authors: "Y Jin, Y Wang, Q Zhong, K Chiu Jin-Chun, K Zhu, D MacDonald", venue: "arXiv preprint", year: 2025, citations: 0, url: "https://arxiv.org/abs/2510.23066" },
    { title: "Energy Efficiency and Server Virtualization in Data Centers: An Empirical Investigation", authors: "Y Jin, Y Wen, Q Chen", venue: "IEEE INFOCOM Workshops", year: 2012, citations: 149 },
    { title: "Optimal Transcoding and Caching for Adaptive Streaming in Media Cloud: An Analytical Approach", authors: "Y Jin, Y Wen, C Westphal", venue: "IEEE Transactions on Circuits and Systems for Video Technology", year: 2015, citations: 115, url: "https://ieeexplore.ieee.org/document/7039252/" },
    { title: "An empirical investigation of the impact of server virtualization on energy efficiency for green data center", authors: "Y Jin, Y Wen, Q Chen, Z Zhu", venue: "The Computer Journal, 56(8)", year: 2013, citations: 89 },
    { title: "CoDaaS: An experimental cloud-centric content delivery platform for user-generated contents", authors: "Y Jin, Y Wen, G Shi, G Wang, AV Vasilakos", venue: "IEEE ICNC", year: 2012, citations: 64 },
    { title: "Towards Cost-Efficient Content Placement in Media Cloud: Modeling and Analysis", authors: "Y Jin, Y Wen, K Guan", venue: "IEEE Transactions on Multimedia, 18(5)", year: 2016, citations: 58 },
    { title: "Reducing Operational Costs in Cloud Social TV: an Opportunity for Cloud Cloning", authors: "Y Jin, Y Wen, H Hu, M Montpetit", venue: "IEEE Transactions on Multimedia, 16(6)", year: 2014, citations: 35 },
    { title: "Toward Wi-Fi AP-assisted content prefetching for an on-demand TV series: A learning-based approach", authors: "W Hu, Y Jin, Y Wen, Z Wang, L Sun", venue: "IEEE Transactions on Circuits and Systems for Video Technology, 28(7)", year: 2017, citations: 31, url: "https://ieeexplore.ieee.org/document/7882628/" },
    { title: "When cloud media meet network function virtualization: Challenges and applications", authors: "Y Jin, Y Wen", venue: "IEEE MultiMedia, 24(3)", year: 2017, citations: 29 },
    { title: "Pairwise feature-based GAN for incomplete multi-modal Alzheimer's disease diagnosis", authors: "H Ye, Q Zhu, Y Yao, Y Jin, D Zhang", venue: "The Visual Computer, 39(6)", year: 2023, citations: 28 },
    { title: "Minimizing Monetary Cost via Cloud Clone Migration in Multi-screen Cloud Social TV System", authors: "Y Jin, Y Wen, H Hu", venue: "IEEE GLOBECOM", year: 2013, citations: 25 },
    { title: "Toward monetary cost effective content placement in cloud centric media network", authors: "Y Jin, Y Wen, K Guan, D Kilper, H Xie", venue: "IEEE ICME", year: 2013, citations: 22 },
    { title: "Towards Joint Resource Allocation and Routing to Optimize Video Distribution over Future Internet", authors: "Y Jin, Y Wen, C Westphal", venue: "IFIP Networking", year: 2015, citations: 20 },
    { title: "Hysia: Serving DNN-based video-to-retail applications in cloud", authors: "H Zhang, Y Li, Q Ai, Y Luo, Y Wen, Y Jin, NBD Ta", venue: "ACM International Conference on Multimedia", year: 2020, citations: 17 },
    { title: "Orchestrating caching, transcoding and request routing for adaptive video streaming over ICN", authors: "H Hu, Y Jin, Y Wen, C Westphal", venue: "ACM Transactions on Multimedia Computing, Communications, and Applications", year: 2019, citations: 16 },
    { title: "PAINT: Partial In-Network Transcoding for Adaptive Streaming in Information Centric Network", authors: "Y Jin, Y Wen", venue: "IEEE IWQoS", year: 2014, citations: 16 },
    { title: "Multi-screen cloud social TV: Transforming TV experience into 21st century", authors: "Y Jin, T Xie, Y Wen, H Xie", venue: "ACM International Conference on Multimedia", year: 2013, citations: 16 },
    { title: "Content Routing and Lookup Schemes Using Global Bloom Filter for Content-Delivery-as-a-Service", authors: "Y Jin, Y Wen, W Zhang", venue: "IEEE Systems Journal, 8(1)", year: 2014, citations: 15 },
    { title: "Improving energy efficiency for mobile media cloud via virtual machine consolidation", authors: "Y Dong, L Zhou, Y Jin, Y Wen", venue: "Mobile Networks and Applications, 20(3)", year: 2015, citations: 12 },
    { title: "物联网环境下智能插座的设计 (Smart Socket Design in IoT Environments)", authors: "金逸超, 孙力娟, 王汝传, 黄海平", venue: "计算机研究与发展 (Journal of Computer Research and Development)", year: 2010, citations: 12 },
  ] as Publication[],
  testimonials: [],
};
