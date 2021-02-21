// ==UserScript==
// @name         Remove Karma from Hacker News
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove karma scores from Hacker News
// @author       Kyle E. Mitchell
// @match        https://news.ycombinator.com/*
// @grant        none
// ==/UserScript==

// Remove user score.
const me = document.getElementById('me')
const myKarma = me.nextSibling
myKarma.parentNode.removeChild(myKarma)

// Add space between handle and logout link.
const logout = document.getElementById('logout')
logout.parentNode.insertBefore(document.createTextNode(' '), logout)

// Remove post scores.
const postScores = Array.from(document.getElementsByClassName('score'))
postScores.forEach(score => score.parentNode.removeChild(score))
