// ==UserScript==
// @name         Streamline Oaklandside
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  remove cruft
// @author       Kyle E. Mitchell
// @match        https://oaklandside.org/20*/*
// ==/UserScript==

const selectors = [
  '.sharedaddy',
  '#colophon',
  '.highlight-menu-contain',
  '.social-nav-contain',
  '.author-avatar',
  'figure.post-thumbnail',
  '.widget-area',
  '[class*=ads-widget]',
  '[class*=relatedposts]'
]

for (const selector of selectors) {
  const elements = Array.from(document.querySelectorAll(selector))
  for (const element of elements) remove(element)
}

const main = document.querySelector('.main-content')
main.style.width = '100%'
main.style.color = 'black !important'

remove(document.querySelector('#h-before-you-go').parentNode.parentNode)

function remove (node) {
  node.parentNode.removeChild(node)
}
