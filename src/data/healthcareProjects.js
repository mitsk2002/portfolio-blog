import healthcareDashboardImg from "../assets/projects/healthcare-dashboard.png";
import healthcareSchedulerImg from "../assets/projects/healthcare-scheduler.png";
import claimsNavigatorImg from "../assets/projects/claims-navigator-output.png";

export const healthcareProjects = [
  {
    id: 1,
    title: "Healthcare Dashboard",
    description:
      "A data visualization dashboard for healthcare metrics built with React, Axios, and Vite.",
    image: healthcareDashboardImg,
    link: "https://mitsk2002.github.io/healthcare-dashboard/",
  },
  {
    id: 2,
    title: "Healthcare Scheduler",
    description:
      "Book appointments with multiple providers, select dates/times, enter details, and confirm with payment. Includes no-show/cancellation policy.",
    image: healthcareSchedulerImg,
    link: "https://mitsk2002.github.io/healthcare-scheduler",
    repo: "https://github.com/mitsk2002/healthcare-scheduler",
  },
  {
    id: 3,
    title: "Claims Navigator",
    description:
      "Translates confusing insurance denial letters and EOBs into plain English using AI. Helps patients understand why claims were denied and what steps they can take.",
    image: claimsNavigatorImg,
    link: "https://github.com/mitsk2002/claims-navigator",
    repo: "https://github.com/mitsk2002/claims-navigator",
  },
];