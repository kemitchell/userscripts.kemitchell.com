// ==UserScript==
// @name         Reddit
// @namespace    http://tampermonkey.net/
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
