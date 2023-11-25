// ==UserScript==
// @name         Streamline Aeon.co
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://aeon.co/essays/*
// ==/UserScript==

(() => {
  for (const selector of [
    '[class*=SupportBar]',
    '[class*=HideOnPrint]',
    '[class*=Footer]',
    '[class*=AppendixContainer]',
    'header img',
    '[class*=Thumbnail] img',
    '.pullquote'
  ]) {
    for (const element of Array.from(document.querySelectorAll(selector))) {
      element.parentNode.removeChild(element)
    }
  }

  for (const classNameSubstring of ['Title', 'Subtitle', 'Author']) {
    const element = document.querySelector(`[class*=${classNameSubstring}]`)
    if (element) element.style.color = 'black'
  }
})()
