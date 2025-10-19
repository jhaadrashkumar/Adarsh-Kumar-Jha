import React from 'react';
import type { ResumeData, Experience as ExperienceType, Education as EducationType } from './types';
import { PhoneIcon, EmailIcon, LinkedInIcon, DownloadIcon } from './components/icons';

// Add type declaration for html2pdf library loaded from CDN
declare const html2pdf: any;

const resumeData: ResumeData = {
  name: "Adarsh Kumar Jha",
  contact: {
    phone: "+91 8539971295",
    email: "jhaadrashkumar@gmail.com",
    linkedin: "https://www.linkedin.com/in/adarsh-kumar-jha-32022223a/"
  },
  summary: "A results-driven MBA graduate with a strong foundation in both operations and marketing. Skilled in leveraging data analytics and market research to drive process improvements and support revenue growth. Proven ability to thrive in fast-paced environments, combining analytical skills with interpersonal strengths to manage projects, support sales initiatives, and enhance operational efficiency. Seeking to apply my expertise in a challenging role that contributes to organizational success.",
  experience: [
    {
      company: "IP Integrated Services Pvt. Ltd.",
      role: "Executive, Operations & Marketing",
      period: "June 2025—Present",
      duties: [
        "Spearhead initiatives to enhance operational efficiency, streamlining workflows to improve team productivity and service delivery.",
        "Manage sales and franchise networking activities, successfully expanding the company's market reach and contributing directly to revenue generation.",
        "Collaborate within a dynamic team to ensure seamless execution of marketing campaigns and operational tasks."
      ]
    },
    {
      company: "Concentrix",
      role: "Operation Support Specialist",
      period: "Jan 2025—June 2025",
      duties: [
        "Provided high-level technical support and troubleshooting to resolve customer queries effectively, maintaining high satisfaction rates.",
        "Drove revenue growth by identifying customer needs and executing upselling and cross-selling strategies.",
        "Balanced operational support duties with sales targets, demonstrating strong multitasking and goal-orientation."
      ]
    }
  ],
  internships: [
    {
      company: "Prochem Tapasya Pvt. Ltd.",
      role: "Management Trainee (Capstone Project)",
      period: "Mar 2024–May 2024",
      duties: [
        "Analyzed and improved key HR processes, including recruitment and performance management, applying strategic management principles to enhance organizational effectiveness.",
        "Gained hands-on experience in various facets of management, including employee relations, training coordination, and compliance."
      ]
    },
    {
      company: "Outlook Group",
      role: "Market Research Intern",
      period: "May 2023–July 2023",
      duties: [
        "Led a comprehensive research project on recruitment and performance appraisal, managing the project from initial design through to data collection, analysis, and final reporting.",
        "Translated complex survey data into actionable, data-driven strategies to refine HR processes, resulting in a measurable reduction in time-to-hire."
      ]
    }
  ],
  education: [
    {
      institution: "VIT University",
      degree: "Master of Business Administration (MBA)",
      period: "2022–2024",
      details: "CGPA: 7.79"
    },
    {
      institution: "T.M. Bhagalpur University",
      degree: "Bachelor of Science (B.Sc), Biotechnology",
      period: "2017–2020",
      details: "Percentage: 76.78%"
    }
  ],
  skills: {
    technical: "MS Excel (Advanced, Dashboard Creation), Google Sheets, Power BI (Beginner), SPSS, Data Collection & Visualization",
    core: "Market Research, Multivariate Analysis, Critical Thinking, Problem Solving, Leadership, Interpersonal Communication, Client Handling"
  },
  certifications: [
    "2024: Market Research Specialization (Qualitative Research) - University of California (Coursera)",
    "2024: HR Analytics - University of California (Coursera)",
    "2023: SEBI Investors Certification Examination - NISM",
    "In Progress: Leadership Skills - IIM Ahmedabad (Coursera)"
  ]
};

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <section className={`mb-12 ${className}`}>
    <h2 className="text-3xl font-bold text-sky-400 mb-8">{title}</h2>
    {children}
  </section>
);

