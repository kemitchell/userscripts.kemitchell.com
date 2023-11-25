// ==UserScript==
// @name         OED Automatic Login
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  automatically click "Sign In"
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://www.oed.com/*
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
  // The user name input.
  const user = document.getElementById('subLoginUsername')
  // The password input.
  const password = document.getElementById('subLoginPassword')
  if (
    user && // user input present
    user.value !== '' && // automatically filled
    password && // password input present
    password.value !== '' // automatically filled
  ) {
    // Click the login button.
    const submitButton = document.querySelector('#loginBar input[type=submit]')
    submitButton.click()
  }
})
