<template>
  <div class="relative inline-flex items-center justify-center w-full mb-4">
    <Head>
      <Title>
        {{title}}
      </Title>
    </Head>
    <hr class="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
    <h4 :class="['absolute px-3 text-gray-900 whitespace-nowrap -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900',`font-${font}`,`text-${size}`]">
      {{title}}
    </h4>
  </div>
</template>

<script setup>
  defineProps({
    title:{
      type:String,
      required:true
    },
    size:{
      type:String,
      default:'lg'
    },
    font:{
      type:String,
      default:'medium'
    },
    isTitle:{
      type:Boolean,
      default:true
    }
  })
</script>

<style scoped>

</style>