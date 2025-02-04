import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function globalParallax(): void {
  // Top small parallax
  const topSmallElements = document.querySelectorAll('[gsap-parallax="top-small"]');
  topSmallElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '-1rem',
      },
      {
        y: '1rem',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // Bottom small parallax
  const bottomSmallElements = document.querySelectorAll('[gsap-parallax="bottom-small"]');
  bottomSmallElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '1rem',
      },
      {
        y: '-1rem',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // Top medium parallax
  const topMediumElements = document.querySelectorAll('[gsap-parallax="top-medium"]');
  topMediumElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '-2rem',
      },
      {
        y: '2rem',
        scrollTrigger: {
          markers: false,
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // Bottom medium parallax
  const bottomMediumElements = document.querySelectorAll('[gsap-parallax="bottom-medium"]');
  bottomMediumElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '2rem',
      },
      {
        y: '-2rem',
        scrollTrigger: {
          markers: false,
          trigger: element,
          start: ' bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // Top big parallax
  const topBigElements = document.querySelectorAll('[gsap-parallax="top-big"]');
  topBigElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '-3rem',
      },
      {
        y: '3rem',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // Bottom big parallax
  const bottomBigElements = document.querySelectorAll('[gsap-parallax="bottom-big"]');
  bottomBigElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '3rem',
      },
      {
        y: '-3rem',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}
