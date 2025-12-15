// ==UserScript==
// @name         Reddit Remove Promoted
// @version      1.2
// @namespace    http://tampermonkey.net/
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        *://*.reddit.com/*
// ==/UserScript==

for (const selector of [
  '.promoted',
  '.premium-banner-outer',
  '.sidebox.create'
]) {
  document.querySelectorAll(selector).forEach(e => e.remove())
}
