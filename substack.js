// ==UserScript==
// @name         Streamline Substack
// @namespace    http://tampermonkey.net/
// @version      4
// @description  remove various cruft from Substack pages
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://*.substack.com/p/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/substack.js
// ==/UserScript==

setTimeout(() => {
  const toRemove = [
    '.post-footer', // social media &c.
    '.footer-wrap',
    '.single-post-section', // comments and recommendations
    '.main-menu'
  ]
  for (const selector of toRemove) {
    const elements = document.querySelectorAll(selector)
    for (const element of Array.from(elements)) {
      element.parentNode.removeChild(element)
    }
  }
}, 3000)
