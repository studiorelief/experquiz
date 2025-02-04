export function tradMonth() {
  const monthElements = document.querySelectorAll('.is-date');
  const monthTranslations: { [key: string]: string } = {
    January: 'Janvier',
    February: 'Février',
    March: 'Mars',
    April: 'Avril',
    May: 'Mai',
    June: 'Juin',
    July: 'Juillet',
    August: 'Août',
    September: 'Septembre',
    October: 'Octobre',
    November: 'Novembre',
    December: 'Décembre',
  };

  monthElements.forEach((element) => {
    const text = element.textContent ? element.textContent.trim() : '';

    // Split text into words and translate any months found
    const words = text.split(' ');
    const translatedWords = words.map((word) => {
      return monthTranslations[word] || word;
    });

    element.textContent = translatedWords.join(' ');
  });
}
