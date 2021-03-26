// ==UserScript==
// @name         Substack Trimmer
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  remove header images and other content from Substack posts
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://*.substack.com/p/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/substack.js
// ==/UserScript==

setTimeout(() => {
  // Remove top banner.
  document.querySelectorAll('.main-menu').forEach(e => {
    e.parentNode.removeChild(e)
  })

  // Remove images at tops of pages.
  /*
  document.querySelectorAll('.body .captioned-image-container:first-child').forEach(e => {
    e.parentNode.removeChild(e)
  })
  */

  // Remove comments and more to read.
  document.querySelectorAll('.single-post-section').forEach(e => {
    e.parentNode.removeChild(e)
  })
}, 1000)
