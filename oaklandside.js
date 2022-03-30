// ==UserScript==
// @name         Streamline Oaklandside
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  remove cruft
// @author       Kyle E. Mitchell
// @match        https://oaklandside.org/20*/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/oaklandside.js
// ==/UserScript==

const selectors = [
  '.sharedaddy',
  '#colophon',
  '.highlight-menu-contain',
  '.social-nav-contain',
  '.author-avatar',
  'figure.post-thumbnail',
  '.widget-area',
  '[class*=ads-widget]',
  '[class*=relatedposts]',
]

for (const selector of selectors) {
  const elements = Array.from(document.querySelectorAll(selector))
  for (const element of elements) {
    element.parentNode.removeChild(element)
  }
}

const main = document.querySelector('.main-content')
main.style.width = '100%'
main.style.color = 'black !important'
