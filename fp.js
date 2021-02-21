// ==UserScript==
// @name         Cleaner Foreign Policy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kyle E. Mitchell
// @match        https://foreignpolicy.com/*
// @grant        BlueOak-1.0.0
// ==/UserScript==

// Remove thick HR styling.
document.querySelectorAll('.thick-horizontal-rule').forEach(e => {
  e.className = ''
})

// Remove bold first line styling.
document.querySelectorAll('.bolded-first-line').forEach(e => {
  e.className = ''
})

// Remove Read More sections.
document.querySelectorAll('.fp-related-wrapper').forEach(e => {
  e.parentNode.removeChild(e)
})
