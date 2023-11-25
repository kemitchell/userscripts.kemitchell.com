// ==UserScript==
// @name         Streamline Reddit
// @version      1.0
// @namespace    http://tampermonkey.net/
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        *://*.reddit.com/*
// @grant        BlueOak-1.0.0
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
