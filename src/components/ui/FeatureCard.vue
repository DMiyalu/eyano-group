<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="card group">
    <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-cream text-2xl ring-1 ring-brand-gold/20 group-hover:scale-105 transition">
      {{ icon }}
    </div>
    <h3 class="mt-4 text-lg font-semibold text-brand-ink">{{ title }}</h3>
    <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ description }}</p>
  </div>
</template>
