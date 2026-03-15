export const portfolioData = {
  about: {
    name: "Adil Muhammed Y",
    role: "Full Stack Engineer",
    location: "Kerala, India",
    currentCompany: "Visteon Corporation",
    email: "adilmuhammedy@gmail.com",
    phone: "+91 7025620568",
    github: "https://github.com/adilmuhammedy",
    linkedin: "https://linkedin.com/in/adilmuhammedy",
    description1:
      "I am a Full Stack Engineer with 2+ years of experience building and shipping production web applications across backend, database, cloud and frontend layers.",
    description2:
      "Experienced in designing APIs, managing relational databases, and developing scalable systems used by real users.",
    description3:
      "Comfortable working in fast-paced environments, taking ownership of problems, and delivering end-to-end solutions from schema design to user interface. Strong background in Node.js, TypeScript, React, and cloud-based deployments on AWS.",
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Visteon Corporation",
      duration: "Aug 2024 – Present",
      responsibilities: [
        "Built backend services for an automotive developer platform enabling APK submission, validation, and publishing workflows.",
        "Designed and implemented REST APIs reducing frontend data load time by ~30% through optimized response structures and query handling.",
        "Developed scalable full-stack features using React.js, Node.js, and TypeScript, improving feature delivery speed by 25%.",
        "Optimized PostgreSQL queries and schema design, reducing database response latency by 20–35%.",
        "Integrated AWS services (S3, container deployments), improving deployment reliability and reducing manual operational effort by ~40%.",
        "Debugged and resolved production issues, decreasing recurring defects and improving platform stability across releases.",
        "Collaborated within Agile teams delivering sprint commitments with consistent on-time feature releases."
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "React.js",
        "AWS",
        "PostgreSQL",
        "Jenkins",
        "Docker"
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Visteon Corporation",
      duration: "Jan 2024 – Jun 2024",
      responsibilities: [
        "Developed reusable UI components that reduced duplicate code by ~30% across modules.",
        "Integrated backend APIs enabling faster feature rollout and improving user workflow efficiency.",
        "Assisted in production debugging and release cycles, contributing to multiple successful deployments."
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "REST APIs"
      ],
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Cochin University of Science and Technology (CUSAT)",
      period: "2020 – 2024",
      description: "GPA: 9.5 / 10",
    },
  ],
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ],
    backend: ["Node.js", "NestJS", "Java", "TypeScript", "REST APIs", "Microservices"],
    databases: ["PostgreSQL", "MongoDB", "Query Optimization"],
    cloudDevops: ["AWS (S3, EC2, ECS, Lambda, IAM)", "Docker", "AWS CDK", "Jenkins CI/CD"],
    other: ["API Design", "System Debugging", "Agile", "Python", "C++"],
  },
projects: [
  {
    title: "Automotive Android App Store Platform",
    description: [
      "Developed backend workflows for APK submission, validation, and publishing pipelines used by automotive OEM partners.",
      "Designed scalable REST APIs using NestJS and TypeScript to manage developer onboarding and application lifecycle.",
      "Implemented APK validation processes including metadata verification and submission checks before publishing.",
      "Integrated AWS S3 storage pipelines for secure APK storage and retrieval.",
      "Collaborated with internal teams to enable OEM review workflows for approving in-vehicle infotainment applications."
    ],
    tech: ["NestJS", "TypeScript", "AWS S3", "REST APIs"],
    link: "#",
  },

  {
    title: "Icebay Franchise Inventory & Stock Management System",
    description: [
      "Designed backend architecture for a franchise-based inventory platform managing Icebay food product distribution.",
      "Implemented stock tracking APIs using NestJS and PostgreSQL to maintain accurate product availability across franchises.",
      "Built workflows for franchise order processing, stock updates, and inventory reconciliation.",
      "Reduced manual stock reconciliation effort by ~50% through automated stock management logic.",
      "Developed frontend dashboards using React.js for monitoring stock levels and franchise operations."
    ],
    tech: ["NestJS", "PostgreSQL", "React.js"],
    link: "#",
  },

   {
    title: "SizeAssist – AI Clothing Size Prediction System",
    description: [
      "Developed an AI-powered clothing size prediction system that estimates body measurements from user inputs.",
      "Built a machine learning backend using FastAPI that predicts chest, waist, and shoulder measurements.",
      "Designed REST APIs to process prediction requests and return measurement outputs in real time.",
      "Created a responsive React-based frontend allowing users to input body parameters and view size predictions.",
      "Implemented modern UI components and size ranking visualization for better user experience.",
      "Integrated ML model inference with frontend APIs for seamless prediction workflows."
    ],
    tech: ["React.js", "FastAPI", "Python", "Machine Learning", "TailwindCSS"],
    link: "#",
  },
  {
  title: "Vehicle Companion Mobile App for In-Vehicle App Store (PoC)",
  description: [
    "Developed an Android companion application allowing vehicle users to view and manage in-vehicle app store applications directly from their smartphones.",
    "Built the mobile application using Kotlin for Android to display installed apps, available updates, and device-related application information.",
    "Implemented secure communication between the mobile app and the in-vehicle infotainment device using AWS IoT Core.",
    "Designed a proof-of-concept architecture where both the vehicle device and mobile application communicate through AWS IoT messaging channels.",
    "Enabled workflows for remotely triggering application downloads and updates on the in-vehicle device from the companion mobile app.",
    "Demonstrated feasibility of mobile-to-vehicle connectivity for improving user experience in automotive app ecosystems."
  ],
  tech: ["Kotlin", "Android", "AWS IoT Core", "IoT Messaging"],
  link: "#"
},
{
  title: "Weather Aggregation Wrapper API for In-Vehicle Infotainment",
  description: [
    "Developed a backend weather aggregation service using NestJS that provides a unified API for vehicle infotainment systems.",
    "Integrated multiple external weather providers including OpenWeather and AccuWeather to fetch real-time weather data.",
    "Designed a wrapper API layer to normalize responses from different providers into a consistent format for client applications.",
    "Implemented failover logic allowing the service to switch providers if one API becomes unavailable.",
    "Hosted the service as a scalable REST API used by in-vehicle infotainment devices to retrieve weather updates.",
    "Improved reliability and simplified client integration by abstracting multiple weather APIs behind a single endpoint."
  ],
  tech: ["NestJS", "TypeScript", "REST APIs", "OpenWeather API", "AccuWeather API"],
  link: "#"
} 
],
  achievements: [
    "AWS Certified Developer Associate — Pursuing",
    "AWS Job Roles in Cloud Computing — Amazon Web Services (2025)",
    "Gold Badge (5★) Problem Solving — HackerRank",
    "HacktoberFest Open Source Contributor"
  ]
};
