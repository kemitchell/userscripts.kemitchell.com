// ==UserScript==
// @name         Streamline Медуза
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @include      https://meduza.io/*
// @grant        BlueOak-1.0.0
// @run-at       document-idle
// ==/UserScript==

for (const selector of [
  '.Layout-bannerTop', // e-mail subscribe banner
  '.SaveMeduza-root', // donation banner
  '.donates-teaser' // donation banner
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}
