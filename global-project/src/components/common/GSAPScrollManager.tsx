'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const GSAPScrollManager: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Accessibility check: Do not animate if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Scope GSAP animations for clean cleanup on unmount
    const ctx = gsap.context(() => {
      // 1. Samsung-Style Section Scroll Entrance & Exit
      const sections = document.querySelectorAll<HTMLElement>('section:not(.no-gsap)');

      sections.forEach((section) => {
        // Subtle fade-up on scroll entrance and gentle exit fade on scroll-out
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );

        // 2. Staggered Elements for Cards & Grids
        const cards = section.querySelectorAll<HTMLElement>(
          '.gsap-card, .group'
        );
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
};

export default GSAPScrollManager;
