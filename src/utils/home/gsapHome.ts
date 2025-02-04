import gsap from 'gsap';

export function ctaPictoLoop(): void {
  const pictoWrapper = document.querySelector('.home_cta_picto-wrapper');

  if (!pictoWrapper) return;

  gsap.to(pictoWrapper, {
    rotation: 360,
    duration: 15,
    repeat: -1,
    ease: 'none',
  });
}

export function homeTextAnimation(): void {
  const textWrapper = document.querySelector('.hero_heading-full-wrapper');
  const texts = [
    '.hero_heading.is-custom-hero.is-1',
    '.hero_heading.is-custom-hero.is-2',
    '.hero_heading.is-custom-hero.is-3',
    '.hero_heading.is-custom-hero.is-4',
  ];

  if (!textWrapper) return;

  // Hide all texts initially
  gsap.set(texts, {
    opacity: 0,
    y: 20,
  });

  // Create timeline for text animation
  const tl = gsap.timeline({
    repeat: -1,
  });

  // Animate each text in sequence
  texts.forEach((text) => {
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
    }).to(text, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      delay: 1.5,
      ease: 'power2.in',
    });
  });
}
