'use client';

import { useState } from 'react';
import Link from '@/components/SmartLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <PageHeader label="Reach Out" title="Contact Us" description="Whether you're hiring or seeking your next opportunity, we'd love to hear from you." />

      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-8">
              <AnimatedSection>
                <div className="card-glass p-4 lg:p-5">
                  <h3 className="mb-4" style={{ color: 'var(--navy)', fontWeight: 700 }}>Send Us a Message</h3>
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="mb-3" style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--gradient-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <h4 style={{ color: 'var(--navy)', fontWeight: 700 }}>Thank You!</h4>
                      <p style={{ color: 'var(--gray-600)' }}>We will contact you within 48 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" placeholder="John" required />
                        </div>
                        <div>
                          <label className="form-label">Upload Resume</label>
                          <input type="file" className="form-control" required />
                        </div>
                        <div>
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" placeholder="Doe" required />
                        </div>
                        <div>
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-control" placeholder="john@example.com" required />
                        </div>
                        <div>
                          <label className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                        </div>
                        <div>
                          <label className="form-label">I am a</label>
                          <select className="form-control">
                            <option>Job Seeker</option>
                            <option>Employer / Hiring Manager</option>
                            <option>HR Professional</option>
                            <option>Partner</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="form-label">Interested In</label>
                          <select className="form-control">
                            <option>Permanent Staffing</option>
                            <option>Contract Staffing</option>
                            <option>Executive Search</option>
                            <option>RPO Services</option>
                            <option>Payroll & Compliance</option>
                            <option>HR Consulting</option>
                            <option>Upload Resume</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="form-label">Message</label>
                          <textarea className="form-control" rows={4} placeholder="Tell us about your requirements..."></textarea>
                        </div>
                        <div className="md:col-span-2">
                          <button type="submit" className="btn btn-primary w-full">Submit Enquiry</button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-4">
              <AnimatedSection delay={1}>
                <div className="flex flex-col gap-4">
                  <div className="service-card">
                    <div className="icon-wrap"><MapPin size={22} strokeWidth={2} /></div>
                    <h5>Head Office</h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>401, Brigade Towers<br />MG Road, Bangalore<br />Karnataka 560001</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrap"><Mail size={22} strokeWidth={2} /></div>
                    <h5>Email Us</h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>info@clannstaffing.com<br />careers@clannstaffing.com</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrap"><Phone size={22} strokeWidth={2} /></div>
                    <h5>Call Us</h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>+91 80 1234 5678<br />+91 80 8765 4321</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrap"><Clock size={22} strokeWidth={2} /></div>
                    <h5>Working Hours</h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-6">
        <div className="container mx-auto px-4 cta-content text-center">
          <AnimatedSection>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800 }}>Prefer to Talk Directly?</h2>
            <p className="mb-4" style={{ fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Schedule a 15-minute discovery call with one of our staffing specialists. No obligations, just insights.
            </p>
            <a href="tel:+918012345678" className="btn btn-white">Call +91 80 1234 5678</a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
