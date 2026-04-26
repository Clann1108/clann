'use client';

import Image from 'next/image';
import Link from '@/components/SmartLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { Heart, Shield, Zap } from 'lucide-react';

const values = [
  { icon: Heart, title: 'People First', desc: 'Every placement is a human connection. We treat candidates and clients with equal respect, empathy, and dedication.' },
  { icon: Shield, title: 'Integrity Always', desc: 'Transparent processes, honest feedback, and ethical practices form the foundation of every relationship we build.' },
  { icon: Zap, title: 'Speed & Quality', desc: "We believe fast delivery and quality outcomes aren't mutually exclusive. Our 48-hour response standard proves it." },
];

const milestones = [
  { badge: '2026', title: 'Founded in Bangalore', desc: 'Started with a vision to transform staffing in India with technology-driven recruitment.' },
  { badge: 'Q2', title: '50+ Clients Onboarded', desc: 'Rapid expansion across IT, BFSI, and Healthcare sectors with marquee clients.' },
  { badge: 'Q3', title: '50,000+ Resume Database', desc: "Built one of India's fastest-growing talent pools with multi-city sourcing coverage." },
  { badge: 'Q4', title: 'Pan-India Operations', desc: 'Launching offices in Mumbai, Hyderabad, and Delhi to serve clients nationwide.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Our Story" title="About Clann Staffing" description="Empowering careers and building organizations through human connections that matter." />

      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <Image src="/images/about-team.jpg" alt="Clann Staffing Team" width={600} height={400} className="rounded-2xl shadow-lg w-full" />
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Connecting People<br />with Purpose</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                Founded in 2026, Clann Staffing emerged from a simple belief: the right job can transform a life, and the right hire can transform a business. In a rapidly evolving Indian economy, we set out to build a staffing partner that truly understands both sides of the employment equation.
              </p>
              <p style={{ color: 'var(--gray-600)' }}>
                Today, we work with 50+ organizations across 15+ industry sectors, maintaining a database of 50,000+ qualified professionals. Our 98% client retention rate speaks to our commitment to quality over quantity.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <div className="font-bold text-navy" style={{ fontSize: '1.5rem' }}>50+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Happy Clients</div>
                </div>
                <div>
                  <div className="font-bold text-navy" style={{ fontSize: '1.5rem' }}>15+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Industry Sectors</div>
                </div>
                <div>
                  <div className="font-bold text-navy" style={{ fontSize: '1.5rem' }}>1,000+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Candidates Placed</div>
                </div>
                <div>
                  <div className="font-bold text-navy" style={{ fontSize: '1.5rem' }}>98%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Client Retention</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection>
              <span className="section-label">What Drives Us</span>
              <h2 className="section-title">Our Mission & Values</h2>
              <p className="section-desc">Guided by integrity, driven by results, and committed to every candidate and client we serve.</p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i}>
                <div className="service-card h-full">
                  <div className="icon-wrap"><v.icon size={24} strokeWidth={2} /></div>
                  <h4>{v.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection>
              <span className="section-label">Growth Story</span>
              <h2 className="section-title">Our Journey So Far</h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 justify-center">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.title} delay={i}>
                <div className="service-card text-center h-full">
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 3 ? 'var(--gradient-accent)' : 'var(--gradient-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 1rem' }}>{m.badge}</div>
                  <h5>{m.title}</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-6">
        <div className="container mx-auto px-4 cta-content text-center">
          <AnimatedSection>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800 }}>Want to Be Part of Our Story?</h2>
            <p className="mb-4" style={{ fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Whether you're looking for talent or seeking your next opportunity, we'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-white">Contact Us</Link>
              <Link href="/team" className="btn btn-outline-light">Meet the Team</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
