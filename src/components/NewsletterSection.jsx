import React from 'react';
import bgMap from '../assets/world-map-bg.png';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const NewsletterSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 px-4 md:px-20 font-manrope"
      style={{
        backgroundImage: `url(${bgMap})`,
      }}
    >
      <div className="max-w-7xl mx-auto text-left ml-32 md:ml-48">
        <button className="bg-white text-[#09184C] font-semibold px-4 py-1 rounded-full text-sm mb-4 font-bricolage uppercase tracking-wide">
          STAY CONNECTED
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-bricolage">
          Subscribe to our newsletter
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-md w-full lg:w-1/4 text-black font-manrope placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="youremail@company.com"
            className="px-4 py-3 rounded-md w-full lg:w-1/4 text-black font-manrope placeholder-gray-500"
          />
          <button className="bg-white text-[#09184C] font-medium px-4 py-3 rounded-md w-full lg:w-auto font-manrope">
            Captcha
          </button>
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-md w-full lg:w-auto font-manrope">
            ITzaat ↻
          </button>
          <button className="bg-white text-[#09184C] font-semibold px-6 py-3 rounded-md flex items-center w-full lg:w-auto justify-center font-bricolage">
            Submit <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>

        <div className="flex items-start space-x-2 text-sm mb-6">
          <input type="checkbox" className="mt-1" />
          <p className="text-gray-200 max-w-4xl font-manrope">
            By submitting this form, I understand that my data will be processed by Univdatos as indicated above and described in the Privacy Policy.
          </p>
        </div>

        <div className="text-sm font-semibold text-white flex items-center gap-1 hover:underline cursor-pointer font-bricolage">
          View All Newsletters <ArrowRightIcon className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
