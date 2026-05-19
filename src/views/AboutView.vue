<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { values } from '@/data/company'
import FeatureCard from '@/components/ui/FeatureCard.vue'

const { t, tm, rt } = useI18n()

const objectItems = (tm('about.objectItems') as unknown as string[]).map((_, i) =>
  rt(`about.objectItems[${i}]` as never),
)
</script>

<template>
  <!-- INTRO -->
  <section class="bg-brand-cream">
    <div class="container-page py-20 sm:py-28 lg:py-32">
      <div class="flex items-center gap-3">
        <span class="rule-gold"></span>
        <p class="eyebrow">{{ t('nav.about') }}</p>
      </div>
      <h1 class="display-1 mt-8 max-w-4xl">{{ t('about.title') }}</h1>
      <p class="lead mt-8 max-w-3xl">{{ t('about.intro') }}</p>
    </div>
  </section>

  <!-- MISSION / VISION -->
  <section class="section">
    <div class="container-page grid md:grid-cols-2 gap-px bg-brand-ink/10">
      <div class="bg-white p-10 sm:p-12">
        <p class="eyebrow">{{ t('about.missionTitle') }}</p>
        <h2 class="font-display text-3xl sm:text-4xl text-brand-ink leading-tight mt-6">
          {{ t('about.mission') }}
        </h2>
      </div>
      <div class="bg-brand-ink text-white p-10 sm:p-12">
        <p class="eyebrow !text-brand-gold">{{ t('about.visionTitle') }}</p>
        <h2 class="font-display text-3xl sm:text-4xl text-white leading-tight mt-6">
          {{ t('about.vision') }}
        </h2>
      </div>
    </div>
  </section>

  <!-- VALUES -->
  <section class="bg-brand-paper">
    <div class="container-page py-20 sm:py-28 lg:py-32">
      <div class="grid lg:grid-cols-12 gap-12 items-end mb-16">
        <div class="lg:col-span-8">
          <div class="flex items-center gap-3">
            <span class="rule-gold"></span>
            <p class="eyebrow">{{ t('about.valuesTitle') }}</p>
          </div>
          <h2 class="display-2 mt-6">{{ t('about.valuesTitle') }}</h2>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-ink/10">
        <FeatureCard
          v-for="(v, i) in values"
          :key="v.key"
          :index="i + 1"
          :title="t(`values.${v.key}.title`)"
          :description="t(`values.${v.key}.desc`)"
        />
      </div>
    </div>
  </section>

  <!-- OBJET + ENGAGEMENT -->
  <section class="section">
    <div class="container-page grid lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-7">
        <div class="flex items-center gap-3">
          <span class="rule-gold"></span>
          <p class="eyebrow">{{ t('about.objectTitle') }}</p>
        </div>
        <h2 class="display-3 mt-6">{{ t('about.objectTitle') }}</h2>
        <p class="lead mt-6">{{ t('about.objectIntro') }}</p>
        <ul class="mt-10 divide-y divide-brand-ink/15 border-t border-brand-ink/15">
          <li v-for="item in objectItems" :key="item" class="flex gap-6 py-5">
            <span class="font-display text-brand-gold-dark text-xl shrink-0">—</span>
            <span class="text-brand-ink text-lg leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="lg:col-span-5 lg:sticky lg:top-28">
        <div class="bg-brand-ink text-white p-10">
          <p class="eyebrow !text-brand-gold">{{ t('about.engagementTitle') }}</p>
          <p class="mt-6 text-lg text-slate-200 leading-relaxed">{{ t('about.engagement') }}</p>
          <p class="mt-10 font-display text-2xl text-brand-gold leading-snug">
            « {{ t('company.slogan') }} »
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
