'use client';

import Image from 'next/image';
import Link from '@/components/SmartLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import StatCounter from '@/components/StatCounter';
import { Users, FileText, Search, PenTool, Monitor, Box, Star } from 'lucide-react';

const services = [
  { icon: Users, title: 'Permanent Staffing', desc: 'Find the right full-time talent that aligns with your company culture and long-term goals. We handle end-to-end recruitment for permanent positions.', href: '/services' },
  { icon: FileText, title: 'Contract Staffing', desc: 'Scale your workforce flexibly with our contract staffing solutions. Perfect for project-based needs, seasonal demands, and temporary roles.', href: '/services' },
  { icon: Search, title: 'Executive Search', desc: 'Partner with us to find C-suite and senior leadership talent. Our executive search process is discreet, thorough, and results-driven.', href: '/services' },
  { icon: PenTool, title: 'RPO Services', desc: 'Recruitment Process Outsourcing to streamline your hiring, reduce costs, and ensure you find the right talent faster with our dedicated teams.', href: '/services' },
  { icon: Monitor, title: 'Payroll & Compliance', desc: 'End-to-end payroll management and statutory compliance. We handle PF, ESIC, taxes, and labor law adherence so you can focus on growth.', href: '/services' },
  { icon: Box, title: 'Talent Consulting', desc: 'Strategic workforce advisory to identify talent gaps, build hiring strategies, and optimize your human capital for maximum productivity.', href: '/services' },
];

const industries = [
  { img: '/images/ind-it.jpg', title: 'Information Technology', desc: 'Software, Cloud, AI/ML, Cybersecurity' },
  { img: '/images/ind-bfsi.jpg', title: 'BFSI', desc: 'Banking, Financial Services, Insurance' },
  { img: '/images/ind-healthcare.jpg', title: 'Healthcare & Pharma', desc: 'Hospitals, Life Sciences, Medical Devices' },
  { img: '/images/ind-auto.jpg', title: 'Automotive & Manufacturing', desc: 'Auto, Aerospace, Industrial Engineering' },
  { img: '/images/ind-retail.jpg', title: 'Retail & E-Commerce', desc: 'Consumer Products, Logistics, FMCG' },
];

const clientLogos = [
  'TechCorp India', 'FinServe Global', 'MediCare Plus', 'AutoTech Industries', 'BuildConstruct',
  'DataSystems', 'GreenEnergy', 'RetailMax', 'EduFirst', 'LogiTrans', 'PharmaLife', 'CloudNine',
];

const testimonials = [
  { quote: 'Clann Staffing transformed our hiring process. Within 3 weeks, they filled 12 critical tech roles that our internal team had been struggling with for months.', author: 'Rahul Mehta', role: 'CTO, TechCorp India' },
  { quote: "The team's understanding of healthcare compliance and regulatory requirements made our nursing staff expansion seamless. Highly recommended.", author: 'Dr. Priya Sharma', role: 'HR Director, MediCare Plus' },
  { quote: 'From C-suite executives to floor supervisors, Clann delivered quality candidates across all levels. Their RPO model saved us 40% in hiring costs.', author: 'Vikram Joshi', role: 'VP HR, AutoTech Industries' },
];

