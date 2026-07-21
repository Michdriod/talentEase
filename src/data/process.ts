export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Understand Your Needs",
    description:
      "We start by learning about your business, challenges, and HR requirements to understand how we can best support you.",
  },
  {
    step: 2,
    title: "Develop a Tailored HR Solution",
    description:
      "We create a customized HR approach that aligns with your business goals and workforce needs.",
  },
  {
    step: 3,
    title: "Implement HR Services",
    description:
      "We provide the required support, from talent sourcing and onboarding to employee management, HR policies, and other people-related solutions.",
  },
  {
    step: 4,
    title: "Provide Ongoing Support",
    description:
      "We continue to work with you as a trusted HR partner, ensuring your HR processes remain effective and your team continues to grow.",
  },
];
