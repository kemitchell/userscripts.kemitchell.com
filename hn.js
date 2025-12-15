// ==UserScript==
// @name         Remove Karma from Hacker News
// @namespace    http://tampermonkey.net/
// @version      2.7
// @description  remove karma scores from Hacker News
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://news.ycombinator.com/*
// ==/UserScript==

// Remove user score.
const pagetop = document.getElementById('me').parentNode
for (const child of Array.from(pagetop.childNodes)) {
  if (
    child.nodeType !== 1 ||
    (child.id !== 'me' && child.id !== 'logout')
  ) child.remove()
}

// Add space between handle and logout link.
const logout = document.getElementById('logout')
logout.parentNode.insertBefore(document.createTextNode(' '), logout)

// Remove post scores.
document.querySelectorAll('.score').forEach(e => { e.style.display = 'none' })
