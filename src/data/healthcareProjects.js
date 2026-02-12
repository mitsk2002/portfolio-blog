import healthcareDashboardImg from "../assets/projects/healthcare-dashboard.png";
import healthcareSchedulerImg from "../assets/projects/healthcare-scheduler.png";
import claimsNavigatorImg from "../assets/projects/claims-navigator-output.png";

export const healthcareProjects = [
  {
    id: 1,
    title: "Healthcare Dashboard",
    summary: {
      who: "Clinic operations managers at small practices without enterprise analytics tools",
      problem: "Staff rely on static reports and news outlets to track infectious disease trends, making it hard to plan staffing and resources proactively during outbreaks.",
      impact: "Real-time visibility into regional case trends helps small clinics allocate staff and supplies before demand spikes, reducing operational chaos during surges.",
      decisions: "Used plain CSS instead of Tailwind due to unfamiliarity at the time, prioritizing shipping a working product over learning new tooling mid-project. Chose Chart.js for visualizations because it handles real-time data updates cleanly. Pulled data from disease.sh API to avoid rate limits and authentication complexity.",
      skills: "React, Axios, Vite, Chart.js, API integration, data visualization, CSS"
    },
    image: healthcareDashboardImg,
    link: "https://mitsk2002.github.io/healthcare-dashboard/",
  },
  {
    id: 2,
    title: "Healthcare Scheduler",
    summary: {
      who: "Patients booking appointments and clinic admin staff coordinating provider availability",
      problem: "Front desk staff manually coordinate schedules, leading to double-bookings, no-shows that waste revenue, and patients struggling to find open slots. Existing scheduling tools are bloated or outdated.",
      impact: "Reducing scheduling friction improves clinic cash flow (fewer no-shows) and patient satisfaction while cutting administrative workload.",
      decisions: "Chose Vite over Create React App for faster dev server and cleaner builds. Structured time-slot logic to handle provider availability constraints upfront rather than patching edge cases later. Balanced clean architecture with incremental building to avoid overengineering an MVP.",
      skills: "React, Vite, state management, calendar logic, constraint-aware UI design, role-based workflows"
    },
    image: healthcareSchedulerImg,
    link: "https://mitsk2002.github.io/healthcare-scheduler",
    repo: "https://github.com/mitsk2002/healthcare-scheduler",
  },
  {
    id: 3,
    title: "Claims Navigator",
    summary: {
      who: "Billing specialists and front desk staff at small-to-mid-sized outpatient clinics without enterprise billing systems",
      problem: "Manual re-entry of claim data across portals causes formatting errors that trigger denials, delaying reimbursements. Staff waste hours checking payer websites and tracking claim status, leading to revenue leakage and burnout.",
      impact: "Even small improvements in claims accuracy improve cash flow and reduce denial rates, which is critical for cash-strapped practices.",
      decisions: "Used AI to translate insurance jargon into plain English instead of building a traditional form validator, making the tool accessible to non-technical staff. Decided against PDF upload functionality to avoid HIPAA complexity and storage risks in an MVP. Mocked data instead of using real PHI to maintain privacy compliance.",
      skills: "AI integration, healthcare data workflows, privacy-aware design, user-focused simplification, React"
    },
    image: claimsNavigatorImg,
    link: "https://github.com/mitsk2002/claims-navigator",
    repo: "https://github.com/mitsk2002/claims-navigator",
  },
];