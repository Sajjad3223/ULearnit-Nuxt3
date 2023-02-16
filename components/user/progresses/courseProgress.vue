<template>
  <div>
    <div class="flex justify-between mb-1">
      <NuxtLink :to="link" class="text-base font-medium text-blue-700 dark:text-white hover:underline underline-offset-8">
        {{ title }}</NuxtLink>
      <span :class="['text-sm font-medium dark:text-white',
      {'text-red-700':progress <= 20},
      {'text-yellow-700':progress > 20 && progress <= 50},
      {'text-blue-700':progress > 50 && progress <= 80},
      {'text-green-700':progress > 80},
      ]">{{progress}}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div :class="[{'bg-red-600':progress <= 20},
                    {'bg-yellow-600':progress > 20 && progress <= 50},
                    {'bg-blue-600':progress > 50 && progress <= 80},
                    {'bg-green-600':progress > 80},
                    'h-2.5 rounded-full']"
           :style="{width: progress + '%'}"></div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title:{
      type:String,
      required:true,
    },
    link:{
      type:String,
      required:true,
    },
    progress:{
      type:Number,
      required:true,
    }
  })

  const color = computed(()=>{
    if(props.progress <= 20)
      return 'red';
    else if(props.progress > 20 && props.progress <= 50)
      return 'yellow';
    else if(props.progress > 50 && props.progress <= 90)
      return 'blue';
    else
      return 'green';
  })
</script>

<style scoped>

</style>