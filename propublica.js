// ==UserScript==
// @name         Streamline ProPublica
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  remove promo and other cruft
// @author       Kyle E. Mitchell
// @match        https://www.propublica.org/article/*
// @grant        BlueOak-1.0.0
// ==/UserScript==

const selectors = [
  '.promo',
  '.most-read',
  '.site-header',
  '.opener figure',
  '.share-tools',
  '.article-footer',
  '.site-footer',
  '.bb-image',
  '.bb-callout',
  '[class*=section-actions]',
  '[class*=promo-]',
]

for (const selector of selectors) {
  const elements = Array.from(document.querySelectorAll(selector))
  for (const element of elements) {
    element.parentNode.removeChild(element)
  }
}
