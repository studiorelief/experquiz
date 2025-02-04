export function webinairesCard(): void {
  const webinairesCards = document.querySelectorAll('.webinaires-cards_item');
  const assetLayers = document.querySelectorAll('.webinaires-cards_asset-layer');

  if (!webinairesCards.length || !assetLayers.length) return;

  webinairesCards.forEach((card, index) => {
    const observer = new MutationObserver(() => {
      if (card.classList.contains('is-active-accordion')) {
        (assetLayers[index] as HTMLElement).style.opacity = '0.2';
      } else {
        (assetLayers[index] as HTMLElement).style.opacity = '0.7';
      }
    });

    observer.observe(card, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Set initial opacity
    (assetLayers[index] as HTMLElement).style.opacity = card.classList.contains(
      'is-active-accordion'
    )
      ? '0.2'
      : '0.7';
  });
}
