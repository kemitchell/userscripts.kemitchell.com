// ==UserScript==
// @name         Streamline Wiktionary
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  remove some elements
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://ru.wiktionary.org/wiki/*
// ==/UserScript==

for (const selector of ['#toc']) {
  for (const element of Array.from(document.querySelectorAll(selector))) {
    element.parentNode.removeChild(element)
  }
}

const table = document.querySelector('.morfotable')
table.style.float = 'none'
table.style.clear = 'none'
for (const side of ['Left', 'Right', 'Top', 'Bottom']) {
  table.style[`margin${side}`] = 0
}
