/**
 * Controls the visibility of elements based on URL language path
 *
 * Elements with the following attributes will be hidden accordingly:
 * - visibility="hide-en": Hidden when URL contains "/en"
 * - visibility="hide-es": Hidden when URL contains "/es"
 * - visibility="hide-all": Hidden when URL contains "/en" or "/es"
 */
export function controlVisibility(): void {
  // Function to check and apply visibility rules
  const applyVisibilityRules = (): void => {
    const currentUrl = window.location.pathname;
    const isEnglish = currentUrl.includes('/en');
    const isSpanish = currentUrl.includes('/es');

    // Select all elements with visibility attributes
    const hideEnElements = document.querySelectorAll('[visibility="hide-en"]');
    const hideEsElements = document.querySelectorAll('[visibility="hide-es"]');
    const hideAllElements = document.querySelectorAll('[visibility="hide-all"]');

    // Apply display rules based on URL
    hideEnElements.forEach((element) => {
      (element as HTMLElement).style.display = isEnglish ? 'none' : '';
    });

    hideEsElements.forEach((element) => {
      (element as HTMLElement).style.display = isSpanish ? 'none' : '';
    });

    hideAllElements.forEach((element) => {
      (element as HTMLElement).style.display = isEnglish || isSpanish ? 'none' : '';
    });
  };

  // Apply rules immediately
  applyVisibilityRules();

  // Set up listener for URL changes (for SPA navigation)
  const observer = new MutationObserver(() => {
    applyVisibilityRules();
  });

  // Observe changes to the URL (by monitoring the body)
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Also listen for popstate events (browser back/forward)
  window.addEventListener('popstate', applyVisibilityRules);
}
