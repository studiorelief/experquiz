import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function storyLineAnimation(): void {
  const line = document.querySelector('.about_story_line-active');
  const trigger = document.querySelector('.about_story_line');

  if (!line || !trigger) return;

  const rounds = document.querySelectorAll('.about_story_round');

  if (window.matchMedia('(min-width: 768px)').matches) {
    gsap.fromTo(
      line,
      {
        height: '0%',
      },
      {
        height: '100%',
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          markers: false,
          trigger: trigger,
          start: '25% 100%',
          end: '25% 0%',
          scrub: true,
        },
      }
    );
  }

  rounds.forEach((round) => {
    gsap.fromTo(
      round,
      {
        scale: 0.8,
        background: 'white',
      },
      {
        scale: 1,
        opacity: 1,
        background: 'var(--background-color--background-red)',
        border: '2px solid transparent',
        scrollTrigger: {
          markers: false,
          trigger: round,
          start: '25% 75%',
          end: '25% 75%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  });
}
