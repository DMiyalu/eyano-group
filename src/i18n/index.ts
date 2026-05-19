import { createI18n } from 'vue-i18n'
import fr from './locales/fr'
import en from './locales/en'

const STORAGE_KEY = 'eyano-locale'

function detectLocale(): 'fr' | 'en' {
  if (typeof window === 'undefined') return 'fr'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'fr' || saved === 'en') return saved
  const nav = window.navigator.language.toLowerCase()
  return nav.startsWith('en') ? 'en' : 'fr'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'fr',
  messages: { fr, en },
})

export function setLocale(locale: 'fr' | 'en') {
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }
}

export default i18n
