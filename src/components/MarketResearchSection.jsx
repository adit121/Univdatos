import React from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  DocumentDuplicateIcon,
  InboxStackIcon,
} from '@heroicons/react/24/solid';
import stickyNotes from '../assets/sticky-notes.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
  }),
};

const cardIcons = [DocumentDuplicateIcon, AcademicCapIcon, InboxStackIcon];

export default function MarketResearch() {
  return (
    <section className="bg-[#F5F8FC] py-2 font-manrope">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* LEFT COLUMN */}
          <div className="px-6 py-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#455488] mb-4 leading-snug font-bricolage">
              Market Research <span className="text-[#000000] font-bold">Reports Built for </span >
              <span className="text-[#000000] font-bold">Strategic Clarity</span>
            </h2>
            <p className="text-[#4A5568] mb-6 max-w-xl font-manrope">
              Make confident decisions with access to industry-leading insights, market forecasts, and competitor intelligence— 
              all backed by reliable data and expert analysis.
            </p>

            <h3 className="text-[#000000] font-semibold mb-4 font-bricolage">What We Offer:</h3>

            <div className="space-y-4">
              {[
                {
                  title: 'Syndicated Reports',
                  description:
                    'Pre-published reports that offer cost-effective, in-depth views on market sizing, growth trends, competitor positioning, and future outlooks—ideal for quick access to trusted intelligence.',
                },
                {
                  title: 'Custom Reports',
                  description:
                    'Tailored research designed to answer your specific business questions—covering niche segments, regional opportunities, competitive threats, or emerging trends with precision.',
                },
                {
                  title: 'Subscription Packages',
                  description:
                    'Flexible half-yearly and annual subscriptions that include PDF/Excel downloads, customization support, and dedicated analyst access—so insights evolve with your needs.',
                },
              ].map((card, index) => {
                const Icon = cardIcons[index];
                return (
                  <motion.div
                    key={card.title}
                    className="flex bg-[#F1F5F9] rounded-lg overflow-hidden shadow-sm"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="w-2 bg-[#09184C]" />
                    <div className="p-4 flex">
                      <Icon className="w-6 h-6 text-[#010206] mr-4 mt-1" />
                      <div>
                        <h4 className="text-[#09184C] font-semibold font-bricolage">{card.title}</h4>
                        <p className="text-sm text-[#4A5568] mt-1 leading-snug font-manrope">{card.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN IMAGE */}
          <div className="relative w-full h-full px-6 md:px-0">
            <img
              src={stickyNotes}
              alt="Sticky notes brainstorming session"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* LATEST RESEARCH MOCK CAROUSEL */}
      <div className="mt-20 max-w-7xl mx-auto px-6 md:px-0">
        <h3 className="text-2xl font-semibold text-[#09184C] mb-6 font-bricolage">
          Our <span className="text-[#455488]">Latest</span> Research
        </h3>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="min-w-[200px] w-[200px] bg-white rounded-xl shadow-md p-3 flex-shrink-0"
            >
              <div className="w-full h-[140px] bg-gray-200 rounded-md mb-3" />
              <p className="text-xs text-[#4A5568] font-medium font-manrope mb-1">2024–2025</p>
              <h4 className="text-sm font-semibold text-[#000000] leading-tight mb-1 font-bricolage">
                Sample Report Title #{i + 1}
              </h4>
              <button className="text-[#455488] text-xs font-semibold hover:underline font-bricolage">
                VIEW REPORT →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
