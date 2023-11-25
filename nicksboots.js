// ==UserScript==
// @name         Nicks Boots
// @version      1.6
// @description  remove some elements
// @namespace    http://tampermonkey.net/
// @match        https://nicksboots.com/shop/shop-all-boots/*
// ==/UserScript==

(function () {
  for (const selector of ['div.page-main', '.category-view']) {
    for (const element of document.querySelectorAll(selector)) {
      element.parentNode.removeChild(element)
    }
  }
})()
