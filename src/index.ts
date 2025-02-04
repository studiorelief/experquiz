import './index.css';

import { swiperBlogOthers } from '$utils/blog/swiperBlog';
import { tradMonth } from '$utils/blog/tradDate';
import { servicesCardsAnimation } from '$utils/fonctionnalites/gsapCards';
import { globalParallax } from '$utils/global/globalParallax';
import loadScript from '$utils/global/loadScript';
import { initMarker } from '$utils/global/marker';
import { svgCms } from '$utils/global/tricks';
import { heroDecoAnimation } from '$utils/home/assetLoad';
import { ctaPictoLoop, homeTextAnimation } from '$utils/home/gsapHome';
import { swiperLogoLoop } from '$utils/home/logoLoop';
import { showHomeVideoPopup } from '$utils/home/popup';
import { quizCards } from '$utils/home/quizCards';
import { calcCardPrice, calcFormPrice } from '$utils/price/priceLogic';
import { storyLineAnimation } from '$utils/qui-sommes-nous/gsapLine';
import { showTemoignagePopup, swiperTemoignagePopup } from '$utils/temoignages/popup';
import { webinairesCard } from '$utils/webinaires/webinairesCards';

window.Webflow ||= [];
window.Webflow ||= [];
window.Webflow.push(() => {
  /* 
  ! global
  */

  // Finsweet Attributes
  Promise.all([
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-rangeslider@1/rangeslider.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-richtext@1/richtext.js'),
  ]);

  // Component Navbar
  svgCms();

  // Recettage
  initMarker();

  // Cards quiz
  quizCards();

  // Parallax
  globalParallax();

  // review Masonry layout

  /*
  ! Home page
  */
  if (window.location.pathname.includes('/')) {
    swiperLogoLoop();
    showHomeVideoPopup();
    heroDecoAnimation();
    ctaPictoLoop();
    homeTextAnimation();
  }

  /*
  ! Fonctionnalités
  */
  if (window.location.pathname.includes('/fonctionnalites')) {
    servicesCardsAnimation();
  }

  /* 
  ! Témoignages 
  */
  if (window.location.pathname.includes('temoignages')) {
    swiperTemoignagePopup();
    showTemoignagePopup();
    heroDecoAnimation();
  }

  if (window.location.pathname.includes('qui-sommes-nous')) {
    storyLineAnimation();
  }

  if (window.location.pathname.includes('webinaires')) {
    webinairesCard();
  }

  /*
  ! Fonctionnalités
  */

  /* 
  ! Blog
  */
  if (window.location.pathname.includes('blog') || window.location.pathname.includes('articles')) {
    tradMonth();
    swiperBlogOthers();
  }

  /* Pricing */
  if (window.location.pathname.includes('offres-et-tarifs')) {
    calcCardPrice();
    calcFormPrice();
  }
});
