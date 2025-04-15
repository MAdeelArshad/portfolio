"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <motion.section
      className="max-w-4xl mx-auto h-full flex flex-col" // Added flex-col
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mb-4 sm:mb-8 flex justify-between items-start space-y-4  sm:flex-row">
        {/* Flex wrapper for heading and button */}
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-1">Resume</h3>
        <a
          href="/Adeel Resume's.pdf"
          download
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700" //Use inline flex
        >
          Download Resume
          <FaDownload className="ml-2" /> {/* Add the download icon */}
        </a>
      </div>

      {/* Iframe Container */}
      <div className="relative flex-grow">
        <iframe
          src="/Adeel Resume's.pdf"
          className="absolute top-0 left-0 w-full h-full border rounded-lg"
          title="Muhammad Adeel Arshad Resume"
        ></iframe>
      </div>
    </motion.section>
  );
}
