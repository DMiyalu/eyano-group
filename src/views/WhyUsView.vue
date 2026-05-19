<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t, tm, rt } = useI18n()

const items = (tm('whyUs.items') as unknown as string[]).map((_, i) =>
  rt(`whyUs.items[${i}]` as never),
)
</script>

<template>
  <!-- INTRO -->
  <section class="bg-brand-cream">
    <div class="container-page py-20 sm:py-28 lg:py-32">
      <div class="flex items-center gap-3">
        <span class="rule-gold"></span>
        <p class="eyebrow">{{ t('nav.whyUs') }}</p>
      </div>
      <h1 class="display-1 mt-8 max-w-4xl">{{ t('whyUs.title') }}</h1>
      <p class="lead mt-8 max-w-3xl">{{ t('whyUs.subtitle') }}</p>
    </div>
  </section>

  <!-- POINTS -->
  <section class="section">
    <div class="container-page">
      <div class="grid sm:grid-cols-2 gap-px bg-brand-ink/10">
        <div
          v-for="(item, i) in items"
          :key="item"
          class="bg-white p-8 sm:p-10 flex gap-8"
        >
          <p class="font-display text-4xl text-brand-gold-dark shrink-0 leading-none">
            {{ String(i + 1).padStart(2, '0') }}
          </p>
          <p class="text-lg text-brand-ink leading-relaxed pt-1">{{ item }}</p>
        </div>
      </div>

      <div class="mt-16">
        <RouterLink to="/contact" class="btn-primary">{{ t('common.contactUs') }} →</RouterLink>
      </div>
    </div>
  </section>
</template>
