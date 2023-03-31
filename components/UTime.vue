<template>
  <time class="pl-2 border-dotted" pubdate datetime="19-57"
        :title="getTimeTitle">
    {{ getTwoDigits(new Date(time).getMinutes()) }}
    :
    {{ getTwoDigits(new Date(time).getHours()) }}
  </time>
</template>

<script setup lang="ts">
const props = defineProps<{
  time:Date
}>();

const getTwoDigits = (num)=>{
  return  num < 10 ? '0' : '' + num;
}

const getTimeTitle = computed(()=>{
  return `ساعت ${new Date(props.time).getHours()} و ${new Date(props.time).getMinutes()} دقیقه`
})

</script>