// ==UserScript==
// @name         Streamline Медиазона
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://zona.media/*
// @run-at       document-idle
// ==/UserScript==

for (const selector of [
  '.mz-agent-banner', // иноагент
  '.mz-header-themes',
  '.tools'
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.remove()
  }
}
