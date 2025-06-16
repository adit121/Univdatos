import React, { useState } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';

import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';

const cards = [
  {
    title: 'Trusted by Global Enterprises',
    description:
      'Our research frameworks support strategic decision-making for Fortune 500 companies and high-growth challengers alike.',
    image: card1,
  },
  {
    title: 'Industry-specific Expertise',
    description:
      'From healthcare and fintech to energy and consumer goods, our domain experts bring targeted insights that matter.',
    image: card2,
  },
  {
    title: 'Tailored Research, Scaled to You',
    description:
      'Whether you’re entering new markets or defending market share, our solutions flex to match your specific needs.',
    image: card3,
  },
  {
    title: 'From Insight to Action',
    description:
      'We don’t just deliver data — we translate it into strategic recommendations you can implement with confidence.',
    image: card4,
  },
  {
    title: 'Speed, Confidentiality, & Quality',
    description:
      'Agile delivery, secure processes, and consistently reliable outcomes—all with the responsiveness your business demands.',
    image: card5,
  },
];

const stats = [
  {
    icon: <GlobeAltIcon className="w-6 h-6 text-white" />,
    label: 'Global Coverage',
    value: '200+ Countries Researched',
  },
  {
    icon: <BriefcaseIcon className="w-6 h-6 text-white" />,
    label: 'Industry Expertise',
    value: '15+ Industries Covered',
  },
  {
    icon: <UserGroupIcon className="w-6 h-6 text-white" />,
    label: 'Trusted Partner',
    value: '1,800+ Global Clients',
  },
  {
    icon: <DocumentChartBarIcon className="w-6 h-6 text-white" />,
    label: 'Comprehensive Research',
    value: '3,500+ Syndicated Reports',
  },
];

export default function WhyChooseUnivDatos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % (cards.length - 2));
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 < 0 ? cards.length - 3 : prev - 1));

  return (
    <section className="bg-white py-16 px-4 font-manrope">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#000000] mb-10 font-bricolage">
        Why Leaders Choose <span className="text-[#455488]">UnivDatos</span>
      </h2>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-[#F1F5F9] rounded-full shadow"
          >
            <ChevronLeftIcon className="w-5 h-5 text-[#09184C]" />
          </button>

          <div className="overflow-hidden flex-1 mx-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="min-w-[33.333%] px-2">
                  <div className="bg-white border rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
                    <div className="h-40 bg-gray-200 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h4 className="font-semibold text-[#09184C] mb-2 font-bricolage">
                        {card.title}
                      </h4>
                      <p className="text-[#4A5568] text-sm mb-3">
                        {card.description}
                      </p>
                      <div className="mt-auto text-[#09184C] flex items-center text-sm font-semibold font-bricolage">
                        VIEW <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-[#F1F5F9] rounded-full shadow"
          >
            <ChevronRightIcon className="w-5 h-5 text-[#09184C]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: cards.length - 2 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                activeIndex === i ? 'bg-[#09184C]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-semibold text-[#09184C] mb-2 font-bricolage">
          Need deeper Market Foresight?
        </h3>
        <p className="text-[#4A5568] mb-4">
          Let our competitive intelligence solutions drive your advantage.
        </p>
        <button className="bg-[#09184C] text-white px-6 py-2 rounded hover:bg-[#ffffff] hover:text-[#09184C] border border-[#09184C] transition font-bricolage">
          Get Started
        </button>
      </div>

      {/* Rolling Stats Banner */}
      <div className="overflow-hidden bg-[#F5F8FC] mt-16 py-6">
        <div className="whitespace-nowrap animate-scroll flex">
          {[...stats, ...stats].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white rounded-lg shadow-sm mx-4 px-6 py-4 min-w-[20rem] border border-gray-100"
            >
              <div className="bg-[#09184C] p-2 rounded-full">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-[#09184C] font-bricolage">
                  {item.label}
                </p>
                <p className="text-sm text-[#09184C] font-bold font-bricolage">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
