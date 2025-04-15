"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Iron Mountain",
    title: "Senior Software Engineer",
    duration: "Aug 2023 – Present",
    location: "Remote / Boston, MA",
    details: [
      "Enhanced product infrastructure and development processes as a key contributor.",
      "Led backend development using AWS Serverless (Step Functions, AppSync, DynamoDB, TimeStream, CodeBuild, Pipelines).",
      "Managed and maintained micro frontend modules using Webpack 5 module federation.",
      "Tech stack: Next.js, React, NestJS, GraphQL, AWS Lambda, AppSync, DynamoDB, Cypress, Jest.",
    ],
  },
  {
    company: "Virus Geeks",
    title: "Tech Lead & Senior Developer",
    duration: "Feb 2022 – Jul 2023",
    location: "Remote / Lahore",
    details: [
      "Led full software development lifecycle from planning and design to testing and deployment.",
      "Built a comprehensive medical portal for patients, doctors, and lab technicians.",
      "Documented code changes and collaborated closely with QA engineers and product managers.",
      "Resolved complex issues by applying deep technical knowledge across multiple domains.",
      "Tech stack: Next.js, AngularJS, React, NestJS, PostgreSQL, MongoDB, Cypress, Jest.",
    ],
  },
  {
    company: "Focusteck",
    title: "Senior Software Engineer",
    duration: "Jun 2022 – Jan 2023",
    location: "Lahore",
    details: [
      "Developed scalable web applications using AngularJS and NestJS.",
      "Guided junior developers, reviewed code, and ensured testing and QA alignment.",
      "Handled bug fixing, test execution, and cross-functional coordination.",
      "Tech stack: Next.js, AngularJS, NestJS, PostgreSQL, MongoDB, Cypress, Jest.",
    ],
  },
  {
    company: "TechmateTech LLC",
    title: "Senior MERN Developer",
    duration: "May 2021 – Jul 2022",
    location: "Lahore",
    details: [
      "Developed intuitive, customizable UI/UX interfaces for web applications.",
      "Built an internal app for chefs to manage orders and streamline workflows.",
      "Collaborated with design and QA teams to enhance product usability.",
      "Tech stack: React, Next.js, React Native, Redux, MongoDB, CircleCI, Jest.",
    ],
  },
  {
    company: "AMOXT Solutions Inc.",
    title: "Full Stack Engineer",
    duration: "Jan 2020 – May 2021",
    location: "Lahore",
    details: [
      "Built a mass video production platform using NestJS, NATS, Redis, and Next.js.",
      "Focused on performance optimization and clean, maintainable code.",
      "Worked closely with team members on design, development, and deployment tasks.",
      "Tech stack: Next.js, NestJS, MongoDB, Redis, Mongoose, Cypress, Jest.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <motion.section
      className="p-6 max-w-4xl mx-auto min-h-[calc(100vh-4rem)]"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="relative border-l-2 border-indigo-400 pl-10 space-y-10 pb-5">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1.5 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-indigo-700">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {exp.company} • {exp.location}
              </p>
              <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
