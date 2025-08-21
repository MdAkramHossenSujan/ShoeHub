"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Explore", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-base-100 shadow-md px-6 fixed w-full z-50">
      <div className="flex items-center justify-between h-16">
        {/* Left - Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            UrbanKicks
          </span>
        </Link>

        {/* Center - Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-lg font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right - Theme + Auth */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login" className="btn btn-sm rounded-xl btn-outline">
            Login
          </Link>
          <Link href="/signup" className="btn btn-sm rounded-xl btn-primary">
            Signup
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleSidebar} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar + Mask */}
      {isOpen && (
        <>
          {/* Overlay / Mask */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-64 h-full bg-base-100 shadow-lg p-6 flex flex-col gap-6 z-50">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-2">
              <Link
                href="/login"
                className="btn btn-sm rounded-xl btn-outline w-full"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="btn btn-sm rounded-xl btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}


