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
    <div v-if="eyebrow" :class="['flex items-center gap-3', align === 'center' ? 'justify-center' : '']">
      <span class="rule-gold"></span>
      <p class="eyebrow">{{ eyebrow }}</p>
    </div>
    <h2 class="display-3 mt-5">{{ title }}</h2>
    <p v-if="subtitle" :class="['lead mt-5', align === 'center' ? 'mx-auto' : '']">
      {{ subtitle }}
    </p>
  </div>
</template>
