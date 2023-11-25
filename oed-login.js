// ==UserScript==
// @name         OED Automatic Login
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  automatically click "Sign In"
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.oed.com/*
// ==/UserScript==

const buttons = document.getElementsByClassName('personalAccountSignInButton')
if (buttons) {
  const first = buttons[0]
  first.click()
}
