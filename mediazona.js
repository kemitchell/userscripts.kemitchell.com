// ==UserScript==
// @name         Streamline Медиазона
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @include      https://zona.media/*
// @grant        BlueOak-1.0.0
// @run-at       document-idle
// ==/UserScript==

for (const selector of [
  '.mz-agent-banner', // иноагент
  '.mz-header-themes',
  '.tools'
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}
