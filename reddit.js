// ==UserScript==
// @name         Streamline Reddit
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  remove scores and other cruft from Reddit
// @author       Kyle E. Mitchell
// @match        https://*.reddit.com/*
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
