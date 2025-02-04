export function showHomeVideoPopup() {
  // Get video trigger and popup elements
  const videoTrigger = document.querySelector('.home_hero_video-trigger');
  const popupWrapper = document.querySelector('.home_hero_popup-wrapper');
  const popupContent = document.querySelector('.home_hero_popup-content');
  const popupBackground = document.querySelector('.home_hero_popup-background');

  if (
    !(videoTrigger && popupWrapper instanceof HTMLElement && popupContent instanceof HTMLElement)
  ) {
    return;
  }

  // Show popup on trigger click
  videoTrigger.addEventListener('click', () => {
    popupWrapper.style.display = 'flex';
    popupWrapper.style.opacity = '0';
    popupContent.style.transform = 'translateY(2rem)';
    popupWrapper.style.transition = 'opacity 300ms';
    popupContent.style.transition = 'transform 300ms';

    requestAnimationFrame(() => {
      popupWrapper.style.opacity = '1';
      popupContent.style.transform = 'translateY(0)';
    });
  });

  // Hide popup on background click
  if (popupBackground) {
    popupBackground.addEventListener('click', () => {
      popupWrapper.style.transition = 'opacity 300ms';
      popupContent.style.transition = 'transform 300ms';
      popupWrapper.style.opacity = '0';
      popupContent.style.transform = 'translateY(2rem)';

      setTimeout(() => {
        popupWrapper.style.display = 'none';
      }, 300);
    });
  }
}
