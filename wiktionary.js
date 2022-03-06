// ==UserScript==
// @name         Streamline Wiktionary
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://ru.wiktionary.org/wiki/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/wiktionary.js
// ==/UserScript==

for (const selector of [
  '#toc',
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}
