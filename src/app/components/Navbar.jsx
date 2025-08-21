import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Left Section - Brand Logo */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            UrbanKicks
          </span>
        </Link>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="flex-1 hidden md:flex justify-center gap-8 text-lg font-medium">
        <Link href="/products" className="hover:text-primary transition">
          Products
        </Link>
        <Link href="/about" className="hover:text-primary transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-primary transition">
          Contact
        </Link>
      </div>

      {/* Right Section - Theme + Auth */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link href="/login" className="btn btn-sm rounded-xl btn-outline">
          Login
        </Link>
        <Link href="/signup" className="btn btn-sm rounded-xl btn-primary">
          Signup
        </Link>
      </div>
    </div>
  );
}


