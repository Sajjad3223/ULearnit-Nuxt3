<template>
  <NuxtLink v-if="isLink === true" :to="link" :class="['btn',
   color != '' ? outline ? `btn-outline-${color}`:`btn-${color}` : '',
   {'w-full':wFull},
   {'flex-1':fillFlex}]">
    <slot />
  </NuxtLink>

  <button v-else type="submit" :class="['btn','cursor-pointer',
   color != '' ? outline ? `btn-outline-${color}`:`btn-${color}` : '',
   {'w-full':wFull},
   {'flex-1':fillFlex}]">
    <slot />
  </button>
</template>

<script setup>
  defineProps({
    isLink:{
      type:Boolean,
      default:false,
    },
    link:{
      type:String,
      required:false,
    },
    color:{
      type: String,
      required: false,
      default: "primary"
    },
    outline:{
      type:Boolean,
      default:false
    },
    wFull:{
      type:Boolean,
      default:false,
    },
    fillFlex:{
      type:Boolean,
      default:false,
    }
  });

</script>

<style scoped>

.btn-cta{
  @apply text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition;
}
.btn-outline-cta{
  @apply ring-2 ring-amber-500 hover:bg-amber-500 transition;
}
.btn-primary{
  @apply text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition;
}
.btn-outline-primary{
  @apply ring-2 ring-indigo-500 hover:bg-indigo-500 transition;
}
.btn-success{
  @apply text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition;
}
.btn-outline-success{
  @apply ring-2 ring-green-600 hover:bg-green-600 transition;
}
.btn-info{
  @apply bg-gradient-to-br from-cyan-500 to-cyan-700 hover:drop-shadow-md transition;
}
.btn-outline-info{
  @apply ring-2 ring-cyan-600 hover:bg-cyan-600 transition;
}
.btn-secondary{
  @apply bg-gradient-to-br from-slate-600 to-slate-800 hover:drop-shadow-md transition;
}
.btn-outline-secondary{
  @apply ring-2 ring-slate-700 hover:bg-gray-700 transition;
}
.btn-danger{
  @apply text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition;
}
.btn-outline-danger{
  @apply ring-2 ring-red-500 hover:bg-red-500 transition;
}
</style>