// ==UserScript==
// @name         Remove Karma from Lobste.rs
// @namespace    http://tampermonkey.net/
// @version      2.4
// @description  remove karma scores from Lobste.rs
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://lobste.rs/*
// ==/UserScript==

// Remove user score.
const link = document.querySelector('a[href="/settings"]')
link.innerText = 'Settings'

// Remove post scores.
document.querySelectorAll('.score').forEach((e) => e.remove())
