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
    <footer className="w-full mt-24 border-t border-neutral-200 dark:border-neutral-700 py-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
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
              className="text-xl text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} made  by{" "}
          <Link
            href="https://www.linkedin.com/in/phaneendra73/"
            className="hover:underline hover:text-green-500 transition-colors"
            target="_blank"
          >
            Phaneendra
          </Link>
          . All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
