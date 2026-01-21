"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#approach", label: "Our Approach" },
  { href: "/#innovation", label: "Our Innovation" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-white/20"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
              <img
                src="/logo.jpeg"
                alt="Thrive Health Link Logo"
                className="w-auto h-[32px] rounded-full ring-4 ring-white/50 shadow-xl relative transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-gradient-to-r from-primary to-secondary hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/donate" className="flex items-center gap-2">
                <Heart className="w-4 h-4" fill="currentColor" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="animate-in spin-in-90" />
            ) : (
              <Menu size={24} className="animate-in fade-in" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with Modern Slide-in */}
        <div
          className={`md:hidden absolute top-24 left-0 right-0 transition-all duration-500 ${isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <div className="mx-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-4 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 font-medium transform hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-gradient-to-r from-primary to-secondary hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
