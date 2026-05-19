<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company } from '@/data/company'

const { t } = useI18n()
const year = new Date().getFullYear()

const links = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/a-propos', label: t('nav.about') },
  { to: '/services', label: t('nav.services') },
  { to: '/pourquoi-nous', label: t('nav.whyUs') },
  { to: '/contact', label: t('nav.contact') },
])
</script>

<template>
  <footer class="bg-brand-ink text-slate-300 mt-16">
    <div class="container-page py-12 grid gap-10 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-3">
          <img :src="company.logo" alt="EYANO GROUP" class="h-12 w-12 rounded-full object-cover ring-1 ring-brand-gold/40" />
          <span class="font-display font-bold text-lg text-white">
            EYANO <span class="text-brand-gold">GROUP</span>
          </span>
        </div>
        <p class="mt-4 text-sm text-slate-400 max-w-xs">
          {{ t('footer.tagline') }}
        </p>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-3">{{ t('footer.quickLinks') }}</h3>
        <ul class="space-y-2 text-sm">
          <li v-for="link in links" :key="link.to">
            <RouterLink :to="link.to" class="hover:text-brand-gold transition">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-3">{{ t('footer.contact') }}</h3>
        <ul class="space-y-2 text-sm">
          <li>📍 {{ company.address }}</li>
          <li>
            📞 <a :href="company.phoneHref" class="hover:text-brand-gold transition">{{ company.phone }}</a>
          </li>
          <li>
            ✉️ <a :href="company.emailHref" class="hover:text-brand-gold transition">{{ company.email }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-page py-4 text-xs text-slate-400 flex flex-col sm:flex-row gap-2 sm:justify-between">
        <span>© {{ year }} EYANO GROUP. {{ t('footer.rights') }}</span>
        <span class="italic">« {{ t('company.slogan') }} »</span>
      </div>
    </div>
  </footer>
</template>
