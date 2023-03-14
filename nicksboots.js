// ==UserScript==
// @name         Nicks Boots
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://nicksboots.com/shop/shop-all-boots/*
// @grant        BlueOak-1.0.0
// @downloadURL  https://userscripts.kemitchell.com/nicksboots.js
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
  const selectors = [
    'div.page-main',
    '.category-view'
  ]

  for (const selector of selectors) {
    document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e))
  }
})
