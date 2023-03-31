<template>
  <time class="pr-2 border-dotted" pubdate datetime="2022-02-08"
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