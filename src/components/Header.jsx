import React from "react";
import { FaPhone, FaEnvelope, FaShoppingCart, FaSearch } from "react-icons/fa";
import univdatosLogo from "../assets/univdatos-logo.png"; 

export default function Header() {
  return (
    <header className="w-full bg-white font-[Manrope]">
      {/* Top Row */}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo + Search */}
        <div className="flex items-center gap-6 flex-1">
          <img
            src={univdatosLogo} 
            alt="UnivDatos Logo"
            className="h-10"
          />
          <div className="relative w-full max-w-2xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1D2C60]">
              <FaSearch className="text-base" />
            </div>
            <input
              type="text"
              placeholder="Search for reports, blogs, news, industries, and more..."
              className="w-full border border-[#1D2C60] rounded-md px-10 py-2 text-sm text-[#1D2C60] placeholder:text-[#1D2C60] bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Contact Info + Cart */}
        <div className="flex items-center gap-6 text-sm text-[#1D2C60]">
          <div className="flex items-center gap-2">
            <FaPhone className="text-base" />
            <span>+1 978 733 0253</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-base" />
            <span>contact@univdatos.com</span>
          </div>
          <button className="border border-[#1D2C60] p-2 rounded-md hover:bg-[#1D2C60]/10 transition">
            <FaShoppingCart className="text-[#1D2C60]" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="bg-[#09184C] text-white px-8 py-3 rounded-md flex items-center justify-between">
        <ul className="flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline flex items-center gap-1">
            Industry <span className="text-xs">▾</span>
          </li>
          <li className="cursor-pointer hover:underline flex items-center gap-1">
            Services <span className="text-xs">▾</span>
          </li>
          <li className="cursor-pointer hover:underline flex items-center gap-1">
            Reading <span className="text-xs">▾</span>
          </li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>

        <select className="bg-[#09184C] border border-white px-3 py-1 rounded-md text-sm text-white">
          <option>English</option>
        </select>
      </nav>
    </header>
  );
}
