// ==UserScript==
// @name         Remove Karma from Lobste.rs
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  remove karma scores from Lobste.rs
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://lobste.rs/*
// @grant        BlueOak-1.0.0
// ==/UserScript==

// Remove user score.
const link = document.querySelector('a[href="/settings"]')
link.innerText = 'Settings'

// Remove post scores.
document.querySelectorAll('.score').forEach((e) => e.parentNode.removeChild(e))
