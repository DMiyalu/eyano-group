<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div :class="['max-w-3xl', align === 'center' ? 'mx-auto text-center' : '']">
    <p v-if="eyebrow" class="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
      {{ eyebrow }}
    </p>
    <h2 class="section-title mt-2">{{ title }}</h2>
    <p v-if="subtitle" :class="['section-subtitle', align === 'center' ? 'mx-auto' : '']">
      {{ subtitle }}
    </p>
  </div>
</template>
