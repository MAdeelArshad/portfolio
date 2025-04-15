"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-100 text-center p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Image
        src="/profile.jpeg" // Replace with your image path
        alt="Muhammad Adeel Arshad"
        width={150}
        height={150}
        className="rounded-full mb-4 border-4 border-primary" // Primary color border
      />
      <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4">
        Hi, I&apos;m Muhammad Adeel Arshad 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-4">
        A Full Stack Software Engineer from Lahore, Pakistan with 5+ years of
        experience specializing in modern web development.
      </p>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl">
        Skilled in TypeScript, React, Next.js, NestJS, and AWS serverless
        solutions. I thrive in agile environments, love solving complex
        challenges, and building scalable and elegant user interfaces.
      </p>
      <Link
        href="/about"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        Learn More About Me
      </Link>
    </motion.main>
  );
}
