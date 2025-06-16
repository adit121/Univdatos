import React from "react";
import {
  ChartBarIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import bgImage from "../assets/hero-bg.jpg";
import insightGraph from "../assets/insight-graph.jpg";

const MarketIntelligenceHero = () => {
  return (
    <div className="w-full font-manrope">
      {/* Top Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-6xl font-bold leading-tight uppercase font-bricolage">
            Market Intelligence for <br /> Forward-Thinking Businesses
          </h1>
          <p className="mt-6 text-lg max-w-2xl">
            Unlock strategic insights with our comprehensive analysis and
            data-driven approach to navigate today’s complex business landscape.
          </p>
          <button className="mt-8 bg-[#09184C] text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#09184C] transition font-manrope">
            REQUEST A CONSULTATION
          </button>
        </div>
      </div>

      <div className="h-12" />

      {/* Bottom Section */}
      <div className="flex min-h-[700px]">
        {/* Left Panel */}
        <div className="w-1/2 bg-[#09184C] text-white p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold uppercase font-bricolage">
            Real-Time Market Intelligence
          </h2>
          <h3 className="mt-4 text-2xl font-semibold font-bricolage">
            Stay Ahead with Strategic Market Insights
          </h3>
          <p className="mt-6 text-sm max-w-lg leading-relaxed">
            In today’s fast-moving, competitive markets, informed decisions
            can’t wait. Market Intelligence helps uncover trends, spot risks
            early, and unlock growth opportunities.
          </p>

          <div className="flex items-center mt-8">
            <div className="bg-white text-[#09184C] text-2xl font-bold p-4 rounded-full font-bricolage">
              72%
            </div>
            <p className="ml-4 text-sm max-w-sm">
              of companies now invest in real-time market-intelligence solutions to sharpen strategy.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Trend Monitoring",
              "Customer Insights",
              "Market Research Reports",
              "Market-Data Platforms",
            ].map((tag, index) => (
              <span key={index} className="bg-[#243A75] px-4 py-1 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Bullet List with Icons */}
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#09184C] mr-3">
                <ChartBarIcon className="w-5 h-5" />
              </div>
              Uncover Market Trends
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#09184C] mr-3">
                <ExclamationTriangleIcon className="w-5 h-5" />
              </div>
              Spot Risks Early
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#09184C] mr-3">
                <ArrowTrendingUpIcon className="w-5 h-5" />
              </div>
              Unlock Growth Opportunities
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 relative overflow-hidden min-h-[700px] flex items-center">
          <img
            src={insightGraph}
            alt="Insight Graph"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

          <div className="relative z-10 mx-12 mt-20 bg-white bg-opacity-95 rounded-xl shadow-lg p-6 text-[#09184C]">
            <h4 className="font-bold text-xl mb-2 font-bricolage">The UnivDatos Advantage</h4>
            <p className="text-sm mb-6">
              We turn complex data into clear, actionable insights — so you can lead with confidence.
            </p>

            <div className="bg-[#09184C] text-white text-2xl font-bold py-4 px-6 rounded mb-6 text-center font-bricolage">
              Stay Ahead in a Rapidly Changing Market
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-100 p-4 rounded shadow">
                <div className="font-semibold text-[#09184C] font-bricolage">
                  Trend Monitoring
                </div>
                <p>Stay ahead of market shifts with real-time trend analysis</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <div className="font-semibold text-[#09184C] font-bricolage">
                  Competitive Intelligence
                </div>
                <p>Understand competitor strategies and market positioning</p>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-700">
              At UnivDatos, we turn complex data into clear, actionable insights — so you can lead with confidence in today’s fast-moving, competitive markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketIntelligenceHero;
