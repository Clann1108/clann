'use client';

import Image from 'next/image';
import Link from '@/components/SmartLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';

const team = [
  { img: '/images/team-1.jpg', name: 'Priya Reddy', role: 'Founder & CEO' },
  { img: '/images/team-2.jpg', name: 'Vikram Sharma', role: 'Co-Founder & COO' },
  { img: '/images/team-3.jpg', name: 'Arjun Mehta', role: 'Director - Technology Hiring' },
  { img: '/images/team-4.jpg', name: 'Neha Gupta', role: 'Director - HR Consulting' },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="The People" title="Our Leadership Team" description="Experienced professionals committed to transforming the staffing landscape in India." />

      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i}>
                <div className="team-card">
                  <Image src={member.img} alt={member.name} width={400} height={280} style={{ objectFit: 'cover', width: '100%', height: 280 }} />
                  <div className="team-info">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
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
              <span className="section-label">Join Us</span>
              <h2 className="section-title">Want to Join Our Team?</h2>
              <p className="section-desc">We're always looking for passionate recruiters, consultants, and operations professionals who believe in the power of human connections.</p>
              <Link href="/contact" className="btn btn-primary">View Careers at Clann</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="cta-section py-6">
        <div className="container mx-auto px-4 cta-content text-center">
          <AnimatedSection>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800 }}>Let's Build Something Great Together</h2>
            <p className="mb-4" style={{ fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Have a question or want to discuss your staffing needs? Our team is ready to help.
            </p>
            <Link href="/contact" className="btn btn-white">Get In Touch</Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
