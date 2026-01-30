"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const mainNavLinks = [
  { label: "About Us", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Universal Health ID", href: "/uhid" },
  { label: "Provider Network", href: "/providers" },
  { label: "Digital Services", href: "/services" },
];

const moreNavLinks = [
  {
    label: "Developer Portal",
    href: "https://developers.mediloop.co",
    external: true,
  },
  {
    label: "API Documentation",
    href: "https://docs.mediloop.co",
    external: true,
  },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

const navCTA = {
  label: "Sign in",
  href: "https://app.mediloop.co",
  external: true,
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Mediloop home"
            >
              <img
                src="/assets/mediloop.png"
                alt="Mediloop logo"
                className="h-32 w-auto sm:h-32 lg:h-32"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main navigation links for Mediloop's core pages */}
            {mainNavLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {moreNavLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://app.mediloop.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="hidden lg:inline-flex text-gray-700 hover:text-gray-900"
              >
                Sign in
              </Button>
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mounted && isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {mainNavLinks.map((navLink, idx) => (
                <Link
                  key={idx}
                  href={navLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                >
                  {navLink.label}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-2 mt-2">
                <p className="text-sm font-medium text-gray-500 mb-2">More</p>
                {moreNavLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block py-1 text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Button variant="ghost" className="w-full justify-start">
                <Link
                  href={navCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4"
                >
                  {navCTA.label}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
