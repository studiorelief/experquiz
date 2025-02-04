import gsap from 'gsap';

export function heroDecoAnimation(): void {
  const allHeroDeco = document.querySelectorAll('.home_hero_deco, .services_deco');

  allHeroDeco.forEach((heroDeco) => {
    gsap.fromTo(
      heroDeco,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
      }
    );
  });
}
