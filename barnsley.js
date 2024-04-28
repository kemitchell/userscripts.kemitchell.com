// ==UserScript==
// @name         George Barnsley Over 18
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Confirm Age
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.georgebarnsleyandsons.co.uk/*
// ==/UserScript==

let tries = 0
const limit = 10
const handle = setInterval(() => {
  const query = document.evaluate('//span[contains(., "YES, I AM OVER 18")]', document, null, XPathResult.ANY_TYPE, null)
  const element = query.iterateNext()
  if (!element) {
    tries++
    if (tries > limit) clearInterval(handle)
    return
  }
  element.click()
  clearInterval(handle)
}, 1000)
