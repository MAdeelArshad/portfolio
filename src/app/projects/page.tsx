"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "AWS Serverless Backend for Data Management",
    duration: "Aug 2023 - Present",
    description:
      "Developed a robust serverless backend on AWS to efficiently manage and process data. Focused on scalability and reliability.",
    details: [
      "Utilized AWS Step Functions, AppSync, DynamoDB, and TimeStream.",
      "Implemented scalable data processing pipelines.",
      "Focused on optimizing performance and reliability.",
    ],
    skills: [
      "AWS Serverless",
      "Step Functions",
      "AppSync",
      "DynamoDB",
      "TimeStream",
      "AWS Lambda",
      "CodeBuild",
      "GraphQL",
    ],
  },
  {
    name: "Medical Portal Website",
    duration: "Feb 2022 - Jul 2023",
    description:
      "Built a comprehensive web portal for a medical platform, facilitating interaction between patients, doctors, and lab technicians.",
    details: [
      "Developed user interfaces and backend functionality.",
      "Integrated user roles and permissions.",
      "Ensured seamless user experience and data management.",
    ],
    skills: [
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Angular.js", // Added from resume
      "React Hooks", // Added from resume
      "Redux", // Added from resume
      "Cypress",
      "Jest",
      "TypeORM", // Added from resume
    ],
  },
  {
    name: "Mass Video Production Tool",
    duration: "Jan 2020 - May 2021",
    description:
      "Engineered a tool for mass video production using NestJS with Nats and Redis for the backend and NextJS for the frontend.",
    details: [
      "Designed and implemented backend services with NestJS, Nats, and Redis.",
      "Developed frontend interface using NextJS.",
      "Optimized performance for handling large-scale video processing.",
    ],
    skills: [
      "Next.js",
      "NestJS",
      "Nats",
      "Redis",
      "MongoDB",
      "React Hooks", // Added from resume
      "Redux", // Added from resume
      "Mongoose", // Added from resume
      "Cypress",
      "Jest",
    ],
  },
  {
    name: "Chef Order App",
    duration: "May 2021 - Jul 2022",
    description:
      "A web app for chefs to manage and receive food orders seamlessly.",
    details: [
      "Developed order management features.",
      "Designed user-friendly interface for chefs.",
      "Optimized workflow for efficient order processing.",
    ],
    skills: [
      "React",
      "Next.js",
      "MongoDB",
      "ReactNative", // Added from resume
      "Redux", // Added from resume
      "Jest",
      "CircleCI", // Added from resume
    ],
  },
];

export default function Projects() {
  return (
    <motion.section
      className="p-6 max-w-4xl mx-auto min-h-[calc(100vh-4rem)]"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="relative border-l-2 border-indigo-400 pl-10 space-y-10 pb-5">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1.5 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-indigo-700">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{project.duration}</p>
              <p className="text-gray-700">{project.description}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {project.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-gray-600">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
