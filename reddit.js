// ==UserScript==
// @name         Streamline Reddit
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  remove scores and other cruft from Reddit
// @author       Kyle E. Mitchell
// @match        https://*.reddit.com/*
// ==/UserScript==

const selectors = [
  '.premium-banner-outer',
  '.scores'
]

for (const selector of selectors) {
  document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e))
}
