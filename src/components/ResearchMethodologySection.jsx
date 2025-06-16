import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentMagnifyingGlassIcon,
  ChartBarIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  TrophyIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import frame1 from '../assets/FRAME.png';
import frame2 from '../assets/FRAME (1).png';
import frame3 from '../assets/FRAME (2).png';
import frame4 from '../assets/FRAME (3).png';
import frame5 from '../assets/FRAME (4).png';
import frame6 from '../assets/FRAME (5).png';
import frame7 from '../assets/FRAME (6).png';
import frame0 from '../assets/FRAME (7).png';

const icons = [
  DocumentMagnifyingGlassIcon,
  ChartBarIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  TrophyIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
];

const images = [
  frame0,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
];

const steps = [
  {
    step: 'STEP 1',
    title: 'Define Scope & Objectives',
    description:
      'We collaborate closely with clients to clarify business objectives, target markets, relevant geographies, and key research questions...',
    tags: ['Business Goals', 'Target Markets', 'Key Questions'],
    footer: 'Project Scope + Clear Objectives',
  },
  {
    step: 'STEP 2',
    title: 'Secondary Research & Data Procurement',
    description:
      'We gather data from industry reports, proprietary databases, and public datasets. This phase identifies data gaps and areas for primary research.',
    tags: ['Data Collection', 'Gap Analysis'],
    footer: 'Comprehensive Data Collection',
  },
  {
    step: 'STEP 3',
    title: 'Primary Research & Expert Validation',
    description:
      'We conduct expert interviews, surveys, and focus groups to validate and enrich insights gathered from secondary sources.',
    tags: ['Expert Interviews', 'Surveys'],
    footer: 'Strategic Market Segmentation',
  },
  {
    step: 'STEP 4',
    title: 'Data Analysis & Segmentation',
    description:
      'We cleanse and analyze all data for consistency and build segmented insights for each target market and buyer persona.',
    tags: ['Analyzed Data'],
    footer: 'Market Segmentation & Analysis',
  },
  {
    step: 'STEP 5',
    title: 'Market Sizing & Forecasting',
    description:
      'Using top-down and bottom-up models, we estimate the Total Addressable Market (TAM) and segment potential with scenario-based forecasting.',
    tags: ['Base', 'Optimistic', 'Conservative'],
    footer: 'Scenario-Based Market Forecasting',
  },
  {
    step: 'STEP 6',
    title: 'Competitive Intelligence & Benchmarking',
    description:
      'We assess competitor offerings, pricing, distribution, and strategy to benchmark best practices and opportunities for differentiation.',
    tags: ['Competitive Analysis', 'Benchmarking'],
    footer: 'Strategic Differentiation',
  },
  {
    step: 'STEP 7',
    title: 'Insights Synthesis & Strategic Recommendations',
    description:
      'We combine findings into a strategic narrative, linking customer needs, market dynamics, and competitor insights...',
    tags: ['Pricing Models', 'Market Entry'],
    footer: 'Prioritized Strategic Recommendations',
  },
  {
    step: 'STEP 8',
    title: 'Quality Assurance & Final Deliverable',
    description:
      'Every assumption is cross-verified. Final reports are polished, clear, and structured for executive use.',
    tags: ['Validation', 'Executive Ready'],
    footer: 'Quality-Assured Final Deliverables',
  },
];

export default function ResearchMethodologySection() {
  const swiperRef = useRef();

  return (
    <section className="relative py-20 bg-[#F5F8FC] overflow-hidden font-manrope">
      {/* Quote Banner */}
      <div className="max-w-8xl mx-auto mb-12 px-4">
        <div className="bg-gradient-to-r from-black to-[#09184C] text-white px-8 py-10 rounded-xl shadow-lg text-base md:text-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <span className="text-3xl font-bold text-white font-bricolage">“</span>
          <p className="text-center flex-1 leading-relaxed">
            Our market intelligence capabilities have empowered clients across sectors such as renewable energy and fintech to confidently enter emerging markets, optimize product portfolios, and strengthen their competitive edge—delivering measurable growth and strategic advantage.
          </p>
          <span className="text-3xl font-bold text-white font-bricolage">”</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#000000] mb-4 font-bricolage">
          Our Research Methodology
        </h2>
        <p className="text-[#4A5568] max-w-3xl mx-auto">
          At UnivDatos, we blend advanced data techniques with domain expertise to deliver insights
          that are clear, credible, and decision-ready. Our multi-layered approach ensures strategic
          depth, analytical accuracy, and business impact.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Arrows */}
        <button
          className="absolute z-10 top-1/2 left-0 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <ArrowLeftIcon className="h-5 w-5 text-[#09184C]" />
        </button>
        <button
          className="absolute z-10 top-1/2 right-0 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <ArrowRightIcon className="h-5 w-5 text-[#09184C]" />
        </button>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <Swiper
            ref={swiperRef}
            slidesPerView={1.2}
            spaceBetween={20}
            loop
            simulateTouch
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4 },
            }}
          >
            {steps.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <SwiperSlide key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="h-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="h-5 w-5 text-[#09184C]" />
                      <span className="text-xs font-semibold text-[#09184C] font-bricolage">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#09184C] mb-2 font-bricolage">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 font-manrope">{step.description}</p>
                    <img
                      src={images[idx]}
                      alt={`Step ${idx + 1} visual`}
                      className="w-full h-auto mb-3 rounded-md"
                    />
                    <div className="flex flex-wrap gap-2 mb-3">
                      {step.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-gray-100 text-gray-800 px-2 py-1 rounded-full font-bricolage"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-gray-400 font-manrope">{step.footer}</p>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mt-16 bg-gradient-to-r from-[#09184C] to-black rounded-xl text-white px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-1 font-bricolage">
            Looking To Sharpen Your Market Insights?
          </h3>
          <p className="text-sm text-gray-200 font-manrope">
            Contact us to unlock insights that drive smarter decisions and create sustainable competitive advantage.
          </p>
        </div>
        <button className="bg-white text-[#09184C] font-semibold text-sm px-6 py-2 rounded-md shadow hover:bg-gray-100 transition font-bricolage">
          Contact us
        </button>
      </div>
    </section>
  );
}
