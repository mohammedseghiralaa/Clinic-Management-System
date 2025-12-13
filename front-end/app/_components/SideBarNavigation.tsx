"use client";
import React, { useState } from "react";
import Pages from "./Pages";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPage = usePathname();
  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-linear-to-r from-cyan-500 to-cyan-600 shadow-lg z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <Logo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-cyan-600 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`
          fixed lg:static top-0 left-0 h-screen
          bg-linear-to-b from-cyan-500 via-cyan-600 to-cyan-700
          shadow-2xl z-40 transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          w-64
        `}
      >
        <div className="flex flex-col h-full py-6">
          {/* Logo - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block px-5 sm:px-8 mb-6">
            <Header />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2 px-3 mt-16 lg:mt-0">
            {Pages.map((page) => (
              <NavLink
                key={page.name}
                page={page}
                currentPage={currentPage}
                setIsOpen={setIsOpen}
              />
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
