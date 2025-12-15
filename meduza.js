// ==UserScript==
// @name         Streamline Медуза
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://meduza.io/*
// @run-at       document-idle
// ==/UserScript==

for (const selector of [
  '.Layout-bannerTop', // e-mail subscribe banner
  '.SaveMeduza-root', // donation banner
  '.donates-teaser' // donation banner
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.remove()
  }
}
