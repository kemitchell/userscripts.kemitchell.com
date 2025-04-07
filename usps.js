// ==UserScript==
// @name         USPS Quick Notifications
// @description  add links to quickly sign up for delivery notifications
// @namespace    http://tampermonkey.net/
// @version      2.3
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://tools.usps.com/go/TrackConfirmAction.action*
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
    document.querySelector('#emailAll_1').click()
    document.querySelector('#emailUpdate_name1_1').value = 'Kyle Mitchell'
    document.querySelector('#emailUpdate_email1_1').value = 'kyle@kemitchell.com'
    document.querySelector('#agreedTextUpdates_1').click()
    document.querySelector('#teuButton_1').click()
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
    document.querySelector('#textAll_1').click()
    document.querySelector('#textUpdatePhoneNumber_1').value = '510-712-0933'
    document.querySelector('#agreedTextUpdates_1').click()
    document.querySelector('#teuButton_1').click()
    removeLinks()
  })
  wrapper.appendChild(newLink)
})();

function removeLinks () {
  for (const e of [emailLink, textLink]) e.parentNode.removeChild(e)
}
