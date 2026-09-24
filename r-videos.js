// ==UserScript==
// @name         /r/videos Fader
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  fade out entries from disfavored sources
// @author       Kyle E. Mitchell
// @match        https://old.reddit.com/r/videos/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// ==/UserScript==

(() => {
  const substrings = ['MS NOW', '@msnow', 'TMZ', 'youtube.com/@CNN'].map(t => t.toLowerCase())
  for (const e of document.querySelectorAll('.thing .domain a[href]')) {
    if (substrings.some(s => e.innerText.toLowerCase().includes(s))) {
      e.closest('.thing').style.opacity = 0.3
    }
  }
})()
