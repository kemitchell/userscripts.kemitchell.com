// ==UserScript==
// @name         Remove Karma from Lobste.rs
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  remove karma scores from Lobste.rs
// @author       Kyle E. Mitchell
// @match        https://lobste.rs/*
// @grant        none
// @updateURL    https://userscripts.kemitchell.com/lobsters.js
// ==/UserScript==

// Remove user score.
const link = document.querySelector('a[href="/settings"]')
link.innerText = 'Settings'

// Remove post scores.
document.querySelectorAll('.score').forEach(e => e.parentNode.removeChild(e))
