// ==UserScript==
// @name         Cleaner Foreign Affairs
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  remove cruft
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://foreignaffairs.com/*
// @grant        BlueOak-1.0.0
// ==/UserScript==

// Remove "Stay informed" ads.
document
  .querySelectorAll('.article-newsletter-signup--container')
  .forEach((e) => {
    e.parentNode.removeChild(e)
  })

// Dismiss cookie notice.
try {
  document.querySelector('.messages--container--bottom button.close').click()
} catch (error) {
  // Pass.
}
