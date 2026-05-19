<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { company } from '@/data/company'

const { t } = useI18n()

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function submit() {
  const subject = encodeURIComponent(`Contact website — ${form.name}`)
  const body = encodeURIComponent(
    `${form.message}\n\n—\n${form.name}\n${form.email}`,
  )
  window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`
  sent.value = true
}
</script>

<template>
  <!-- INTRO -->
  <section class="bg-brand-cream">
    <div class="container-page py-20 sm:py-28 lg:py-32">
      <div class="flex items-center gap-3">
        <span class="rule-gold"></span>
        <p class="eyebrow">{{ t('nav.contact') }}</p>
      </div>
      <h1 class="display-1 mt-8 max-w-4xl">{{ t('contact.title') }}</h1>
      <p class="lead mt-8 max-w-3xl">{{ t('contact.subtitle') }}</p>
    </div>
  </section>

  <!-- CONTACT BLOCK -->
  <section class="section">
    <div class="container-page grid lg:grid-cols-12 gap-12 lg:gap-16">
      <!-- Infos -->
      <aside class="lg:col-span-5 space-y-10">
        <div class="border-t border-brand-ink/15 pt-6">
          <p class="eyebrow">{{ t('contact.phone') }}</p>
          <a :href="company.phoneHref" class="mt-3 block font-display text-2xl text-brand-ink hover:text-brand-gold-dark transition-colors">
            {{ company.phone }}
          </a>
        </div>
        <div class="border-t border-brand-ink/15 pt-6">
          <p class="eyebrow">{{ t('contact.email') }}</p>
          <a :href="company.emailHref" class="mt-3 block font-display text-2xl text-brand-ink hover:text-brand-gold-dark transition-colors break-all">
            {{ company.email }}
          </a>
        </div>
        <div class="border-t border-brand-ink/15 pt-6">
          <p class="eyebrow">{{ t('contact.address') }}</p>
          <p class="mt-3 font-display text-2xl text-brand-ink">{{ company.address }}</p>
        </div>
      </aside>

      <!-- Form -->
      <form @submit.prevent="submit" class="lg:col-span-7 bg-brand-paper p-8 sm:p-10 space-y-6">
        <div>
          <label for="name" class="eyebrow block mb-3">
            {{ t('contact.formName') }}
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full bg-white border border-brand-ink/20 px-4 py-3 text-base focus:border-brand-ink focus:ring-0 outline-none"
          />
        </div>
        <div>
          <label for="email" class="eyebrow block mb-3">
            {{ t('contact.formEmail') }}
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full bg-white border border-brand-ink/20 px-4 py-3 text-base focus:border-brand-ink focus:ring-0 outline-none"
          />
        </div>
        <div>
          <label for="message" class="eyebrow block mb-3">
            {{ t('contact.formMessage') }}
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            required
            class="w-full bg-white border border-brand-ink/20 px-4 py-3 text-base focus:border-brand-ink focus:ring-0 outline-none resize-y"
          ></textarea>
        </div>

        <button type="submit" class="btn-primary w-full sm:w-auto">
          {{ t('contact.formSubmit') }} →
        </button>

        <p v-if="sent" class="text-sm text-brand-ink bg-brand-gold/20 border-l-4 border-brand-gold px-4 py-3">
          {{ t('contact.formSuccess') }}
        </p>
      </form>
    </div>
  </section>
</template>
