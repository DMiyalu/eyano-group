<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company, services, values } from '@/data/company'
import FeatureCard from '@/components/ui/FeatureCard.vue'

const { t } = useI18n()
</script>

<template>
  <!-- HERO — editorial, full-bleed -->
  <section class="bg-brand-cream">
    <div class="container-page pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
      <div class="grid lg:grid-cols-12 gap-12 items-end">
        <div class="lg:col-span-8">
          <div class="flex items-center gap-3">
            <span class="rule-gold"></span>
            <p class="eyebrow">{{ t('home.heroEyebrow') }}</p>
          </div>
          <h1 class="display-1 mt-8">
            {{ t('home.heroTitle') }}
          </h1>
        </div>
        <div class="lg:col-span-4">
          <p class="lead">{{ t('home.heroSubtitle') }}</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink to="/services" class="btn-primary">
              {{ t('common.discoverServices') }}
            </RouterLink>
            <RouterLink to="/contact" class="btn-secondary">
              {{ t('common.contactUs') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SLOGAN BAR -->
  <section class="bg-brand-ink text-white">
    <div class="container-page py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p class="font-display text-2xl sm:text-3xl text-white leading-tight">
        « {{ t('company.slogan') }} »
      </p>
      <img :src="company.logo" alt="EYANO GROUP" class="h-16 w-auto object-contain" />
    </div>
  </section>

  <!-- ABOUT — editorial split -->
  <section class="section">
    <div class="container-page grid lg:grid-cols-12 gap-12">
      <div class="lg:col-span-5">
        <div class="flex items-center gap-3">
          <span class="rule-gold"></span>
          <p class="eyebrow">{{ t('nav.about') }}</p>
        </div>
        <h2 class="display-2 mt-6">{{ t('home.aboutTitle') }}</h2>
      </div>
      <div class="lg:col-span-7 lg:pl-8">
        <p class="lead">{{ t('home.aboutText') }}</p>
        <div class="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
          <div
            v-for="v in values.slice(0, 4)"
            :key="v.key"
            class="border-t border-brand-ink/15 pt-4"
          >
            <p class="font-display text-xl text-brand-ink">{{ t(`values.${v.key}.title`) }}</p>
          </div>
        </div>
        <RouterLink to="/a-propos" class="link-arrow mt-10">
          {{ t('common.learnMore') }} →
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- SERVICES — editorial grid -->
  <section class="bg-brand-paper">
    <div class="container-page py-20 sm:py-28 lg:py-32">
      <div class="grid lg:grid-cols-12 gap-12 items-end mb-16">
        <div class="lg:col-span-7">
          <div class="flex items-center gap-3">
            <span class="rule-gold"></span>
            <p class="eyebrow">{{ t('nav.services') }}</p>
          </div>
          <h2 class="display-2 mt-6">{{ t('home.servicesTitle') }}</h2>
        </div>
        <div class="lg:col-span-5">
          <p class="lead">{{ t('home.servicesSubtitle') }}</p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-ink/10">
        <FeatureCard
          v-for="(s, i) in services"
          :key="s.key"
          :index="i + 1"
          :title="t(`services.${s.key}.title`)"
          :description="t(`services.${s.key}.desc`)"
        />
      </div>
    </div>
  </section>

  <!-- CTA — full-bleed dark -->
  <section class="bg-brand-ink text-white">
    <div class="container-page py-20 sm:py-28 grid lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-8">
        <div class="flex items-center gap-3">
          <span class="rule-gold"></span>
          <p class="eyebrow !text-brand-gold">{{ t('common.contactUs') }}</p>
        </div>
        <h2 class="display-2 mt-6 text-white">{{ t('home.ctaTitle') }}</h2>
        <p class="lead mt-6 text-slate-300 max-w-2xl">{{ t('home.ctaText') }}</p>
      </div>
      <div class="lg:col-span-4 flex lg:justify-end">
        <RouterLink to="/contact" class="btn bg-brand-gold text-brand-ink hover:bg-white">
          {{ t('common.contactUs') }} →
        </RouterLink>
      </div>
    </div>
  </section>
</template>
