// ==UserScript==
// @name         Nicks Boots
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://nicksboots.com/shop/shop-all-boots/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/nicksboots.js
// ==/UserScript==

const selectors = [
  '.page-wrapper > div.page-main',
  '.page-wrapper .category-view'
]

for (const selector of selectors) {
  document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e))
}
