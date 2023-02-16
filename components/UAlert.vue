<template>
  <div :class="['alert',
                {'alert-primary':color === 'primary'},
                {'alert-danger':color === 'danger'},
                {'alert-success':color === 'success'},
                {'alert-warning':color === 'warning'},
                {'alert-dark':color === 'dark'}]"
       role="alert">
    <slot name="icon"/>
    <span class="sr-only">Info</span>
    <div>
      <slot></slot>
      <ul class="mt-1.5 mr-4 list-disc list-inside">
        <slot name="list"/>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style scoped>
  .alert{
    @apply flex p-4 mb-4 text-sm rounded-lg border-2 border-dashed;
  }
  .alert-primary{
    @apply text-blue-800 bg-blue-50 border-white dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400;
  }
  .alert-danger{
    @apply text-red-800 bg-red-50 border-white dark:bg-gray-800 dark:border-gray-700 dark:text-red-400;
  }
  .alert-success{
    @apply text-green-800 bg-green-50 border-white dark:bg-gray-800 dark:border-gray-700 dark:text-green-400;
  }
  .alert-warning{
    @apply text-yellow-800 bg-yellow-50 border-white dark:bg-gray-800 dark:border-gray-700 dark:text-yellow-300;
  }
  .alert-dark{
    @apply text-gray-800 bg-gray-50 border-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300;
  }
</style>