// ==UserScript==
// @name         USPS Quick Notifications
// @namespace    http://tampermonkey.net/
// @version      1.4
// @author       Kyle E. Mitchell
// @homepage     https://userscripts.kemitchell.com
// @match        https://tools.usps.com/go/TrackConfirmAction.action*
// ==/UserScript==

const wrapper = document.querySelector('.tn-tools-wrapper')
const newLink = document.createElement('a')
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
})
wrapper.appendChild(newLink)
