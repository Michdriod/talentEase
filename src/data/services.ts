export interface Service {
  id: string;
  title: string;
  short: string;
  full: string;
  flagship?: boolean;
}

export const services: Service[] = [
  {
    id: "recruitment-talent-acquisition",
    title: "Recruitment & Talent Acquisition",
    short: "Find and hire the right people for every role.",
    full:
      "At TalentEase HR, we solve this problem through a strategic recruitment approach focused on sourcing, assessing, and selecting competent professionals for every role. Our services include job description development, candidate sourcing, screening, interviews, reference checks, and hiring recommendations. Through strategic talent acquisition, skill assessment, and cultural fit analysis, we help businesses build high-performing teams that drive growth and results.",
  },
  {
    id: "employee-leasing",
    title: "Employee Leasing (Outsourcing)",
    short: "Skilled professionals without the in-house burden.",
    full:
      "We provide skilled outsourced professionals across HR, Finance, Administration, Project Management, and other support functions, using efficient resource management and process optimization to boost operational capacity and help businesses focus on core growth. Our outsourcing model helps businesses optimize operations, reduce overhead costs, improve productivity, and access skilled professionals without the burden of full in-house management.",
  },
  {
    id: "fractional-hr",
    title: "Fractional HR (Retainership)",
    short: "Senior-level HR expertise on retainer.",
    full:
      "Our fractional HR Services give businesses access to senior-level HR expertise without the financial commitment of employing a full time HR manager. We support organizations in attracting and retaining top talent, developing HR policies and procedures, ensuring compliance with employment regulations, managing employee relations, implementing performance management system and providing strategic HR advisory services.",
    flagship: true,
  },
  {
    id: "learning-development",
    title: "Learning & Development",
    short: "Training that improves performance and productivity.",
    full:
      "We help organizations improve employee performance and workplace productivity through impactful learning and development solutions. Our training solutions are designed to equip employees and leaders with the practical skills, knowledge, and competencies required for improved performance and professional growth. We provide staff training, leadership development programs, employee engagement workshops and performance improvement sessions tailored to organizational needs and business objectives.",
  },
  {
    id: "hr-strategy-advisory",
    title: "HR Strategy & Advisory",
    short: "Align your people practices with business goals.",
    full:
      "At Talent Ease HR, we help organizations build stronger people systems through strategic HR advisory and workforce solutions. Our HR strategy and advisory services provide practical guidance to help businesses align their people practices with organizational goals. We support clients with HR structure development, workforce planning, performance management systems, policy development, employee engagement strategies, and organizational growth support to improve overall business performance and workplace effectiveness.",
  },
];
