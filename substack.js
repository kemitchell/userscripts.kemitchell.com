// ==UserScript==
// @name         Streamline Substack
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  remove various cruft from Substack pages
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://*.substack.com/p/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/substack.js
// ==/UserScript==

// Remove post footers.
const postFooter = document.querySelector('.post-footer')
postFooter.parentNode.removeChild(postFooter)
