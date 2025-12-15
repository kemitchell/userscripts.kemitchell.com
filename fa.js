// ==UserScript==
// @name         Cleaner Foreign Affairs
// @namespace    http://tampermonkey.net/
// @version      2.4
// @description  remove cruft
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://foreignaffairs.com/*
// ==/UserScript==

// Remove "Stay informed" ads.
document
  .querySelectorAll('.article-newsletter-signup--container')
  .forEach((e) => {
    e.remove()
  })

// Dismiss cookie notice.
try {
  document.querySelector('.messages--container--bottom button.close').click()
} catch (error) {
  // Pass.
}
