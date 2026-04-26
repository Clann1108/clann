'use client';

import { useState, useMemo } from 'react';
import Link from '@/components/SmartLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';

const allJobs = [
  { tags: ['Full-Time', 'Remote'], title: 'Senior Software Engineer', meta: ['Bangalore', '5+ Years', 'INR 18-25 LPA'], desc: 'Leading product development for a fintech unicorn. Node.js, React, AWS required.' },
  { tags: ['Contract', 'Hybrid'], title: 'DevOps Engineer', meta: ['Hyderabad', '3+ Years', 'INR 12-18 LPA'], desc: 'CI/CD pipeline management, Kubernetes, Terraform. Healthcare domain experience preferred.' },
  { tags: ['Full-Time'], title: 'Relationship Manager - BFSI', meta: ['Mumbai', '2-4 Years', 'INR 8-12 LPA'], desc: 'Corporate banking division. CA/MBA Finance preferred. Client acquisition focus.' },
  { tags: ['Full-Time', 'On-Site'], title: 'ICU Nurse - Critical Care', meta: ['Delhi NCR', '2+ Years', 'INR 5-8 LPA'], desc: 'Premium multi-specialty hospital. B.Sc Nursing with ICU certification required.' },
  { tags: ['Full-Time'], title: 'Plant Manager - Manufacturing', meta: ['Pune', '8+ Years', 'INR 20-30 LPA'], desc: 'Automotive components division. P&L ownership, Lean Six Sigma Black Belt preferred.' },
  { tags: ['Contract', 'Remote'], title: 'Data Scientist - AI/ML', meta: ['Chennai', '4+ Years', 'INR 15-22 LPA'], desc: 'Retail analytics division. Python, TensorFlow, recommendation systems experience.' },
  { tags: ['Full-Time'], title: 'VP - Human Resources', meta: ['Bangalore', '12+ Years', 'INR 35-50 LPA'], desc: 'Leading 500+ people tech organization. Strategic HR, talent acquisition, culture building.' },
  { tags: ['Contract'], title: 'SAP FICO Consultant', meta: ['Kolkata', '6+ Years', 'INR 14-20 LPA'], desc: 'S/4HANA implementation for a large manufacturing conglomerate. Immediate start.' },
];

export default function JobsPage() {
  const [jobQuery, setJobQuery] = useState('');
  const [locQuery, setLocQuery] = useState('');

  const filteredJobs = useMemo(() => {
    const jq = jobQuery.toLowerCase();
    const lq = locQuery.toLowerCase();
    return allJobs.filter((job) => {
      const matchTitle = job.title.toLowerCase().includes(jq) || job.desc.toLowerCase().includes(jq);
      const matchLoc = job.meta.some((m) => m.toLowerCase().includes(lq));
      return matchTitle && matchLoc;
    });
  }, [jobQuery, locQuery]);

  return (
    <>
      <Navbar />
      <PageHeader label="Opportunities" title="Find Your Next Role" description="Discover career opportunities across India's top companies. Upload your resume and let employers find you." />

      <section className="py-6 bg-light-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4">
            <div className="md:col-span-5">
              <input type="text" className="form-control" placeholder="Search by job title, skill, or keyword" value={jobQuery} onChange={(e) => setJobQuery(e.target.value)} />
            </div>
            <div className="md:col-span-5">
              <input type="text" className="form-control" placeholder="City or location" value={locQuery} onChange={(e) => setLocQuery(e.target.value)} />
            </div>
            <div className="md:col-span-2">
              <Link href="/contact" className="btn btn-primary w-full text-center block">Upload Resume</Link>
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-8">
              <p style={{ color: 'var(--gray-600)' }}>No jobs match your search. Try different keywords or locations.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {filteredJobs.map((job, i) => (
                <AnimatedSection key={job.title} delay={i % 2}>
                  <div className="job-card">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {job.tags.map((t) => (
                        <span key={t} className="job-tag">{t}</span>
                      ))}
                    </div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      {job.meta.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                    <p className="mt-2 mb-0" style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>{job.desc}</p>
                    <div className="mt-3 flex gap-2">
                      <Link href="/contact" className="btn btn-primary btn-sm">Apply Now</Link>
                      <Link href="/contact" className="btn btn-outline btn-sm">Refer a Friend</Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="cta-section py-6">
        <div className="container mx-auto px-4 cta-content text-center">
          <AnimatedSection>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800 }}>Don't See Your Perfect Role?</h2>
            <p className="mb-4" style={{ fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Upload your resume and our recruiters will match you with upcoming opportunities in your domain.
            </p>
            <Link href="/contact" className="btn btn-white">Upload Your Resume</Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
