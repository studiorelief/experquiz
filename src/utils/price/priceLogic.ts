// Helper function to round to 2 decimal places
function round2(num: number): number {
  return Math.round(num * 100) / 100;
}

export function calcCardPrice() {
  // Get range slider value element
  const rangeSlideNumber = document.querySelector('.offres_rangeslide_number');
  const silverPriceElement = document.querySelector('.offres_module_cards-price-silver');
  const goldPriceElement = document.querySelector('.offres_module_cards-price-gold');

  if (!rangeSlideNumber || !silverPriceElement || !goldPriceElement) return;

  // Pricing parameters
  const annualPricing = {
    p1: 0.856,
    p2: 0.46,
    nx: 0.000867518373667015,
    chunk: 18,
  };

  function updatePrices() {
    // Get number of users from range slider and remove spaces
    const numUsers = parseInt(
      (rangeSlideNumber as HTMLElement)?.textContent?.replace(/\s+/g, '') || '0'
    );

    // Calculate base price using formula
    const basePrice =
      ((annualPricing.p1 - annualPricing.p2) * Math.exp(-annualPricing.nx * (numUsers - 1)) +
        annualPricing.p2) *
      annualPricing.chunk;

    // Calculate silver and gold prices
    const silverPrice = round2(basePrice + 0.005);
    const goldPrice = round2(basePrice * 1.3 + 0.005);

    // Update price elements
    if (silverPriceElement instanceof HTMLElement) {
      silverPriceElement.textContent = silverPrice.toFixed(2);
    }

    if (goldPriceElement instanceof HTMLElement) {
      goldPriceElement.textContent = goldPrice.toFixed(2);
    }
  }

  // Initial price calculation
  updatePrices();

  // Update prices when range slider value changes
  const observer = new MutationObserver(updatePrices);
  observer.observe(rangeSlideNumber, { childList: true, characterData: true, subtree: true });
}

export function calcFormPrice() {
  // Initialize admin fields to 1
  document.querySelector('#gold-administrateur-nb')?.setAttribute('value', '1');
  document.querySelector('#silver-administrateur-nb')?.setAttribute('value', '1');

  // Pricing parameters
  const modePricing = {
    month: { p1: 0.856, p2: 0.46, nx: 0.0004624063913, chunk: 6.5 },
    annual: { p1: 0.856, p2: 0.46, nx: 0.000867518373667015, chunk: 18 },
  };

  function calculerTotaux(formule: 'gold' | 'silver') {
    // Get form values
    const adminNb = Number(
      (document.querySelector(`#${formule}-administrateur-nb`) as HTMLInputElement)?.value || 0
    );
    const licencesMensuellesNb = Number(
      (document.querySelector(`#${formule}-licences-mensuelles-nb`) as HTMLInputElement)?.value || 0
    );
    const licencesAnnuellesNb = Number(
      (document.querySelector(`#${formule}-licences-annuelles-nb`) as HTMLInputElement)?.value || 0
    );

    // Calculate coefficient based on formula type
    const coeffMode = formule === 'gold' ? 1.3 : 1;

    // Calculate monthly and yearly prices
    let prixMensuel = 5.57;
    let prixAnnuel = 15.41;

    if (licencesMensuellesNb >= 0) {
      const pricing = modePricing.month;
      prixMensuel = round2(
        ((pricing.p1 - pricing.p2) * Math.exp(-pricing.nx * (licencesMensuellesNb - 1)) +
          pricing.p2) *
          pricing.chunk *
          coeffMode +
          0.005
      );
    }

    if (licencesAnnuellesNb >= 0) {
      const pricing = modePricing.annual;
      prixAnnuel = round2(
        ((pricing.p1 - pricing.p2) * Math.exp(-pricing.nx * (licencesAnnuellesNb - 1)) +
          pricing.p2) *
          pricing.chunk *
          coeffMode +
          0.005
      );
    }

    // Calculate D10 and admin price
    let D10 = prixAnnuel;
    if (licencesAnnuellesNb + licencesMensuellesNb > 0) {
      const nbAnnual = licencesAnnuellesNb + (licencesMensuellesNb * 6.5) / 18;
      const totalPrice = prixAnnuel * licencesAnnuellesNb + prixMensuel * licencesMensuellesNb;
      D10 = totalPrice / nbAnnual;
    }

    // Calculate totals
    const prixUnitAdmin = Math.ceil(D10 * 3);
    const totalAdmin = round2(prixUnitAdmin * adminNb);
    const totalMensuel = round2(prixMensuel * licencesMensuellesNb);
    const totalAnnuel = round2(prixAnnuel * licencesAnnuellesNb);
    const grandTotal = Math.round(Math.max(100, totalAdmin + totalMensuel + totalAnnuel));

    // Update DOM
    document.querySelector(`#${formule}-administrateur-punit`)!.textContent =
      prixUnitAdmin.toString();
    document.querySelector(`#${formule}-licences-mensuelles-punit`)!.textContent =
      round2(prixMensuel).toFixed(2);
    document.querySelector(`#${formule}-licences-annuelles-punit`)!.textContent =
      round2(prixAnnuel).toFixed(2);

    document.querySelector(`#${formule}-administrateur-ptotal`)!.textContent =
      totalAdmin.toFixed(0);
    document.querySelector(`#${formule}-licences-mensuelles-ptotal`)!.textContent =
      totalMensuel.toFixed(0);
    document.querySelector(`#${formule}-licences-annuelles-ptotal`)!.textContent =
      totalAnnuel.toFixed(0);
    document.querySelector(`#${formule}-great-total`)!.textContent = grandTotal.toString();
  }

  function syncInputs(sourceId: string, targetId: string) {
    const sourceInput = document.querySelector(`#${sourceId}`) as HTMLInputElement;
    const targetInput = document.querySelector(`#${targetId}`) as HTMLInputElement;

    if (sourceInput && targetInput) {
      targetInput.value = sourceInput.value;
    }
  }

  // Add sync listeners for each pair of fields
  ['administrateur-nb', 'licences-mensuelles-nb', 'licences-annuelles-nb'].forEach((field) => {
    // Sync from gold to silver
    document.querySelector(`#gold-${field}`)?.addEventListener('input', () => {
      syncInputs(`gold-${field}`, `silver-${field}`);
      calculerTotaux('gold');
      calculerTotaux('silver');
    });

    // Sync from silver to gold
    document.querySelector(`#silver-${field}`)?.addEventListener('input', () => {
      syncInputs(`silver-${field}`, `gold-${field}`);
      calculerTotaux('gold');
      calculerTotaux('silver');
    });
  });

  // Calcul initial
  calculerTotaux('gold');
  calculerTotaux('silver');
}
