<template>
  <time class=" border-dotted" pubdate
        :title="getTitleDate">
    {{ new Date(date).toLocaleDateString('fa-IR') }}
  </time>
</template>

<script setup lang="ts">
const props = defineProps<{
  date:Date,
}>();

const getTitleDate = computed(():string=>{
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let day = new Date(props.date).toLocaleDateString('fa-IR', options);
  return day;
})
</script>