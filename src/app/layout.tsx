"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react"; // Import useRef
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons: npm install react-icons

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // Create a ref for the nav

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]); //  useEffect dependency on menuOpen

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col h-full`}>
        <header className="fixed top-0 w-full h-16 shadow bg-white flex items-center justify-between px-6 z-10 space-x-2">
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button (Mobile) */}
            <button
              className="sm:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleMenuToggle}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpeg" // Replace with your image path
                  alt="Muhammad Adeel Arshad"
                  width={45}
                  height={45}
                  className="rounded-full border-4 border-primary"
                />
                <span className="text-xl font-bold text-indigo-700">
                  Adeel Arshad
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden sm:flex space-x-4">
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
          </nav>
        </header>

        {/* Sidebar Navigation (Mobile) */}
        <div
          ref={navRef} // Add the ref to the nav
          className={`${
            menuOpen ? "w-64" : "w-0"
          } fixed top-16 left-0 h-full bg-white shadow-md z-20 transition-width duration-300 overflow-x-hidden sm:hidden`}
        >
          <nav className="flex flex-col h-full">
            <Link
              href="/about"
              className="block py-4 px-6 hover:bg-gray-100"
              onClick={handleMenuToggle}
            >
              About
            </Link>
            <Link
              href="/experience"
              className="block py-4 px-6 hover:bg-gray-100"
              onClick={handleMenuToggle}
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="block py-4 px-6 hover:bg-gray-100"
              onClick={handleMenuToggle}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block py-4 px-6 hover:bg-gray-100"
              onClick={handleMenuToggle}
            >
              Contact
            </Link>
            <Link
              className="block py-4 px-6 hover:bg-gray-100"
              onClick={handleMenuToggle}
              href="/resume"
            >
              Resume
            </Link>
          </nav>
        </div>

        <main
          className="flex-grow overflow-y-auto h-full mt-16 mb-16 px-4 sm:px-0" // Added px-4
        >
          {children}
        </main>

        <footer className="fixed bottom-0 w-full h-16 bg-gray-100 text-center flex items-center justify-center text-sm text-gray-600 z-10">
          © {new Date().getFullYear()} Muhammad Adeel Arshad. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
