import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Creates a scroll trigger animation for the CTA section
 * Scales the background from 1 to 1.2 as the user scrolls from top to bottom of the section
 */
export function ctaAnimation(): void {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Select the elements
  const ctaSection = document.querySelector('.section_offres_cta');
  const ctaBackground = document.querySelector('.offres_cta_background');

  // Check if elements exist before creating the animation
  if (ctaSection && ctaBackground) {
    // Create the scroll trigger animation
    gsap.fromTo(
      ctaBackground,
      { scale: 1 },
      {
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: ctaSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      }
    );
  }
}
