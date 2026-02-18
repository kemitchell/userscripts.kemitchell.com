// ==UserScript==
// @name         Streamline Slashdot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://slashdot.org/*
// @run-at       document-idle
// ==/UserScript==

for (const selector of [
  '.nav-social',
  '.message-bar',
  '.comment-bubble'
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.remove()
  }
}
