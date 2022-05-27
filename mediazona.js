// ==UserScript==
// @name         Streamline Медиазона
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @include      https://media.zone/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/mediazona.js
// @downloadURL  https://userscripts.kemitchell.com/mediazona.js
// @run-at       document-idle
// ==/UserScript==

for (const selector of [
  '.mz-agent-banner', // иноагент
  '.tools'
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}
