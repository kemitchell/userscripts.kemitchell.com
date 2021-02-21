// ==UserScript==
// @name         Remove Karma from Lobste.rs
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove karma scores from Lobste.rs
// @author       Kyle E. Mitchell
// @match        https://lobste.rs/*
// @grant        none
// ==/UserScript==

// Remove user score.
const link = document.querySelector('a[href="/settings"]');
link.innerText = 'Settings';

// Remove post scores.
const scores = Array.from(document.getElementsByClassName('score'));
scores.forEach(score => score.parentNode.removeChild(score));
