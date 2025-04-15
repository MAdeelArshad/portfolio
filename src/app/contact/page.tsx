"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      className="p-6 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope />

          <h4 className="font-semibold">Email:</h4>
          <p>
            <a
              className="text-indigo-600 hover:underline"
              href="mailto:muhammadadeelarshed@gmail.com"
              target="_blank" // Add target="_blank"
              rel="noopener noreferrer" // Add rel attributes
            >
              muhammadadeelarshed@gmail.com
            </a>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-2">
          <FaLinkedin />

          <h4 className="font-semibold">LinkedIn:</h4>
          <p>
            <a
              className="text-indigo-600 hover:underline"
              href="https://linkedin.com/in/muhammad-adeel-983b94185"
              target="_blank"
              rel="noopener noreferrer"
            >
              @muhammad-adeel-983b94185
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-2">
          <FaGithub />
          <h4 className="font-semibold">GitHub:</h4>
          <p>
            <a
              className="text-indigo-600 hover:underline"
              href="https://github.com/muhammadadeel"
              target="_blank"
              rel="noopener noreferrer"
            >
              @muhammadadeel
            </a>
          </p>
        </div>

        {/* Phone Number & WhatsApp */}
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold">Phone/WhatsApp:</h4>
          <a
            href="https://wa.me/923456490263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700"
          >
            <p className="flex items-center space-x-2">
              <span>+92 345 6490263</span>
              <FaWhatsapp />
            </p>
          </a>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-semibold">Location:</h4>
          <p>Lahore, Pakistan</p>
        </div>

        {/* Timezone */}
        <div>
          <h4 className="font-semibold">Timezone:</h4>
          <p>EST (Primary working timezone)</p>
        </div>
      </div>
    </motion.section>
  );
}
