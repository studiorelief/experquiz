export function quizCards() {
  // Get all quiz cards with visible true icons
  const visibleIconCards = document.querySelectorAll('.quiz-card-small_features-icon-true');

  visibleIconCards.forEach((card) => {
    // Find the corresponding false icon in the same parent element
    const falseIcon = card.parentElement?.querySelector('.quiz-card-small_features-icon-false');

    if (falseIcon && getComputedStyle(card).display !== 'none') {
      // Hide the false icon if true icon is visible
      (falseIcon as HTMLElement).style.display = 'none';
    }
  });
}
