// ==UserScript==
// @name         Clean Up MIT Technology Review
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  remove inserts and other cruft
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.technologyreview.com/*
// ==/UserScript==

for (const selector of [
  '.adUnit',
  'aside[class^=sidebar__wrapper--]',
  'aside.related__wrap',
  '#piano__body-footer',
  '.piano__post_body',
  'div[class^=stayConnected__wrapper--]',
  'div[class^=deepDive__wrapper--]',
  'div[class^=contentArticleHeader] div[class^=image__wrapper--]', // hero images
  'div[class^=footer__storyCard--]'
]) document.querySelectorAll(selector).forEach(e => e.remove())
