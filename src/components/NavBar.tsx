"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "./ThemeToggle";
import React, { useState } from "react";

export default function NavBar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavBarItems />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="secondary">
              <ThemeToggle />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}

function NavBarItems() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Kadha"
              href="https://phaneendra73.github.io/kadha/"
              src="https://github.com/user-attachments/assets/e657be2a-33dd-48a5-beda-d334dd5f40b5"
              description="A minimal markdown-powered blog platform built with React and Chakra UI."
            />
            <ProductItem
              title="ViewMyWay"
              href="https://viewmyway.onrender.com"
              src="https://github.com/user-attachments/assets/50821a72-549e-46ef-90d4-44117e7e6d77"
              description="A simple blog writing platform using React and Prisma with markdown support."
            />
            <ProductItem
              title="BingeWatch"
              href="https://phaneendra73.github.io/BingeWatch/"
              src="https://user-images.githubusercontent.com/118047850/233824675-6c6423f7-4402-46a1-b8f4-71c7c74c1f93.png"
              description="Netflix-like UI built with HTML, CSS, and JS. Browse & save favorites."
            />
            <ProductItem
              title="Match The Cards"
              href="https://phaneendra73.github.io/MatchTheCards/"
              src="https://user-images.githubusercontent.com/118047850/234286712-bff67eb5-5f0b-49d5-bfb7-db558cebfa60.png"
              description="A fun memory game built using JavaScript. Flip and match pairs."
            />
            <ProductItem
              title="Food Website"
              href="https://phaneendra73.github.io/foodsite/"
              src="https://user-images.githubusercontent.com/118047850/240611151-5e976b7d-85e0-42c1-9f00-7cca1fc5c4a6.png"
              description="Immersive food website using HTML, CSS, and jQuery."
            />
            <ProductItem
              title="Weather App"
              href="https://phaneendra73.github.io/weather-API/"
              src="https://user-images.githubusercontent.com/118047850/242651552-f9e98f0c-a63e-4ce5-a4f5-2d9a1da9527d.png"
              description="Responsive weather app using API & JSON. Built with JS and media queries."
            />
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Education"
        ></MenuItem>
      </Menu>
    </>
  );
}
