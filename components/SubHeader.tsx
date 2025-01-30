"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600">
          <Link href="/">Saloonist</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/services/bridal" className="text-pink-600 hover:text-pink-400">
          Bridal
          </Link>
          <Link href="/services/eyebrows" className="text-pink-600 hover:text-pink-400">
          Eyebrows
          </Link>
          <Link href="/services/facials" className="text-pink-600 hover:text-pink-400">
          Facials
          </Link>
          <Link href="/services/haircoloring" className="text-pink-600 hover:text-pink-400">
          Haircoloring
          </Link>
          <Link href="/services/makeup" className="text-pink-600 hover:text-pink-400">
          Makeup
          </Link>
          <Link href="/services/massage" className="text-pink-600 hover:text-pink-400">
          Massage
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100">
          <Link
            href="/"
            className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/faqs"
            className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
            onClick={() => setMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
