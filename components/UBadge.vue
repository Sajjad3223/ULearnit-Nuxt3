<template>
  <span :class="['badge',`badge-${color}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{
    color:'primary' | 'success' | 'danger' | 'warning' | 'dark'
  }>(),{
    color:'primary'
  })
</script>

<style scoped>
.badge{
  @apply inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded whitespace-nowrap w-max;
}
.badge-warning{
  @apply bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300;
}
.badge-danger{
  @apply bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300;
}
.badge-primary{
  @apply bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300;
}
.badge-success{
  @apply bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300;
}
.badge-dark{
  @apply bg-gray-100 text-gray-800  dark:bg-gray-700 dark:text-gray-300;
}
</style>