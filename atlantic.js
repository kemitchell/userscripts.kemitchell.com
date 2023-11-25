// ==UserScript==
// @name         Streamline The Atlantic
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  remove cruft
// @author       Kyle E. Mitchell
// @match        https://www.theatlantic.com/*
// ==/UserScript==

setTimeout(() => {
  for (const selector of [
    '[class*=injected-recirculation-link-]',
    '[class*=ArticleBentoRecirc]',
    '[class*=ArticleRelatedContentModule]',
    '[class*=ArticleMostPopular]',
    '[class*=SubOnlyPromo]',
    '[class*=ArticleLeadArt]',
    '[class*=ArticleRelatedContentLink]'
  ]) {
    for (const element of Array.from(document.querySelectorAll(selector))) {
      element.parentNode.removeChild(element)
    }
  }
}, 2000)
