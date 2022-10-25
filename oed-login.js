// ==UserScript==
// @name         OED Automatic Login
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  automatically click "Sign In"
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.oed.com/*
// @grant        BlueOak-1.0.0
// @updateURL    https://userscripts.kemitchell.com/oed-login.js
// ==/UserScript==

const submitButton = document.querySelector('#loginBar input[type=submit]')
const user = document.getElementById('subLoginUsename')
const password = document.getElementById('subLoginPassword')
if (
  submitButton &&
  user &&
  user.value &&
  password &&
  password.value
) {
  submitButton.click()
}
