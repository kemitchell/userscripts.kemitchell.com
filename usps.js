// ==UserScript==
// @name         USPS Quick Notifications
// @description  add links to quickly sign up for delivery notifications
// @namespace    http://tampermonkey.net/
// @version      3.2
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://tools.usps.com/tracking/*
// ==/UserScript==

let emailLink = null;
let textLink = null;

(() => {
  const wrapper = document.querySelector('.tn-tools-wrapper')
  const newLink = emailLink = document.createElement('a')
  newLink.appendChild(document.createTextNode('E-Mail Notifications'))
  newLink.addEventListener('click', () => {
    const matches = document.evaluate('//a[contains(., "Text & Email Updates")]', document, null, XPathResult.ANY_TYPE, null)
    const match = matches.iterateNext()
    match.click()
    document.querySelector('#emailOA_0').click()
    document.querySelector('#emailUpdate_name1_0').value = 'Kyle Mitchell'
    document.querySelector('#emailUpdate_email1_0').value = 'kyle@kemitchell.com'
    document.querySelector('#agreedTextUpdates_0').click()
    document.querySelector('#teuButton_0').click()
    removeLinks()
  })
  wrapper.appendChild(newLink)
})();

(() => {
  const wrapper = document.querySelector('.tn-tools-wrapper')
  const newLink = textLink = document.createElement('a')
  newLink.appendChild(document.createTextNode('Text Notifications'))
  newLink.addEventListener('click', () => {
    const matches = document.evaluate('//a[contains(., "Text & Email Updates")]', document, null, XPathResult.ANY_TYPE, null)
    const match = matches.iterateNext()
    match.click()
    document.querySelector('#textOA_0').click()
    document.querySelector('#textUpdatePhoneNumber_0').value = '510-712-0933'
    document.querySelector('#agreedTextUpdates_0').click()
    document.querySelector('#teuButton_0').click()
    removeLinks()
  })
  wrapper.appendChild(newLink)
})();

function removeLinks () {
  for (const e of [emailLink, textLink]) e.parentNode.removeChild(e)
}
