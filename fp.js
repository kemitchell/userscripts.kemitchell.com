// ==UserScript==
// @name         Cleaner Foreign Policy
// @namespace    http://tampermonkey.net/
// @version      4.2
// @description  tone down styling and remove cruft
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://foreignpolicy.com/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/fp.js
// ==/UserScript==

for (const selector of [
  '.editors-note-in-post--v2',
  '.pull-quote',
  '.pull-quote-sidebar',
  '.fp-related-wrapper',
]) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}

for (const selector of ['.bolded-first-line', '.thick-horizontal-rule']) {
  document.querySelectorAll(selector).forEach((e) => {
    e.className = ''
  })
}
