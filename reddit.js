// ==UserScript==
// @name         Streamline Reddit
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  remove scores and other cruft from Reddit
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://*.reddit.com/*
// @grant        BlueOak-1.0.0
// @downloadUR   https://userscripts.kemitchell.com/reddit.js
// ==/UserScript==

const selectors = [
  '.premium-banner-outer',
  '.scores'
]

for (const selector of selectors) {
  const elements = Array.from(document.querySelectorAll(selector))
  for (const element of elements) {
    element.parentNode.removeChild(element)
  }
}
