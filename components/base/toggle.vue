<template>
  <div class="self-end">
    <label class="relative inline-flex items-center cursor-pointer">
      <input ref="toggle" type="checkbox" :name="name" :id="name" class="sr-only peer" :value="value" :checked="isChecked">
      <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{title}}</span>
    </label>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title:string,
  name:string,
  value:boolean | number | string,
  isChecked:boolean
}>();

</script>