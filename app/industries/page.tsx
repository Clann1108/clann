'use client';

import Image from 'next/image';
import Link from '@/components/SmartLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { Shield, Zap, Users, PieChart } from 'lucide-react';

const industries = [
  { img: '/images/ind-it.jpg', title: 'Information Technology', desc: 'Software Engineering, Cloud, DevOps, AI/ML, Data Science, Cybersecurity, Product Management' },
  { img: '/images/ind-bfsi.jpg', title: 'BFSI', desc: 'Banking Operations, Risk & Compliance, Investment Banking, Insurance, Fintech, Wealth Management' },
  { img: '/images/ind-healthcare.jpg', title: 'Healthcare & Pharma', desc: 'Doctors, Nurses, Medical Devices, Clinical Research, Life Sciences, Hospital Administration' },
  { img: '/images/ind-auto.jpg', title: 'Automotive & Manufacturing', desc: 'Auto Engineering, Aerospace, Industrial Design, Supply Chain, Quality Assurance, Plant Operations' },
  { img: '/images/ind-retail.jpg', title: 'Retail & E-Commerce', desc: 'Store Operations, Digital Marketing, Supply Chain, Merchandising, Customer Experience, Logistics' },
];

const capabilities = [
  { icon: Shield, title: 'Compliance Ready', desc: 'Industry-specific regulatory and compliance knowledge for every placement.' },
  { icon: Zap, title: 'Speed to Hire', desc: 'Pre-qualified talent pools reduce time-to-fill by up to 60% in every sector.' },
  { icon: Users, title: 'Niche Specialists', desc: 'Dedicated recruiters with deep vertical expertise in your specific industry.' },
  { icon: PieChart, title: 'Market Intelligence', desc: 'Real-time salary benchmarks, talent trends, and competitive insights per sector.' },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Sectors We Cover" title="Industries We Serve" description="Deep domain expertise across diverse industry verticals. We align perfectly with your industry needs." />

      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i % 3}>
                <div className="industry-card">
                  <Image src={ind.img} alt={ind.title} fill style={{ objectFit: 'cover' }} />
                  <div className="overlay">
                    <h4>{ind.title}</h4>
                    <p>{ind.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={2}>
              <div className="industry-card" style={{ background: 'linear-gradient(135deg,#004aad,#020c45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="text-center text-white p-4">
                  <h4 className="text-white mb-3">More Industries</h4>
                  <p className="mb-3" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                    Telecom & Media<br />Energy & Utilities<br />Real Estate & Construction<br />Education & EdTech<br />FMCG & Consumer Goods
                  </p>
                  <Link href="/contact" className="btn btn-accent btn-sm">Discuss Your Sector</Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection>
              <span className="section-label">Capabilities</span>
              <h2 className="section-title">Industry-Specific Hiring Expertise</h2>
              <p className="section-desc">We don't just fill roles. We understand the technical skills, regulatory frameworks, and cultural nuances that make each industry unique.</p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i}>
                <div className="service-card text-center">
                  <div className="icon-wrap mx-auto"><cap.icon size={24} strokeWidth={2} /></div>
                  <h5>{cap.title}</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>{cap.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-6">
        <div className="container mx-auto px-4 cta-content text-center">
          <AnimatedSection>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800 }}>Need Talent in Your Industry?</h2>
            <p className="mb-4" style={{ fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Our industry specialists are ready to discuss your unique hiring challenges and build a tailored strategy.
            </p>
            <Link href="/contact" className="btn btn-white">Talk to an Industry Expert</Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
