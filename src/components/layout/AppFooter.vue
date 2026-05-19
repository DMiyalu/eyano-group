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
  <footer class="bg-brand-ink text-slate-300">
    <!-- Top banner: slogan -->
    <div class="border-b border-white/10">
      <div class="container-page py-14 sm:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-9">
          <div class="flex items-center gap-3">
            <span class="inline-block w-12 h-[3px] bg-brand-gold"></span>
            <p class="eyebrow !text-brand-gold">EYANO GROUP</p>
          </div>
          <p class="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            « {{ t('company.slogan') }} »
          </p>
        </div>
        <div class="lg:col-span-3 lg:text-right">
          <RouterLink to="/contact" class="btn bg-brand-gold text-brand-ink hover:bg-white">
            {{ t('common.contactUs') }} →
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Columns -->
    <div class="container-page py-16 grid gap-12 md:grid-cols-12">
      <div class="md:col-span-5">
        <div class="flex items-center gap-4">
          <img :src="company.logo" alt="EYANO GROUP" class="h-14 w-auto object-contain" />
          <span class="font-display font-semibold text-xl text-white tracking-tight">
            EYANO <span class="text-brand-gold">GROUP</span>
          </span>
        </div>
        <p class="mt-6 text-slate-400 leading-relaxed max-w-sm">
          {{ t('footer.tagline') }}
        </p>
      </div>

      <div class="md:col-span-3">
        <p class="eyebrow !text-brand-gold">{{ t('footer.quickLinks') }}</p>
        <ul class="mt-5 space-y-3">
          <li v-for="link in links" :key="link.to">
            <RouterLink :to="link.to" class="text-slate-200 hover:text-brand-gold transition-colors">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="md:col-span-4">
        <p class="eyebrow !text-brand-gold">{{ t('footer.contact') }}</p>
        <ul class="mt-5 space-y-3 text-slate-200">
          <li>{{ company.address }}</li>
          <li>
            <a :href="company.phoneHref" class="hover:text-brand-gold transition-colors">{{ company.phone }}</a>
          </li>
          <li>
            <a :href="company.emailHref" class="hover:text-brand-gold transition-colors break-all">{{ company.email }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-page py-5 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:justify-between">
        <span>© {{ year }} EYANO GROUP. {{ t('footer.rights') }}</span>
        <span>Kinshasa · RDC</span>
      </div>
    </div>
  </footer>
</template>
