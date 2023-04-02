// ==UserScript==
// @name         Remove Scores from Reddit
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  remove scores from Reddit
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://*.reddit.com/*
// @grant        BlueOak-1.0.0
// @downloadUR   https://userscripts.kemitchell.com/reddit.js
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
  for (const score of document.querySelectorAll('.score')) {
    score.parentNode.removeChild(score)
  }
})
