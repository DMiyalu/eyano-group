<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const { t, tm, rt } = useI18n()

const items = (tm('whyUs.items') as unknown as string[]).map((_, i) =>
  rt(`whyUs.items[${i}]` as never),
)
</script>

<template>
  <section class="section bg-brand-cream/40">
    <div class="container-page">
      <SectionHeader
        align="center"
        :eyebrow="t('nav.whyUs')"
        :title="t('whyUs.title')"
        :subtitle="t('whyUs.subtitle')"
      />
    </div>
  </section>

  <section class="section">
    <div class="container-page grid sm:grid-cols-2 gap-6">
      <div
        v-for="(item, i) in items"
        :key="item"
        class="card flex items-start gap-4"
      >
        <span class="inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-brand-gold text-white font-bold">
          {{ i + 1 }}
        </span>
        <p class="text-slate-700 leading-relaxed pt-1.5">{{ item }}</p>
      </div>
    </div>

    <div class="container-page text-center mt-12">
      <RouterLink to="/contact" class="btn-primary">{{ t('common.contactUs') }}</RouterLink>
    </div>
  </section>
</template>
