// ==UserScript==
// @name         Remove Karma from Hacker News
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  remove karma scores from Hacker News
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://news.ycombinator.com/*
// ==/UserScript==

// Remove user score.
try {
  const me = document.getElementById('me')
  const myKarma = me.nextSibling
  myKarma.parentNode.removeChild(myKarma)
} catch (error) {
  // Pass.
}

// Add space between handle and logout link.
try {
  const logout = document.getElementById('logout')
  logout.parentNode.insertBefore(document.createTextNode(' '), logout)
} catch (error) {
  // Pass.
}

// Remove post scores.
document.querySelectorAll('.score').forEach((e) => e.parentNode.removeChild(e))
