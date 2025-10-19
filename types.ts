
export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duties: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface Skills {
  technical: string;
  core: string;
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  summary: string;
  experience: Experience[];
  internships: Experience[];
  education: Education[];
  skills: Skills;
  certifications: string[];
}
