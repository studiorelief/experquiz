/* replace p by svg code for Component icons */
export function svgCms() {
  document.querySelectorAll('[p-cms="svg-code"]').forEach((element) => {
    const svgCode = element.textContent;
    if (svgCode !== null) {
      element.innerHTML = svgCode;
    }
  });
}
export function hideDynListIfEmpty() {
  // Find all dynamic lists with if-empty="hide" attribute
  const dynLists = document.querySelectorAll('.w-dyn-list[if-empty="hide"]');

  dynLists.forEach((list) => {
    // Check if list has empty state
    const isEmpty = list.querySelector('.w-dyn-empty') !== null;

    // If list is empty, hide it
    if (isEmpty && list instanceof HTMLElement) {
      list.style.display = 'none';
    }
  });
}

// remove "fs-cmsstatic-element=list" on mobile for page "A propos"
export function removeStaticListAProposMobile() {
  if (window.innerWidth < 991) {
    const list = document.querySelector('[fs-cmsstatic-element="list"]');
    if (list instanceof HTMLElement) {
      list.removeAttribute('fs-cmsstatic-element');
    }
  }
}
