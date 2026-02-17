// ==UserScript==
// @name         Streamline Amazon
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.amazon.com/*
// ==/UserScript==

for (const selector of [
  '[id*=-amazons-choice]',
  '[id*=DELIGHT_PRICING_]',
  '.s-coupon-component',
  '#BEST_SELLER'
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.remove()
  }
}
