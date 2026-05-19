<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { company } from '@/data/company'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const { t } = useI18n()

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function submit() {
  // Compose a mailto with the form contents (no backend yet)
  const subject = encodeURIComponent(`Contact website — ${form.name}`)
  const body = encodeURIComponent(
    `${form.message}\n\n—\n${form.name}\n${form.email}`,
  )
  window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`
  sent.value = true
}
</script>

<template>
  <section class="section bg-brand-cream/40">
    <div class="container-page">
      <SectionHeader
        align="center"
        :eyebrow="t('nav.contact')"
        :title="t('contact.title')"
        :subtitle="t('contact.subtitle')"
      />
    </div>
  </section>

  <section class="section">
    <div class="container-page grid lg:grid-cols-[1fr_1.2fr] gap-10">
      <!-- Coordonnées -->
      <div class="space-y-4">
        <div class="card">
          <p class="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
            {{ t('contact.phone') }}
          </p>
          <a :href="company.phoneHref" class="mt-2 inline-block text-lg font-semibold text-brand-ink hover:text-brand-gold-dark">
            {{ company.phone }}
          </a>
        </div>
        <div class="card">
          <p class="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
            {{ t('contact.email') }}
          </p>
          <a :href="company.emailHref" class="mt-2 inline-block text-lg font-semibold text-brand-ink hover:text-brand-gold-dark break-all">
            {{ company.email }}
          </a>
        </div>
        <div class="card">
          <p class="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
            {{ t('contact.address') }}
          </p>
          <p class="mt-2 text-lg font-semibold text-brand-ink">{{ company.address }}</p>
        </div>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="submit" class="card space-y-5">
        <div>
          <label for="name" class="block text-sm font-medium text-slate-700 mb-1">
            {{ t('contact.formName') }}
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700 mb-1">
            {{ t('contact.formEmail') }}
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-slate-700 mb-1">
            {{ t('contact.formMessage') }}
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 outline-none"
          ></textarea>
        </div>

        <button type="submit" class="btn-primary w-full sm:w-auto">
          {{ t('contact.formSubmit') }}
        </button>

        <p v-if="sent" class="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
          {{ t('contact.formSuccess') }}
        </p>
      </form>
    </div>
  </section>
</template>
