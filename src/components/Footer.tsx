"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/phaneendra73/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/phaneendra73",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com/Phaneendra37/",
      icon: <FaTwitter />,
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com/tech_telusa/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative w-full mt-24 py-10 text-center text-sm text-neutral-500 dark:text-neutral-400 overflow-hidden bg-gradient-to-br from-zinc-50 to-green-100 dark:from-zinc-950 dark:to-green-900">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="text-3xl text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <p className="text-base text-zinc-800 dark:text-zinc-200">
            &copy; {new Date().getFullYear()} made by{" "}
            <Link
              href="https://www.linkedin.com/in/phaneendra73/"
              className="font-bold hover:underline hover:text-green-600 dark:hover:text-green-400 transition-colors"
              target="_blank"
            >
              Phaneendra
            </Link>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
