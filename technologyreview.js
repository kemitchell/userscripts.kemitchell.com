// ==UserScript==
// @name         Clean Up MIT Technology Review
//
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  remove inserts and other cruft
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.technologyreview.com/*
// ==/UserScript==

// Give Angular time to render the article content.
setTimeout(() => {
  for (const selector of [
    '#piano__body-footer',
    '.adUnit',
    '.piano__post_body',
    'aside.related__wrap',
    'aside[class^=sidebar__wrapper--]',
    'div[class^=contentArticleHeader] div[class^=image__wrapper--]', // hero images
    'div[class^=deepDive__wrapper--]',
    'div[class^=footer__storyCard--]',
    'div[class^=socialList__wrapper--]',
    'div[class^=stayConnected__wrapper--]',
    'div[class^=whyItMatters__container--]'
  ]) document.querySelectorAll(selector).forEach(e => e.remove())
}, 500)
