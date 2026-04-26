'use client';

import Link from '@/components/SmartLink';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
          <div className="col-span-2 lg:col-span-4">
            <h4 className="text-white mb-3" style={{ fontWeight: 800 }}>
              Clann <span style={{ color: 'var(--accent)' }}>Staffing</span>
            </h4>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>
              India's premier staffing and recruitment partner, connecting exceptional talent with forward-thinking organizations since 2026.
            </p>
            <div className="mt-3 flex gap-2">
              <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h5>Services</h5>
            <Link href="/services">Permanent Staffing</Link>
            <Link href="/services">Contract Staffing</Link>
            <Link href="/services">Executive Search</Link>
            <Link href="/services">Payroll Services</Link>
            <Link href="/services">HR Consulting</Link>
          </div>
          <div className="lg:col-span-2">
            <h5>Industries</h5>
            <Link href="/industries">Information Technology</Link>
            <Link href="/industries">BFSI</Link>
            <Link href="/industries">Healthcare</Link>
            <Link href="/industries">Automotive</Link>
            <Link href="/industries">Retail</Link>
            <Link href="/industries">Manufacturing</Link>
          </div>
          <div className="lg:col-span-2">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/team">Leadership Team</Link>
            <Link href="/jobs">Open Jobs</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Upload Resume</Link>
          </div>
          <div className="lg:col-span-2">
            <h5>Contact</h5>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Head Office</strong><br />
              401, Brigade Towers,<br />
              MG Road, Bangalore,<br />
              Karnataka 560001<br /><br />
              <a href="mailto:info@clannstaffing.com">info@clannstaffing.com</a>
              <a href="tel:+918012345678">+91 80 1234 5678</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom flex flex-wrap justify-between items-center">
          <p className="mb-0">&copy; 2026 Clann Staffing. All Rights Reserved.</p>
          <div className="flex gap-3">
            <a href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
