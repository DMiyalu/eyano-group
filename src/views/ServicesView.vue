<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { services } from '@/data/company'

const { t } = useI18n()
</script>

<template>
  <!-- INTRO -->
  <section class="bg-brand-cream">
    <div class="container-page py-20 sm:py-28 lg:py-32">
      <div class="flex items-center gap-3">
        <span class="rule-gold"></span>
        <p class="eyebrow">{{ t('nav.services') }}</p>
      </div>
      <h1 class="display-1 mt-8 max-w-4xl">{{ t('services.title') }}</h1>
      <p class="lead mt-8 max-w-3xl">{{ t('services.subtitle') }}</p>
    </div>
  </section>

  <!-- SERVICES — editorial list -->
  <section class="section">
    <div class="container-page">
      <div class="divide-y divide-brand-ink/15 border-y border-brand-ink/15">
        <article
          v-for="(s, i) in services"
          :key="s.key"
          class="grid md:grid-cols-12 gap-8 py-14 sm:py-16 group"
        >
          <div class="md:col-span-3">
            <p class="font-display text-5xl sm:text-6xl text-brand-gold-dark group-hover:text-brand-ink transition-colors">
              {{ String(i + 1).padStart(2, '0') }}
            </p>
          </div>
          <div class="md:col-span-9">
            <h3 class="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-ink leading-tight">
              {{ t(`services.${s.key}.title`) }}
            </h3>
            <p class="lead mt-6 max-w-3xl">
              {{ t(`services.${s.key}.desc`) }}
            </p>
          </div>
        </article>
      </div>

      <div class="mt-20 flex flex-wrap gap-4">
        <RouterLink to="/contact" class="btn-primary">{{ t('common.contactUs') }} →</RouterLink>
        <RouterLink to="/pourquoi-nous" class="btn-secondary">{{ t('nav.whyUs') }}</RouterLink>
      </div>
    </div>
  </section>
</template>
