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
    who: "Patients navigating confusing insurance denials AND billing teams analyzing claim rejections",
    problem: "Patients receive denial letters in impenetrable medical-legal jargon and don't know what happened or what to do next. Meanwhile, billing teams manually review denial codes for hours, cross-referencing payer guidelines to determine corrective actions. The US healthcare system loses $262B annually to claim denials.",
    impact: "Reduces patient anxiety by translating insurance jargon into plain English with actionable next steps. For providers, cuts manual claim review time by ~70% through AI-powered denial analysis with 85%+ confidence scoring, helping billing teams resolve denials faster and recover revenue.",
    decisions: "Built as microservices architecture—Python FastAPI for AI orchestration (better ML ecosystem) and Node.js/Express for patient-facing features. Chose Claude Sonnet 4 over GPT for superior reasoning on complex healthcare logic. Implemented RAG pattern by filtering 15 denial scenarios to 3-5 most relevant per claim before prompt injection, avoiding context window bloat. Enforced structured JSON outputs rather than parsing free-form responses to ensure reliability in healthcare context.",
    skills: "React, TypeScript, Python, FastAPI, Node.js, Claude API, RAG patterns, prompt engineering, microservices architecture, healthcare domain knowledge (revenue cycle management, medical billing, patient navigation)"
  },
  image: claimsNavigatorImg,
  link: "", // Add when you deploy the live patient tool
  repo: "https://github.com/mitsk2002/claims-navigator",
},
];