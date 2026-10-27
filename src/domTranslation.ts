import { translations, type SiteLanguage } from './translations'

// Translate only authored text nodes. Never translate form inputs, user-entered data,
// URLs, code, or product metadata. Untranslated source text remains in English.
const originals = new WeakMap<Text, string>()
const attributeOriginals = new WeakMap<Element, Record<string, string>>()
const attributes = ['placeholder', 'aria-label', 'title'] as const

export function translateDocument(language: SiteLanguage) {
  const root = document.querySelector('#root')
  if (!root) return
  const dict = language === 'en' ? null : translations[language]
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode())) {
    const text = node as Text
    if (text.parentElement?.closest('script,style,textarea,option[data-user-entry],code,pre')) continue
    const original = originals.get(text) ?? text.nodeValue ?? ''
    if (!originals.has(text)) originals.set(text, original)
    const trimmed = original.trim()
    if (!trimmed) continue
    const localized = dict?.[trimmed] ?? trimmed
    if (localized !== trimmed || text.nodeValue !== original) {
      text.nodeValue = original.replace(trimmed, localized)
    }
  }
  root.querySelectorAll('*').forEach(element => {
    const stored = attributeOriginals.get(element) ?? {}
    let changed = false
    for (const attr of attributes) {
      if (!element.hasAttribute(attr)) continue
      const source = stored[attr] ?? element.getAttribute(attr) ?? ''
      if (!stored[attr]) { stored[attr] = source; changed = true }
      const next = dict?.[source] ?? source
      if (element.getAttribute(attr) !== next) element.setAttribute(attr, next)
    }
    if (changed) attributeOriginals.set(element, stored)
  })
}
