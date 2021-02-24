// ==UserScript==
// @name         Cleaner Foreign Policy
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  tone down styling and remove cruft
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://foreignpolicy.com/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/fp.js
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

// Remove pull quotes.
document.querySelectorAll('.pull-quote').forEach(e => {
  e.parentNode.removeChild(e)
})
