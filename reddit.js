// ==UserScript==
// @name         Streamline Reddit
// @version      1.2
// @namespace    http://tampermonkey.net/
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        *://*.reddit.com/*
// ==/UserScript==

for (const selector of [
  '.score',
  '.premium-banner-outer',
  '.redesign-beta-optin'
]) {
  document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e))
}
