<script setup lang="ts">
import { ref, computed } from 'vue'
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

// Close on route change
import { watch } from 'vue'
watch(() => route.fullPath, closeMenu)
</script>

<template>
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
    <div class="container-page flex items-center justify-between h-16 sm:h-20">
      <RouterLink to="/" class="flex items-center gap-3" @click="closeMenu">
        <img :src="company.logo" alt="EYANO GROUP" class="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-1 ring-brand-gold/30" />
        <span class="font-display font-bold text-lg sm:text-xl text-brand-ink tracking-tight">
          EYANO <span class="text-brand-gold">GROUP</span>
        </span>
      </RouterLink>

      <nav class="hidden lg:flex items-center gap-1">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 text-sm font-medium text-slate-700 rounded-full hover:text-brand-ink hover:bg-brand-cream transition"
          active-class="text-brand-gold-dark bg-brand-cream"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-700 hover:border-brand-gold hover:text-brand-gold-dark transition"
          @click="toggleLocale"
          :aria-label="locale === 'fr' ? 'Switch to English' : 'Passer en français'"
        >
          <span :class="locale === 'fr' ? 'text-brand-gold-dark' : ''">FR</span>
          <span class="text-slate-300">/</span>
          <span :class="locale === 'en' ? 'text-brand-gold-dark' : ''">EN</span>
        </button>

        <RouterLink to="/contact" class="hidden lg:inline-flex btn-primary !px-5 !py-2 !text-sm">
          {{ t('common.contactUs') }}
        </RouterLink>

        <button
          type="button"
          class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-brand-ink hover:bg-brand-cream"
          @click="open = !open"
          :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'"
        >
          <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="lg:hidden border-t border-slate-100 bg-white">
      <nav class="container-page py-4 flex flex-col gap-1">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-brand-cream"
          active-class="text-brand-gold-dark bg-brand-cream"
        >
          {{ link.label }}
        </RouterLink>
        <button
          type="button"
          class="mt-2 px-4 py-3 text-left rounded-xl text-sm font-semibold text-slate-700 hover:bg-brand-cream"
          @click="toggleLocale"
        >
          {{ locale === 'fr' ? 'English (EN)' : 'Français (FR)' }}
        </button>
      </nav>
    </div>
  </header>
</template>
