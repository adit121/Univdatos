import React from 'react';
import solarImage from '../assets/case1.jpg';
import stadiumImage from '../assets/case2.jpg';
import circuitImage from '../assets/case3.jpg';

const caseStudies = [
  {
    image: solarImage,
    title: 'Market Expansion Assessment in Floating Solar Sector',
    subtitle: 'Unlocking growth opportunities in Asia-Pacific through market intelligence and strategic benchmarking.',
    overview: `A leading renewable energy company wanted to expand into the floating photovoltaic solar sector in Asia-Pacific. UnivDatos conducted an in-depth market study to identify key regions, pricing trends, and risks. By analyzing successful projects and industry benchmarks, we provided clear, data-driven insights to support their expansion strategy and long-term growth.`,
    tags: ['Market Sizing', 'Competitive Benchmarking', 'Risk & Sensitivity Analysis', 'Pricing Strategy'],
  },
  {
    image: stadiumImage,
    title: 'Assessing Promotional Investment Effectiveness',
    subtitle: 'Measuring brand communication impact and optimizing ad recall for a fintech client.',
    overview: `A fintech client partnered with UnivDatos to assess the effectiveness of their promotional campaign in the Indian Premier League (IPL). Through a structured survey approach, we evaluated advertisement visibility, recall, brand association, and audience perception. These insights helped strengthen communication strategies and maximize advertising returns.`,
    tags: ['Ad Recall Analysis', 'Brand Linkage Measurement', 'Market Perception Assessment'],
  },
  {
    image: circuitImage,
    title: 'Strategic Sourcing & Cost Reduction',
    subtitle: 'Auto Manufacturer | 38% Cost Savings',
    overview: `Localized brake system components in India, achieving 38% cost reduction through strategic cost modeling and supplier negotiation. Identified major cost gaps, onboarded a high-quality supplier, and ensured full compliance with QCD and safety standards.`,
    tags: ['Cost Modeling', 'Supplier Negotiation', 'Quality Compliance', 'Strategic Sourcing'],
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-16 px-4 font-manrope">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#000000] mb-2 font-bricolage">
        Case Studies
      </h2>
      <p className="text-center text-[#4A5568] mb-10 max-w-2xl mx-auto font-manrope">
        Explore how real-world research delivers measurable strategic impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#09184C] mb-1 line-clamp-2 font-bricolage">
                  {study.title}
                </h3>
                <p className="text-[#4A5568] text-sm mb-1 font-manrope">{study.subtitle}</p>
                <p className="text-sm text-gray-700 mb-3 font-manrope">
                  <strong className="font-semibold">Brief Overview</strong><br />
                  {study.overview}
                </p>
                <p className="text-sm text-[#09184C] font-medium mb-1 font-manrope">Key Services Involved:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-[#09184C] text-white text-xs px-2 py-1 rounded-full font-bricolage"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="self-start text-xs font-medium px-3 py-1.5 rounded border border-[#09184C] bg-[#09184C] text-white hover:bg-white hover:text-[#09184C] transition font-bricolage"
              >
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
