// ==UserScript==
// @name         Reddit Remove Promoted
// @version      1.0
// @namespace    http://tampermonkey.net/
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        *://*.reddit.com/*
// ==/UserScript==

for (const selector of [
  '.promoted'
]) {
  document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e))
}
