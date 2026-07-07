/* Krishna Techroot Logistics — Main JS */

(function () {
  'use strict';

  // Sticky header
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  let scrollPos = 0;

  function setMenuOpen(open) {
    if (!toggle || !mobileNav) return;
    mobileNav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
    if (open) {
      scrollPos = window.scrollY;
      document.body.style.top = `-${scrollPos}px`;
    } else {
      document.body.style.top = '';
      window.scrollTo(0, scrollPos);
    }
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      setMenuOpen(!mobileNav.classList.contains('open'));
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        setMenuOpen(false);
      }
    });
  }

  // Scroll animations
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // Stat counters
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  } else {
    counters.forEach(el => {
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();