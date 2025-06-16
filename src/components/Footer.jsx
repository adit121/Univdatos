import React from 'react';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa6';
import univdatosLogo from '../assets/UDS LOGO(White).png';
import isoBadge from '../assets/iso-badge.png';
import womenOwnedBadge from '../assets/women-owned-badge.png';

const Footer = () => {
  return (
    <footer className="bg-[#09184C] text-white pt-16 pb-6 px-4 md:px-20 font-manrope">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Logo + Description + Social */}
        <div>
          <img
            src={univdatosLogo}
            alt="UnivDatos Logo"
            className="mb-4"
            style={{ width: '265px', height: '50px' }}
          />
          <p className="text-sm mb-6 font-manrope">
            UnivDatos is a rapidly growing market research firm delivering
            market intelligence and consulting services since 2013
          </p>
          <div className="flex gap-4 text-white text-lg font-bricolage">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaPinterestP className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm font-bricolage">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm font-manrope">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Cancellation Policy</a></li>
          </ul>
        </div>

        {/* Column 3 - Industry Verticals */}
        <div>
          <h4 className="font-semibold mb-4 text-sm font-bricolage">INDUSTRY VERTICALS</h4>
          <ul className="space-y-2 text-sm font-manrope">
            <li><a href="#">Automotive</a></li>
            <li><a href="#">Aerospace and Defence</a></li>
            <li><a href="#">Agriculture</a></li>
            <li><a href="#">Building Material and Construction</a></li>
            <li><a href="#">View All</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact + Badges */}
        <div>
          <h4 className="font-semibold mb-4 text-sm font-bricolage">CONTACT</h4>
          <p className="text-sm mb-2 font-manrope">
            C-80B, Sector 8, Noida, Uttar Pradesh- 201301, India
          </p>
          <p className="text-sm mb-2 font-manrope">+1 978 733 0253</p>
          <p className="text-sm mb-4 font-manrope">contact@univdatos.com</p>
          <button className="border border-white px-4 py-2 text-sm rounded hover:bg-white hover:text-[#09184C] transition font-bricolage mb-4">
            Send An Enquiry →
          </button>

          {/* ISO and Women-Owned Badges */}
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <img
              src={isoBadge}
              alt="ISO Certified"
              className="h-16 w-auto"
            />
            <img
              src={womenOwnedBadge}
              alt="Women-Owned Business"
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white font-bricolage">
        © 2025 UnivDatos. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
