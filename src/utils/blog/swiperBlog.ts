import 'swiper/css';

import { Swiper } from 'swiper';
import { Mousewheel } from 'swiper/modules';

export function swiperBlogOthers() {
  const swiperContainers = document.querySelectorAll('.swiper.is-blog');

  swiperContainers.forEach((container) => {
    new Swiper(container as HTMLElement, {
      modules: [Mousewheel],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      autoHeight: true,
      centeredSlides: true,
      spaceBetween: 30,
      speed: 500,
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
}
