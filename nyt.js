// ==UserScript==
// @name         Streamline The New York Times
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.nytimes.com/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/nyt.js
// @run-at       document-idle
// ==/UserScript==

for (const selector of [
  '#in-story-masthead',
  '#site-index',
  '*[aria-hidden=true]',
  '*[role=complementary]',
  'footer[role=contentinfo]',
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}
