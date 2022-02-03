// ==UserScript==
// @name         Streamline Substack
// @namespace    http://tampermonkey.net/
// @version      5.2
// @description  remove various cruft from Substack pages
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://*.substack.com/p/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/substack.js
// ==/UserScript==

const toRemove = [
  '.post-footer', // social media &c.
  '.body.markup > .captioned-image-container:first-child',
  '.footer-wrap',
  '.single-post-section', // comments and recommendations
  '.container ~ div',
  '.main-menu',
]

for (const selector of toRemove) {
  const elements = document.querySelectorAll(selector)
  for (const element of Array.from(elements)) {
    element.parentNode.removeChild(element)
  }
}
