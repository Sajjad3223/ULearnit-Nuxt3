<template>
  <div>
    <span @click="toggleAccordion"
          :class="['cursor-pointer w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'
          ,{'bg-gray-100':isOpen},{'dark:bg-gray-700':isOpen},{'rounded-b-none':isOpen}]">
      <slot name="icon"/>
      <span class="mr-3">{{title}}</span>
      <svg :class="['mr-auto scale-75 transition-all duration-200',{'rotate-90':isOpen}]"
           width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" fill="currentColor"/>
      </svg>
    </span>

    <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster">
      <ul v-if="isOpen" class="bg-gray-900 rounded-b-md">
        <slot />
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title:{
    type:String,
    required:true
  },
})

const isOpen = ref(false);

const toggleAccordion=()=>{
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
  li::before{
    @apply content-[''] h-full w-px bg-white;
  }
</style>