// ==UserScript==
// @name         Streamline Reddit
// @version      1.1
// @namespace    http://tampermonkey.net/
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        *://*.reddit.com/*
// ==/UserScript==

(function () {
  const selectors = [
    '.score',
    '.premium-banner-outer',
    '.redesign-beta-optin'
  ]
  for (const selector of selectors) {
    document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e))
  }
})()
