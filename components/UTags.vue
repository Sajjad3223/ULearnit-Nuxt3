<template>
  <div class="tags">
    <strong>{{ title }}:</strong>
    <ul>
      <li v-for="tag in tags">
        <NuxtLink class="font-sans" :to="`/courses?search=${tag.replace(' ','-')}`">{{tag}}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  tags:{
    type:Array,
    required:true
  },
  title:{
    type:String,
    required:true,
  }
})
</script>