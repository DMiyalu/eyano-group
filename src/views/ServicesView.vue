<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { services } from '@/data/company'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const { t } = useI18n()
</script>

<template>
  <section class="section bg-brand-cream/40">
    <div class="container-page">
      <SectionHeader
        align="center"
        :eyebrow="t('nav.services')"
        :title="t('services.title')"
        :subtitle="t('services.subtitle')"
      />
    </div>
  </section>

  <section class="section">
    <div class="container-page space-y-8">
      <article
        v-for="(s, i) in services"
        :key="s.key"
        class="card grid md:grid-cols-[120px_1fr] gap-6 items-start"
      >
        <div class="flex items-center justify-center w-24 h-24 rounded-2xl bg-brand-cream text-5xl ring-1 ring-brand-gold/20">
          {{ s.icon }}
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
            0{{ i + 1 }}
          </p>
          <h3 class="mt-1 text-2xl font-semibold text-brand-ink">
            {{ t(`services.${s.key}.title`) }}
          </h3>
          <p class="mt-3 text-slate-600 leading-relaxed">
            {{ t(`services.${s.key}.desc`) }}
          </p>
        </div>
      </article>

      <div class="text-center pt-4">
        <RouterLink to="/contact" class="btn-primary">{{ t('common.contactUs') }}</RouterLink>
      </div>
    </div>
  </section>
</template>
