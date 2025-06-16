import React from "react";
import marketImg from "../assets/market-analysis.jpg";
import gtmImg from "../assets/go-to-market.jpg";
import customerImg from "../assets/customer-insights.jpg";
import competitiveImg from "../assets/competitive-intelligence.jpg";
import { BarChart3, Rocket, Users, LineChart } from "lucide-react";

const services = [
  {
    title: "Market Analysis",
    icon: <BarChart3 className="text-white" size={18} />,
    image: marketImg,
    points: [
      "Market sizing & forecasting",
      "Value chain analysis & regulatory scenario assessment",
      "Demand & supply analysis",
      "Competitive benchmarking & SWOT competitor analysis",
    ],
  },
  {
    title: "Go-to-Market Strategy",
    icon: <Rocket className="text-white" size={18} />,
    image: gtmImg,
    points: [
      "Best channel mix to maximize sales",
      "Competitive distribution channel analysis",
      "Potential distributor identification & due diligence",
      "Risk evaluation, barriers to entry & profitability insights",
    ],
  },
  {
    title: "Customer Insights",
    icon: <Users className="text-white" size={18} />,
    image: customerImg,
    points: [
      "Target customer identification",
      "Customer needs analysis & behavioral insights",
      "Customer segmentation analysis",
      "Brand positioning & market response evaluation",
    ],
  },
  {
    title: "Competitive Intelligence",
    icon: <LineChart className="text-white" size={18} />,
    image: competitiveImg,
    points: [
      "Competitive intelligence solutions & financial benchmarking",
      "Product, price & competitive benchmarking",
      "SWOT, PESTEL, Porter’s analysis",
      "Industry trends, technology mapping & company profiling",
    ],
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="bg-[#F6FAFF] py-16 px-4 sm:px-6 lg:px-20 font-manrope">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09184C] font-bricolage">
          What We Do for You
        </h2>
        <p className="text-sm sm:text-base mt-2 max-w-xl mx-auto text-gray-700">
          Comprehensive Market Intelligence & Strategic Planning Solutions to Drive Your Business Growth
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {["Market Research", "Strategic Planning", "Competitive Analysis", "Growth Strategy"].map((tag, i) => (
            <span
              key={i}
              className="bg-[#09184C] text-white text-xs px-3 py-1 rounded-full font-bricolage"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl"
          >
            {/* Image with Icon */}
            <div className="relative h-48 sm:h-56 md:h-60 lg:h-64">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-[#09184C] flex items-center justify-center shadow-md">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-[#09184C] font-semibold text-lg mb-4 font-bricolage">
                {service.title}
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
