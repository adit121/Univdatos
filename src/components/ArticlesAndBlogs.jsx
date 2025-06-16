import React from 'react';
import chart1 from '../assets/blog1.jpg';
import chart2 from '../assets/blog2.jpg';
import chart3 from '../assets/blog3.jpg';
import chart4 from '../assets/blog4.jpg';
import chart5 from '../assets/blog5.jpg';

const articles = [
  {
    title: 'Global Healthcare Analytics Market Trends 2024',
    category: 'Industry Reports',
    summary:
      'Comprehensive analysis of the healthcare analytics market, including key drivers, challenges, and growth opportunities across different regions.',
    date: 'Mar 15, 2024',
    image: chart1,
  },
  {
    title: 'Renewable Energy Market Outlook 2024-2030',
    category: 'Market Forecasts',
    date: 'Mar 10, 2024',
    image: chart2,
  },
  {
    title: 'The Rise of AI in Financial Services',
    category: 'Trend Analysis',
    date: 'Mar 3, 2024',
    image: chart3,
  },
  {
    title: 'E-commerce Growth in Emerging Markets',
    category: 'Industry Reports',
    date: 'Mar 5, 2024',
    image: chart4,
  },
  {
    title: 'Sustainable Manufacturing: New Paradigms',
    category: 'Trend Analysis',
    date: 'Mar 2, 2024',
    image: chart5,
  },
];

export default function ArticlesAndBlogs() {
  return (
    <section className="bg-[#F8FAFC] py-16 px-4 font-manrope">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#000000] mb-2 font-bricolage">
          Our Articles and Blogs
        </h2>
        <p className="text-center text-[#4A5568] mb-10 font-manrope">
          Insightful articles delivering knowledge, trends, and ideas
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* First large article */}
          <div className="md:col-span-1 bg-white rounded-lg overflow-hidden shadow-sm">
            <img src={articles[0].image} alt={articles[0].title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-xs text-blue-600 font-medium mb-1 font-bricolage">{articles[0].category}</p>
              <h3 className="font-semibold text-[#09184C] leading-snug font-bricolage">{articles[0].title}</h3>
              <p className="text-sm text-[#4A5568] mt-2 font-manrope">{articles[0].summary}</p>
              <div className="mt-4 flex justify-between text-sm text-[#64748B] font-manrope">
                <span>{articles[0].date}</span>
                <a href="#" className="text-sm text-[#455488] font-semibold hover:underline font-bricolage">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Right side smaller cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {articles.slice(1).map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <p className="text-xs text-blue-600 font-medium mb-1 font-bricolage">{item.category}</p>
                  <h4 className="font-semibold text-[#09184C] text-sm leading-tight mb-1 font-bricolage truncate">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex justify-between text-sm text-[#64748B] font-manrope">
                    <span>{item.date}</span>
                    <a href="#" className="text-sm text-[#] font-semibold hover:underline font-bricolage">
                      Read →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
