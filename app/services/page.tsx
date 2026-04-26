'use client';

import Link from '@/components/SmartLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { Users, FileText, Search, PenTool, Monitor, Box, Check } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Permanent Staffing',
    desc: 'Find the right full-time talent that aligns with your company culture and long-term goals. We manage the entire recruitment lifecycle from sourcing to onboarding, ensuring every hire is a perfect fit for your organization.',
    features: ['End-to-end recruitment management', 'Culture-fit assessment & interviews', 'Background verification & onboarding'],
  },
  {
    icon: FileText,
    title: 'Contract Staffing',
    desc: 'Scale your workforce flexibly with our contract staffing solutions. Perfect for project-based needs, seasonal demands, and temporary roles requiring immediate deployment with full compliance coverage.',
    features: ['Rapid deployment within 48 hours', 'Full statutory compliance (PF/ESIC)', 'Contract-to-hire conversion options'],
  },
  {
    icon: Search,
    title: 'Executive Search',
    desc: 'Discreet, thorough, and results-driven executive search for C-suite and senior leadership roles. We identify visionary leaders aligned with your culture who can drive transformational growth.',
    features: ['CXO & Board-level search', 'Confidential talent mapping', 'Leadership assessment & due diligence'],
  },
  {
    icon: PenTool,
    title: 'RPO Services',
    desc: 'End-to-end Recruitment Process Outsourcing to streamline your hiring operations. Our dedicated teams manage sourcing, screening, interviews, and offer management as an extension of your HR.',
    features: ['Dedicated hiring teams on-site/off-site', 'SLA-driven delivery models', 'Real-time reporting & analytics'],
  },
  {
    icon: Monitor,
    title: 'Payroll & Compliance',
    desc: 'Comprehensive payroll outsourcing and statutory compliance management. We handle PF, ESIC, professional tax, TDS, and all labor law requirements so you remain fully protected.',
    features: ['Error-free payroll processing', '100% statutory compliance', 'Self-service portals & MIS reports'],
  },
  {
    icon: Box,
    title: 'HR Consulting & Talent Advisory',
    desc: 'Strategic workforce advisory to identify talent gaps, build hiring roadmaps, and optimize your human capital. From policy formulation to DE&I strategies, we provide expert guidance.',
    features: ['Workforce planning & analytics', 'Compensation benchmarking', 'DE&I strategy & implementation'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Solutions" title="Our Services" description="End-to-end workforce solutions designed to help you hire better, faster, and smarter across every stage of talent acquisition." />

      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i % 2}>
                <div className="service-card h-full flex flex-col">
                  <div className="icon-wrap"><s.icon size={24} strokeWidth={2} /></div>
                  <h4>{s.title}</h4>
                  <p className="flex-grow-1" style={{ color: 'var(--gray-600)' }}>{s.desc}</p>
                  <ul className="list-none mb-0 mt-3" style={{ fontSize: '0.85rem' }}>
                    {s.features.map((f) => (
                      <li key={f} className="mb-2 flex items-center gap-2" style={{ color: 'var(--gray-600)' }}>
                        <Check size={14} style={{ color: 'var(--primary)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-6">
        <div className="container mx-auto px-4 cta-content text-center">
          <AnimatedSection>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800 }}>Not Sure Which Service Fits?</h2>
            <p className="mb-4" style={{ fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Our experts will analyze your hiring needs and recommend the perfect staffing solution tailored to your goals.
            </p>
            <Link href="/contact" className="btn btn-white">Schedule a Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
