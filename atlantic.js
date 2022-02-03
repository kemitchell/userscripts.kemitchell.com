// ==UserScript==
// @name         Streamline The Atlantic
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  remove cruft
// @author       Kyle E. Mitchell
// @match        https://www.theatlantic.com/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/atlantic.js
// ==/UserScript==

setTimeout(() => {
  console.log('streamlining...')
  for (const selector of [
    '[class*=injected-recirculation-link-]',
    '[class*=ArticleBentoRecirc]',
  ]) {
    for (const element of Array.from(document.querySelectorAll(selector))) {
      element.parentNode.removeChild(element)
    }
  }
}, 2000)
