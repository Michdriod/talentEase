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
  filled?: boolean;
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
    filled: true,
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
      "Salary: ₦350,000/month",
      "Opportunity to work with a reputable NGO",
    ],
    salary: "₦350,000/month",
    email: "talenntrecruit@gmail.com",
  },
  {
    slug: "account-officer",
    title: "Account Officer",
    type: "Hybrid",
    location: "Victoria Island, Lagos",
    reportsTo: "Finance Manager",
    filled: true,
    whatYouWillDo: [
      "Maintain accurate and up-to-date records of all financial transactions including income, expenses, and bank dealings",
      "Prepare and maintain accurate financial statements, including balance sheets, income statements and cash flow statements",
      "Ensure all financial records are compliant with GAAP and relevant financial regulations",
      "Monitor and reconcile client accounts, vendor accounts, and bank statements regularly",
      "Assist in the preparation of monthly, quarterly, and annual financial reports",
      "Track expenditures for facility operations and maintenance contracts to ensure alignment with budget",
      "Ensure timely payment of utilities, vendor invoices, and statutory obligations",
      "Support internal and external audits by providing required financial documents",
      "Assist in the preparation of budgets and forecasts",
      "Maintain documentation for financial processes and ensure compliance with company policies",
      "Support other finance functions as needed",
    ],
    requirements: [
      "Bachelor's degree in Accounting, Finance, or related field",
      "Minimum of 4 years' experience in a similar role; must have experience in facilities management",
      "Proficiency in accounting software (e.g., QuickBooks, Sage, Excel)",
      "Strong knowledge of basic accounting principles and practices",
      "High level of accuracy, attention to detail, and integrity",
      "Good communication and interpersonal skills",
      "Ability to manage multiple tasks and meet deadlines",
    ],
    whatWeOffer: [
      "Salary: ₦350,000/month net",
      "Hybrid work arrangement",
    ],
    salary: "₦350,000/month net",
    email: "talenntrecruit@gmail.com",
  },
];
