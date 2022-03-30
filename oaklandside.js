// ==UserScript==
// @name         Streamline Oaklandside
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove cruft
// @author       Kyle E. Mitchell
// @match        https://oaklandside.org/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/oaklandside.js
// ==/UserScript==

const selectors = [
  '.sharedaddy',
  '.colophon',
  'figure.post-thumbnail',
  'aside.secondary',
  '[class*=relatedposts]',
]

for (const selector of selectors) {
  const elements = Array.from(document.querySelectorAll(selector))
  for (const element of elements) {
    element.parentNode.removeChild(element)
  }
}
