/* Clann Staffing - Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar-custom');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Job search filter (for jobs page)
  const jobSearchInput = document.getElementById('jobSearch');
  const locationInput = document.getElementById('locationSearch');
  const jobCards = document.querySelectorAll('.job-card');

  function filterJobs() {
    const query = (jobSearchInput?.value || '').toLowerCase();
    const loc = (locationInput?.value || '').toLowerCase();
    jobCards.forEach(card => {
      const title = card.querySelector('.job-title')?.textContent.toLowerCase() || '';
      const meta = card.querySelector('.job-meta')?.textContent.toLowerCase() || '';
      const match = title.includes(query) && meta.includes(loc);
      card.style.display = match ? 'block' : 'none';
    });
  }

  if (jobSearchInput) jobSearchInput.addEventListener('input', filterJobs);
  if (locationInput) locationInput.addEventListener('input', filterJobs);
});
