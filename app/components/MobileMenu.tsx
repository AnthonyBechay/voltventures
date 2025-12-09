'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-400"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}

