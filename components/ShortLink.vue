<template>
  <div class="w-full flex items-center p-2 py-3 border-2 pl-10 border-indigo-500 rounded-lg relative">
    <svg class=" ml-1 lg:ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.99 17.5H16.5C19.52 17.5 22 15.03 22 12C22 8.98 19.53 6.5 16.5 6.5H14.99" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 12H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <strong class="text-sm">لینک کوتاه:</strong>
    <span ref="shortLink" class="link text-sm mx-auto font-mono" dir="ltr">{{link}}</span>

    <button @click.prevent="copyLink"
            id="copyLink" data-tooltip-target="copy-link-tooltip"
            class="absolute grid place-items-center left-0 top-0 bottom-0 p-3 bg-indigo-500">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6 2H15.6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div id="copy-link-tooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      کپی لینک
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const shortLink = ref();

defineProps({
  link:{
    type:String,
    required:true,
  }
});

const copyLink = ()=>{
  navigator.clipboard.writeText(shortLink.value.innerText)
}
</script>

<style scoped>

</style>