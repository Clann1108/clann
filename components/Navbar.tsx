'use client';

import { useEffect, useState } from 'react';
import Link from '@/components/SmartLink';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar-custom fixed-top w-full z-50 top-0 left-0 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="navbar-brand">
          Clann <span>Staffing</span>
        </Link>
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`${mobileOpen ? 'block' : 'hidden'} lg:block navbar-collapse`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:mx-auto gap-2 lg:gap-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link block ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col lg:flex-row gap-2 mt-3 lg:mt-0 lg:ml-4">
            <Link href="/contact" className="btn btn-primary btn-sm text-center">
              Upload Resume
            </Link>
            <Link href="/contact" className="btn btn-accent btn-sm text-center">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
