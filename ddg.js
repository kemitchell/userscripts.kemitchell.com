// ==UserScript==
// @name         Remove DuckDuckGo Ads
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  remove ads
// @author       Kyle E. Mitchell
// @match        https://duckduckgo.com/*
// ==/UserScript==

(() => {
  document.querySelectorAll('[data-layout=ad]').forEach(e => e.parentNode.remove(e))
})()
