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
export interface SkillGroups {
  clinical: string[];
  aesthetic: string[];
  laser: string[];
  skincare: string[];
  other: string[];
}

export const profile = {
  name: "Dr. Emily Tho",
  fullName: "Tho Nian Qin",
  title: "Aesthetic Doctor",
  tagline: "NUS-trained physician and SingHealth award recipient, delivering evidence-based, personalised aesthetic medicine at V Medical Aesthetics",
  location: "Singapore",
  contact: {
    linkedin: "https://www.linkedin.com/in/nian-qin-tho/",
    email: "",
    website: "https://www.vaestheticsclinic.com.sg/doctors/dr-emily-tho/",
  },
  languages: ["English", "Mandarin Chinese"],
  summary: "Medical doctor with MBBS from NUS Yong Loo Lin School of Medicine and broad clinical experience across specialties in Singapore's public health system. Recipient of the SingHealth Best Medical Officer Award for exemplary patient care. Now practising as an aesthetic doctor at V Medical Aesthetics & Laser Clinic — one of Singapore's largest aesthetic medicine groups with 21+ outlets and over 50 MOH-certified doctors. An enthusiastic skincare advocate who stays at the forefront of the latest aesthetic medicine procedures and treatments, focused on natural beauty enhancement and boosting patient confidence.",
  experience: [
    {
      company: "V Medical Aesthetics & Laser Clinic",
      role: "Aesthetic Doctor",
      period: "Present",
      location: "Singapore",
      bullets: [
        "Practises at the Toa Payoh HDB Hub clinic (520 Lorong 6 Toa Payoh, #01-63).",
        "Delivers personalised, science-backed non-surgical aesthetic treatments tailored to individual skin concerns and goals.",
        "Part of one of Singapore's largest aesthetic medicine groups, with 21+ outlets and 50+ MOH-certified doctors islandwide.",
        "Enthusiastic skincare advocate staying current with the latest aesthetic medicine procedures and innovations.",
      ],
    },
    {
      company: "Ministry of Health, Singapore",
      role: "Medical Doctor",
      period: "Prior to current role",
      location: "Singapore",
      bullets: [
        "Underwent comprehensive clinical training across medical and surgical specialties in the Singapore public health system.",
        "Awarded the SingHealth Best Medical Officer Award for exemplary performance and significant contributions to patient care.",
        "Developed a strong foundation in clinical assessment, diagnosis, and patient management across diverse patient populations.",
      ],
    },
  ] as Experience[],
  education: [
    {
      school: "NUS Yong Loo Lin School of Medicine",
      degree: "MBBS",
      field: "Medicine & Surgery",
      period: "Completed",
      note: "National University of Singapore",
    },
  ] as Education[],
  skills: {
    clinical: ["Clinical Assessment", "Patient Management", "Diagnosis & Treatment Planning", "Medical Consultation", "MOH-Certified Practice"],
    aesthetic: ["Injectables", "Botulinum Toxin (Botox)", "Dermal Fillers", "Face Lifting Procedures", "Acne Treatment", "Skin Rejuvenation"],
    laser: ["Laser Treatments", "Laser Hair Removal", "Acne Lasers", "Pigmentation Treatment", "Skin Resurfacing"],
    skincare: ["Personalised Skincare Regimens", "Anti-Ageing Treatments", "Skincare Product Knowledge", "Evidence-Based Aesthetics"],
    other: ["Patient Communication", "Continuing Medical Education", "Natural Beauty Enhancement", "Aesthetic Medicine"],
  } as SkillGroups,
  certifications: [] as Certification[],
  achievements: [
    {
      year: "During MOH posting",
      category: "Award",
      title: "SingHealth Best Medical Officer Award",
      detail: "Recognised for exemplary performance and significant contributions to patient care during her time as a Medical Officer in the Singapore public health system.",
    },
  ] as Achievement[],
};
