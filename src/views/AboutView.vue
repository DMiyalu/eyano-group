<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { values } from '@/data/company'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'

const { t, tm, rt } = useI18n()

const objectItems = (tm('about.objectItems') as unknown as string[]).map((_, i) =>
  rt(`about.objectItems[${i}]` as never),
)
</script>

<template>
  <section class="section bg-brand-cream/40">
    <div class="container-page">
      <SectionHeader
        align="center"
        :eyebrow="t('nav.about')"
        :title="t('about.title')"
        :subtitle="t('about.intro')"
      />
    </div>
  </section>

  <section class="section">
    <div class="container-page grid md:grid-cols-2 gap-8">
      <div class="card">
        <h3 class="text-xl font-semibold text-brand-ink">{{ t('about.missionTitle') }}</h3>
        <p class="mt-3 text-slate-600 leading-relaxed">{{ t('about.mission') }}</p>
      </div>
      <div class="card">
        <h3 class="text-xl font-semibold text-brand-ink">{{ t('about.visionTitle') }}</h3>
        <p class="mt-3 text-slate-600 leading-relaxed">{{ t('about.vision') }}</p>
      </div>
    </div>
  </section>

  <section class="section bg-brand-cream/40">
    <div class="container-page">
      <SectionHeader align="center" :title="t('about.valuesTitle')" />
      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="v in values"
          :key="v.key"
          :icon="v.icon"
          :title="t(`values.${v.key}.title`)"
          :description="t(`values.${v.key}.desc`)"
        />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <SectionHeader :title="t('about.objectTitle')" :subtitle="t('about.objectIntro')" />
        <ul class="mt-6 space-y-3">
          <li v-for="item in objectItems" :key="item" class="flex items-start gap-3">
            <span class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-dark text-xs font-bold">✓</span>
            <span class="text-slate-700">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="card bg-brand-ink text-white border-transparent">
        <h3 class="text-xl font-semibold">{{ t('about.engagementTitle') }}</h3>
        <p class="mt-3 text-slate-300 leading-relaxed">{{ t('about.engagement') }}</p>
        <p class="mt-6 italic text-brand-gold">« {{ t('company.slogan') }} »</p>
      </div>
    </div>
  </section>
</template>
