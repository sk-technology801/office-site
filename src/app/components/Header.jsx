'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function AnimatedLink({ href, label }) {
  return (
    <Link href={href} className="group relative overflow-hidden">
      <span className="flex gap-[1px] text-white text-sm font-semibold tracking-widest uppercase">
        {label.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block transform transition-all duration-300 group-hover:translate-y-1 group-hover:text-gray-400"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      {/* Underline on hover */}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-wider transition duration-300 hover:scale-105 hover:text-gray-200"
        >
          <span className="text-white">SOFT</span>
          <span className="text-gray-500">WARE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {links.map((link) => (
            <AnimatedLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-black px-6 pb-6 pt-4 space-y-4 text-sm uppercase font-medium tracking-wide border-t border-white/10"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-gray-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
