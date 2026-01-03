// ==UserScript==
// @name         Streamline AP News
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://apnews.com/*
// ==/UserScript==

for (const selector of [
  '.PageListRightRailA',
  '.AudioEnhancement',
  '.ap-comments',
  '.app-button-container',
  '.Advertisement'
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.remove()
  }
}
