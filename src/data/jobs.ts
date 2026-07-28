export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  reportsTo: string;
  whatYouWillDo: string[];
  requirements: string[];
  whatWeOffer: string[];
  salary: string;
  email: string;
}

export const jobs: Job[] = [
  {
    slug: "business-development-manager",
    title: "Business Development Manager",
    type: "Contract",
    location: "Hybrid (3 Days Remote | 2 Days Onsite)",
    reportsTo: "Operations Manager",
    whatYouWillDo: [
      "Identify and win new business opportunities",
      "Build and manage strong client relationships",
      "Develop and execute sales strategies",
      "Negotiate and close business deals",
      "Achieve revenue and growth targets",
    ],
    requirements: [
      "2–5 years' experience in Business Development or Sales",
      "Strong communication and negotiation skills",
      "Proven ability to meet sales targets",
      "Bachelor's degree in Business, Marketing, or a related field (preferred)",
    ],
    whatWeOffer: [
      "Salary: ₦250,000/month + Performance-Based Commission",
      "Additional percentage on revenue generated",
    ],
    salary: "₦250,000/month + Performance-Based Commission",
    email: "talenntrecruit@gmail.com",
  },
  {
    slug: "operations-manager",
    title: "Operations Manager",
    type: "Full-Time",
    location: "Alausa, Ikeja, Lagos (On-Site)",
    reportsTo: "NGO Leadership",
    whatYouWillDo: [
      "Oversee daily operations and ensure organizational efficiency",
      "Lead and manage cross-functional teams",
      "Develop and implement operational strategies and plans",
      "Coordinate with stakeholders and manage relationships",
      "Drive business development and project management initiatives",
    ],
    requirements: [
      "Bachelor's Degree in a relevant field",
      "Minimum of 5 years' leadership experience in Operations, Business Development, or Project Management",
      "Strong leadership, communication, and stakeholder management skills",
      "Experience in operational planning and team management",
    ],
    whatWeOffer: [
      "Competitive salary package",
      "Opportunity to work with a reputable NGO",
    ],
    salary: "Competitive",
    email: "talenntrecruit@gmail.com",
  },
];
