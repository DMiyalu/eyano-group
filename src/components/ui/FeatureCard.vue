<script setup lang="ts">
defineProps<{
  icon?: string
  index?: number
  title: string
  description: string
}>()
</script>

<template>
  <article class="card-feature h-full flex flex-col">
    <p v-if="index !== undefined" class="font-display text-3xl text-brand-gold-dark">
      {{ String(index).padStart(2, '0') }}
    </p>
    <h3 class="font-display text-2xl text-brand-ink leading-snug" :class="index !== undefined ? 'mt-4' : ''">
      {{ title }}
    </h3>
    <p class="mt-4 text-slate-700 leading-relaxed flex-1">{{ description }}</p>
  </article>
</template>
