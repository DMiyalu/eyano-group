<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'
import { company } from '@/data/company'

const { t, locale } = useI18n()
const route = useRoute()
const open = ref(false)

const links = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/a-propos', label: t('nav.about') },
  { to: '/services', label: t('nav.services') },
  { to: '/pourquoi-nous', label: t('nav.whyUs') },
  { to: '/contact', label: t('nav.contact') },
])

function toggleLocale() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}

function closeMenu() {
  open.value = false
}

watch(() => route.fullPath, closeMenu)
</script>

<template>
  <header class="sticky top-0 z-40 bg-white border-b border-slate-200">
    <div class="container-page flex items-center justify-between h-20">
      <RouterLink to="/" class="flex items-center group" @click="closeMenu" aria-label="EYANO GROUP">
        <img
          :src="company.logo"
          alt="EYANO GROUP"
          class="h-12 w-12 rounded-full object-cover ring-1 ring-brand-ink/10"
        />
      </RouterLink>

      <nav class="hidden lg:flex items-center gap-8">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative text-sm font-medium text-slate-700 hover:text-brand-ink transition-colors py-2"
          active-class="text-brand-ink after:absolute after:left-0 after:right-0 after:-bottom-[21px] after:h-[3px] after:bg-brand-gold"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-4">
        <button
          type="button"
          class="hidden sm:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-600 hover:text-brand-ink transition"
          @click="toggleLocale"
          :aria-label="locale === 'fr' ? 'Switch to English' : 'Passer en français'"
        >
          <span :class="locale === 'fr' ? 'text-brand-ink' : ''">FR</span>
          <span class="text-slate-300">|</span>
          <span :class="locale === 'en' ? 'text-brand-ink' : ''">EN</span>
        </button>

        <RouterLink to="/contact" class="hidden lg:inline-flex btn-primary !px-5 !py-2.5 !text-xs uppercase tracking-wider">
          {{ t('common.contactUs') }}
        </RouterLink>

        <button
          type="button"
          class="lg:hidden inline-flex items-center justify-center w-10 h-10 text-brand-ink"
          @click="open = !open"
          :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'"
        >
          <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="lg:hidden border-t border-slate-200 bg-white">
      <nav class="container-page py-6 flex flex-col">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="py-4 border-b border-slate-100 font-display text-2xl text-brand-ink hover:text-brand-gold-dark"
          active-class="text-brand-gold-dark"
        >
          {{ link.label }}
        </RouterLink>
        <button
          type="button"
          class="mt-6 py-3 text-left text-xs font-bold tracking-widest uppercase text-slate-600 hover:text-brand-ink"
          @click="toggleLocale"
        >
          {{ locale === 'fr' ? '→ English (EN)' : '→ Français (FR)' }}
        </button>
      </nav>
    </div>
  </header>
</template>
