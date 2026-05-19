<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company, services, values } from '@/data/company'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const { t } = useI18n()
</script>

<template>
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-white">
    <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true"></div>

    <div class="container-page relative grid lg:grid-cols-2 gap-12 items-center py-20 sm:py-24 lg:py-28">
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
          {{ t('company.location') }}
        </p>
        <h1 class="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ink leading-tight">
          {{ t('home.heroTitle') }}
        </h1>
        <p class="mt-6 text-lg text-slate-600 max-w-xl">
          {{ t('home.heroSubtitle') }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/services" class="btn-primary">
            {{ t('common.discoverServices') }}
          </RouterLink>
          <RouterLink to="/contact" class="btn-ghost">
            {{ t('common.contactUs') }}
          </RouterLink>
        </div>
        <p class="mt-8 italic text-sm text-brand-blue">
          « {{ t('company.slogan') }} »
        </p>
      </div>

      <div class="relative">
        <div class="aspect-square mx-auto max-w-md rounded-3xl bg-gradient-to-br from-brand-gold via-amber-400 to-brand-red p-1 shadow-2xl">
          <div class="w-full h-full rounded-[1.4rem] bg-white flex items-center justify-center p-8">
            <img :src="company.logo" alt="EYANO GROUP" class="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT PREVIEW -->
  <section class="section">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionHeader :eyebrow="t('nav.about')" :title="t('home.aboutTitle')" />
        <p class="mt-6 text-slate-600 leading-relaxed">
          {{ t('home.aboutText') }}
        </p>
        <RouterLink to="/a-propos" class="btn-secondary mt-8">
          {{ t('common.learnMore') }}
        </RouterLink>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="v in values.slice(0, 4)" :key="v.key" class="card text-center">
          <div class="text-3xl">{{ v.icon }}</div>
          <p class="mt-2 font-semibold text-brand-ink text-sm">
            {{ t(`values.${v.key}.title`) }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section bg-brand-cream/40">
    <div class="container-page">
      <SectionHeader
        align="center"
        :eyebrow="t('nav.services')"
        :title="t('home.servicesTitle')"
        :subtitle="t('home.servicesSubtitle')"
      />
      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          v-for="s in services"
          :key="s.key"
          :icon="s.icon"
          :title="t(`services.${s.key}.title`)"
          :description="t(`services.${s.key}.desc`)"
        />
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container-page">
      <div class="relative overflow-hidden rounded-3xl bg-brand-ink text-white p-10 sm:p-14 shadow-xl">
        <div class="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden="true"></div>
        <div class="relative max-w-2xl">
          <h2 class="font-display text-3xl sm:text-4xl font-bold">{{ t('home.ctaTitle') }}</h2>
          <p class="mt-4 text-slate-300">{{ t('home.ctaText') }}</p>
          <RouterLink to="/contact" class="btn-primary mt-8">
            {{ t('common.contactUs') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
