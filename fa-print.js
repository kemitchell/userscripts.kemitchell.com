// ==UserScript==
// @name         Cleaner Foreign Affairs Printing
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  fix type, etc.
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.foreignaffairs.com/print/node/*
// @grant        BlueOak-1.0.0
// ==/UserScript==

for (const stylesheet of document.styleSheets) {
  for (let ruleIndex = 0; ruleIndex < stylesheet.cssRules.length; ruleIndex++) {
    const rule = stylesheet.cssRules[ruleIndex]
    const text = rule.cssText
    if (
      text.includes('.article-dropcap') &&
      text.includes('font-size') &&
      text.includes('1.4rem')
    ) stylesheet.deleteRule(ruleIndex)
  }
}

const footer = document.querySelector('.print-footer')
footer.parentNode.removeChild(footer)
