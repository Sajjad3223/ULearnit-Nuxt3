<template>
  <div class="w-full rounded-full grid mt-2" v-if="value > 5">
    <div :class="['relative rounded-full px-4 h-full transition-all',
                  {'bg-green-500':value === 100},
                  {'bg-indigo-500':value != 100}]" :style="{width:`${value}%`}">
      
      <span class="absolute left-4 whitespace-nowrap">
      <slot/> %
    </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  value:{
    type:Number,
    default:0
  }
})
</script>