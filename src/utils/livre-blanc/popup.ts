export function showLivreBlancPopup() {
  // Get trigger and popup elements
  const livreBlancTriggers = document.querySelectorAll('.livre-blanc_component');
  const formSection = document.querySelector('.section_livre-blanc_form');
  const formBackground = document.querySelector('.livre-blanc_form_background');
  const formRetourButton = document.querySelector('.form_text-retour');

  if (!(livreBlancTriggers.length && formSection instanceof HTMLElement)) {
    return;
  }

  const hideForm = () => {
    formSection.style.transition = 'opacity 300ms, transform 300ms';
    formSection.style.opacity = '0';
    formSection.style.transform = 'translateY(2rem)';

    setTimeout(() => {
      formSection.style.display = 'none';
    }, 300);
  };

  // Show form on trigger click for all triggers
  livreBlancTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      formSection.style.display = 'flex';
      formSection.style.opacity = '0';
      formSection.style.transform = 'translateY(2rem)';
      formSection.style.transition = 'opacity 300ms, transform 300ms';

      requestAnimationFrame(() => {
        formSection.style.opacity = '1';
        formSection.style.transform = 'translateY(0)';
      });
    });
  });

  // Hide form on background click
  if (formBackground) {
    formBackground.addEventListener('click', hideForm);
  }

  // Hide form on return button click
  if (formRetourButton) {
    formRetourButton.addEventListener('click', hideForm);
  }
}
