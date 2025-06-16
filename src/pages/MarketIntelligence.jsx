import Header from '../components/Header'
import MarketIntelligenceHero from '../components/MarketIntelligenceHero'
import WhatWeDoSection from '../components/WhatWeDoSection'
import ResearchMethodologySection from '../components/ResearchMethodologySection'
import MarketResearchSection from '../components/MarketResearchSection'
import WhyChooseUnivDatos from '../components/WhyChooseUnivDatos'
import CaseStudies from '../components/CaseStudies'
import ArticlesAndBlogs from '../components/ArticlesAndBlogs'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'
export default function MarketIntelligence() {
  return (
    <div className="w-full">
      <Header />
      <MarketIntelligenceHero />
      <WhatWeDoSection />
      <ResearchMethodologySection />
      <MarketResearchSection />
      <WhyChooseUnivDatos />
      <CaseStudies />
      <ArticlesAndBlogs />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