const processSteps = [
  { num: '01', title: 'Requirement Analysis', desc: 'Deep dive into your hiring needs, culture fit, and role specifications.' },
  { num: '02', title: 'Talent Sourcing', desc: 'Multi-channel sourcing from our 50K+ database and active market search.' },
  { num: '03', title: 'Screening & Assessment', desc: 'Rigorous interviews, skill tests, and background verification process.' },
  { num: '04', title: 'Onboarding Support', desc: 'End-to-end coordination until your new hire is productive and settled.' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-section" id="home">
        <div className="hero-bg">
          <Image src="/images/hero-bg.jpg" alt="Clann Staffing - Connecting Talent with Opportunity" fill priority style={{ objectFit: 'cover' }} />
        </div>
        <div className="container mx-auto px-4 hero-content py-24 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="hero-badge">
                  <Star size={16} fill="currentColor" />
                  India's Leading Staffing Partner
                </div>
                <h1 className="hero-title">Connecting Talent<br />with <span className="accent-word">Opportunity</span></h1>
                <p className="hero-desc">
                  We bridge the gap between exceptional talent and forward-thinking organizations across India. With 50,000+ active resumes and 1,000+ successful placements, your success is our mission.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/jobs" className="btn btn-accent">Explore Jobs</Link>
                  <Link href="/services" className="btn btn-outline-light">Our Services</Link>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-5">
              <AnimatedSection delay={2}>
                <div className="search-card">
                  <h3>Find Your Dream Job</h3>
                  <div className="mb-3">
                    <label className="form-label">Job Title / Keywords</label>
                    <input type="text" className="form-control" placeholder="e.g. Software Engineer" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" placeholder="e.g. Bangalore, Mumbai" />
                  </div>
                  <Link href="/jobs" className="btn btn-primary w-full mb-3 block text-center">Search Jobs</Link>
                  <div className="grid grid-cols-3 text-center gap-2 pt-2 border-t" style={{ borderColor: 'var(--gray-200)' }}>
                    <div>
                      <div className="font-bold text-navy">50+</div>
                      <small className="text-muted" style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>Happy Clients</small>
                    </div>
                    <div>
                      <div className="font-bold text-navy">50K+</div>
                      <small className="text-muted" style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>Active Resumes</small>
                    </div>
                    <div>
                      <div className="font-bold text-navy">1,000+</div>
                      <small className="text-muted" style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>Placements</small>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-4 bg-light-custom border-b" style={{ borderColor: 'var(--gray-200)' }}>
        <div className="container mx-auto px-4">
          <p className="text-center mb-3" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gray-400)' }}>
            Trusted by Leading Organizations
          </p>
          <div className="marquee-container overflow-hidden">
            <div className="marquee-track">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="client-logo">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <AnimatedSection>
              <div className="stat-item">
                <div className="stat-number"><StatCounter target={50} suffix="+" /></div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <div className="stat-item">
                <div className="stat-number"><StatCounter target={50000} suffix="+" /></div>
                <div className="stat-label">Active Resumes</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <div className="stat-item">
                <div className="stat-number"><StatCounter target={1000} suffix="+" /></div>
                <div className="stat-label">Candidates Placed</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <div className="stat-item">
                <div className="stat-number"><StatCounter target={15} suffix="+" /></div>
                <div className="stat-label">Industry Sectors</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-6 bg-light-custom" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection>
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Our Services</h2>
              <p className="section-desc">
                Comprehensive staffing solutions tailored to meet your unique business requirements, from contingent workforce to executive leadership.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i % 3}>
                <div className="service-card">
                  <div className="icon-wrap">
                    <s.icon size={24} strokeWidth={2} />
                  </div>
                  <h4>{s.title}</h4>
                  <p className="mb-3" style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>{s.desc}</p>
                  <Link href={s.href} className="text-decoration-none font-semibold" style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
                    Read More &rarr;
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-5">
            <AnimatedSection>
              <Link href="/services" className="btn btn-primary">View All Services</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-6" id="industries">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection>
              <span className="section-label">Sectors We Cover</span>
              <h2 className="section-title">Industries We Serve</h2>
              <p className="section-desc">
                Deep domain expertise across diverse industry verticals. We understand the unique talent needs of every sector we serve.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
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
              <div className="industry-card" style={{ background: 'var(--gradient-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => window.location.href = '/industries.html'}>
                <div className="text-center text-white p-4">
                  <h4 className="text-white mb-2">+10 More</h4>
                  <p className="mb-3" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Energy, Telecom, Education, Real Estate & more</p>
                  <span className="btn btn-white btn-sm">View All Industries</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <span className="section-label">Why Clann Staffing</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Empowering Careers,<br />Building Organizations</h2>
              <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                Founded in 2026, Clann Staffing is India's premier staffing and recruitment agency. We specialize in connecting exceptional talent with forward-thinking organizations across multiple industries.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0" style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(0,74,173,0.08), rgba(255,117,31,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h6 className="font-bold mb-1" style={{ color: 'var(--navy)' }}>98% Client Retention Rate</h6>
                    <p className="mb-0" style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Our commitment to quality and service excellence keeps clients coming back year after year.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0" style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(0,74,173,0.08), rgba(255,117,31,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h6 className="font-bold mb-1" style={{ color: 'var(--navy)' }}>48 Hours Average Response</h6>
                    <p className="mb-0" style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>We understand urgency. Our streamlined processes ensure rapid candidate delivery.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0" style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(0,74,173,0.08), rgba(255,117,31,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h6 className="font-bold mb-1" style={{ color: 'var(--navy)' }}>Pan-India Presence</h6>
                    <p className="mb-0" style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>From metro cities to Tier-2 towns, we source the best talent from every corner of India.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <Image src="/images/about-team.jpg" alt="Clann Staffing Team" width={600} height={400} className="rounded-2xl shadow-lg w-full" style={{ borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection>
              <span className="section-label">How We Work</span>
              <h2 className="section-title">Our Recruitment Process</h2>
              <p className="section-desc">A streamlined, four-step process designed for efficiency and quality in every placement.</p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i}>
                <div className="process-step">
                  <div className="step-num">{step.num}</div>
                  <h5>{step.title}</h5>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AnimatedSection>
              <span className="section-label">Client Stories</span>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-desc">Building lasting partnerships through exceptional service and successful placements.</p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i}>
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>{t.quote}</p>
                  <p className="author">{t.author}</p>
                  <p className="role">{t.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-6">
        <div className="container mx-auto px-4 cta-content text-center">
          <AnimatedSection>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800 }}>Ready to Build Your Dream Team?</h2>
            <p className="mb-4" style={{ fontSize: '1.1rem', maxWidth: 560, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Get in touch and let's reimagine your workforce strategy together. Whether you're hiring one role or building an entire team.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-white">Contact Us</Link>
              <Link href="/jobs" className="btn btn-outline-light">View Open Positions</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