const TimelineItem: React.FC<{ item: ExperienceType }> = ({ item }) => (
  <div className="relative pl-8 mb-10 before:absolute before:top-2 before:left-2 before:w-4 before:h-4 before:bg-sky-500 before:rounded-full before:border-4 before:border-slate-800">
     <div className="flex justify-between items-baseline flex-wrap mb-1">
      <h3 className="text-xl font-semibold text-slate-100">{item.role}</h3>
      <p className="text-sm text-sky-400 font-medium">{item.period}</p>
    </div>
    <h4 className="text-lg text-slate-400 font-medium mb-3">{item.company}</h4>
    <ul className="list-disc list-outside ml-5 text-slate-400 space-y-2">
      {item.duties.map((duty, index) => (
        <li key={index}>{duty}</li>
      ))}
    </ul>
  </div>
);


const App: React.FC = () => {
  const handleDownloadPdf = () => {
    const element = document.getElementById('resume-content');
    if (element) {
       // Temporarily add a class for PDF generation to use a light theme
      document.body.classList.add('pdf-generation');
      
      const opt = {
        margin: [0.5, 0.2, 0.5, 0.2], // [top, left, bottom, right] in inches
        filename: 'Adarsh_Kumar_Jha_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      html2pdf().from(element).set(opt).save().then(() => {
        // Remove the class after PDF is generated
        document.body.classList.remove('pdf-generation');
      });
    }
  };

  return (
    <div id="resume-content" className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12">
      {/* Header / Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">{resumeData.name}</h1>
        <p className="mt-3 text-xl md:text-2xl text-sky-400">MBA Graduate | Operations & Marketing Specialist</p>
        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-3 mt-6 text-slate-300">
          <a href={`tel:${resumeData.contact.phone}`} className="flex items-center hover:text-sky-400 transition-colors">
            <PhoneIcon className="w-5 h-5 mr-2" />
            <span>{resumeData.contact.phone}</span>
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="flex items-center hover:text-sky-400 transition-colors">
            <EmailIcon className="w-5 h-5 mr-2" />
            <span>{resumeData.contact.email}</span>
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 flex items-center">
              <LinkedInIcon className="w-5 h-5 mr-2" />
              View LinkedIn Profile
            </a>
            <button
              onClick={handleDownloadPdf}
              className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-75 transition-transform transform hover:scale-105 flex items-center"
              aria-label="Download Resume as PDF"
            >
              <DownloadIcon className="w-5 h-5 mr-2"/>
              Download as PDF
            </button>
        </div>
      </header>

      <main className="bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10">
        <Section title="Professional Summary">
          <p className="text-slate-400 leading-relaxed text-lg">{resumeData.summary}</p>
        </Section>
        
        <Section title="Work Experience">
          <div className="relative border-l-2 border-slate-700">
            {resumeData.experience.map((exp, index) => (
              <TimelineItem key={index} item={exp} />
            ))}
          </div>
        </Section>
        
        <Section title="Internships">
           <div className="relative border-l-2 border-slate-700">
            {resumeData.internships.map((intern, index) => (
              <TimelineItem key={index} item={intern} />
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-lg">
                  <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-xl font-semibold text-slate-100">{edu.institution}</h3>
                      <p className="text-sm text-sky-400 font-medium">{edu.period}</p>
                  </div>
                  <p className="text-md text-slate-400">{edu.degree}</p>
                  <p className="text-sm text-slate-500 mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Section title="Skills">
            <div className="mb-6">
                <h3 className="font-semibold text-slate-100 text-lg mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {resumeData.skills.technical.split(', ').map((skill, index) => (
                        <span key={index} className="bg-sky-500/20 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-slate-100 text-lg mb-3">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                     {resumeData.skills.core.split(', ').map((skill, index) => (
                        <span key={index} className="bg-sky-500/20 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                    ))}
                </div>
            </div>
        </Section>

        <Section title="Certifications">
            <ul className="list-disc list-outside ml-5 text-slate-400 space-y-2 text-lg">
                {resumeData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
                ))}
            </ul>
        </Section>
      </main>
    </div>
  );
};

export default App;