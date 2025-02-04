import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

// Initialize Swiper for testimonials
export function swiperTemoignagePopup() {
  const swiperContainers = document.querySelectorAll('.swiper.is-temoignages');

  swiperContainers.forEach((container) => {
    // Destroy existing swiper instance if it exists
    const existingSwiper = (container as Element & { swiper?: Swiper }).swiper;
    if (existingSwiper) {
      existingSwiper.destroy(true, true);
    }

    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      speed: 1500,
      //   mousewheel: {
      //     forceToAxis: true,
      //     invert: false,
      //     axis: 'x',
      //   },
      navigation: {
        nextEl: '#temoignage-right',
        prevEl: '#temoignage-left',
      },
    });
  });
}

export function showTemoignagePopup() {
  // Get all testimonial cards
  const temoignageCards = document.querySelectorAll('.temoignages-cards_component');

  temoignageCards.forEach((card) => {
    // Add click handler to each card
    card.addEventListener('click', () => {
      const cardName = card.getAttribute('card');
      const popupWrapper = document.querySelector('.temoignages-cards_popup-wrapper');

      if (popupWrapper instanceof HTMLElement) {
        // Reinitialize Swiper before showing the popup
        swiperTemoignagePopup();

        // Find the matching popup slide
        const matchingSlide = document.querySelector(
          `.temoignages-inner_component[popup="${cardName}"]`
        );

        if (matchingSlide) {
          // Get the swiper instance
          const swiperInstance = (matchingSlide.closest('.swiper') as Element & { swiper?: Swiper })
            ?.swiper;

          if (swiperInstance) {
            // Find the index of the matching slide
            const slideIndex = Array.from(swiperInstance.slides).findIndex((slide) =>
              (slide as Element).querySelector(`[popup="${cardName}"]`)
            );

            // Navigate to the correct slide
            if (slideIndex !== -1) {
              swiperInstance.slideTo(slideIndex);
            }
          }
        }

        // Show the popup
        popupWrapper.style.display = 'block';
        popupWrapper.style.position = 'fixed';
        popupWrapper.style.zIndex = '2';
        popupWrapper.style.opacity = '0';
        popupWrapper.style.transition = 'opacity 300ms';
        requestAnimationFrame(() => {
          popupWrapper.style.opacity = '1';
        });
      }
    });
  });

  // Get all popup backgrounds
  const popupBackgrounds = document.querySelectorAll('.temoignages-cards_popup-background');

  popupBackgrounds.forEach((popupBackground) => {
    // Add click handler to each background
    popupBackground.addEventListener('click', () => {
      const popupWrapper = document.querySelector('.temoignages-cards_popup-wrapper');
      if (popupWrapper instanceof HTMLElement) {
        popupWrapper.style.transition = 'opacity 300ms';
        popupWrapper.style.opacity = '0';
        setTimeout(() => {
          popupWrapper.style.display = 'none';
          popupWrapper.style.position = 'relative';
          popupWrapper.style.zIndex = '0';
        }, 200);
      }
    });
  });
}
