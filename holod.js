// ==UserScript==
// @name         Streamline Холод
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://holod.media/20*/**/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/holod.js
// ==/UserScript==

for (const selector of [
  '.engb',
  '.sitenav__social',
  '.article__sharing',
  '.article_footer',
  '.article_footer',
  '.site-footer',
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}
