// ==UserScript==
// @name         Clean Up MIT Technology Review
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  remove inserts and other cruft
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.technologyreview.com/*
// ==/UserScript==

for (const selector of [
  '.piano__post_body',
  'aside[class^=sidebar__wrapper--]',
  'aside.related__wrap',
  '#piano__body-footer',
  'div[class^=stayConnected__wrapper--]',
  'div[class^=deepDive__wrapper--]',
  'div[class^=footer__storyCard--]'
]) document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e))
