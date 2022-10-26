// ==UserScript==
// @name         OED Automatic Login
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  automatically click "Sign In"
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.oed.com/*
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
  const user = document.getElementById('subLoginUsename')
  const password = document.getElementById('subLoginPassword')
  if (
    user &&
    user.value !== '' &&
    password &&
    password.value !== ''
  ) {
    const submitButton = document.querySelector('#loginBar input[type=submit]')
    submitButton.click()
  }
})
