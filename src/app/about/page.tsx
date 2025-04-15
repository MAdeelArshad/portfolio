"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 mb-4">
        I&apos;m a passionate full-stack engineer with around 5 years of
        hands-on experience developing scalable and maintainable web
        applications.
      </p>
      <p className="text-gray-700 mb-4">
        I specialize in modern JavaScript frameworks including{" "}
        <strong>React</strong>, <strong>Next.js</strong>,{" "}
        <strong>NestJS</strong>, and cloud platforms like <strong>AWS</strong>.
        My main focus is to build responsive, accessible, and high-performance
        products using modern web technologies.
      </p>
      <p className="text-gray-700 mb-4">
        I’ve collaborated on projects across healthcare, media, and enterprise
        document management, delivering full-featured products in fast-paced
        environments.
      </p>
      <div>
        <h3 className="text-xl font-semibold mt-6 mb-2">Technical Skills:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL</li>
          <li>
            Frontend: React.js, Next.js, Redux, Tailwind CSS, React Native,
            AngularJS, MUI, Styled Components
          </li>
          <li>
            Backend: Node.js, Express.js, NestJS, GraphQL, REST APIs,
            Microservices
          </li>
          <li>
            Databases: MongoDB, PostgreSQL, MySQL, DynamoDB, TimeStream, Redis
          </li>
          <li>
            Cloud & DevOps: AWS (Lambda, S3, Step Functions, AppSync,
            CodeBuild), GCP, Azure, Docker, Jenkins, CircleCI, Travis CI
          </li>
          <li>
            Testing & Tools: Jest, Cypress, Enzyme, Jasmine, Mocha, GitHub
            Actions, CI/CD
          </li>
          <li>
            Other: Prisma, TypeORM, Sequelize, Webpack, NPM, Ethers.js, Web3.js,
            Socket.io, WebSocket
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
