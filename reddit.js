// ==UserScript==
// @name         Remove Karma from Reddit
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove karma scores from Reddit
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://*.reddit.com/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/reddit.js
// ==/UserScript==

document.querySelectorAll('.score').forEach((e) => e.parentNode.removeChild(e))
