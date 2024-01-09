// ==UserScript==
// @name         Streamline Холод
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://holod.media/20*/**/*
// @run-at       document-idle
// ==/UserScript==

for (const s of [
  '.engb',
  '.sitenav__social',
  '.article__sharing',
  '.article_footer',
  '.article_footer',
  '.site-footer'
]) document.querySelectorAll(s).forEach(e => e.parentNode.removeChild(e))
