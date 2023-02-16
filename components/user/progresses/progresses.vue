<template>
  <div class="w-full">
    <u-divider title="وضعیت دوره ها" />
    <div class="courses-status">
      <user-progresses-course-progress title="آموزش جامع آنریل انجین" link="/courses/1" :progress="95" />
      <user-progresses-course-progress title="آموزش ++C در آنریل انجین" link="/courses/1" :progress="40" />
      <user-progresses-course-progress title="آموزش Save و Load آنریل انجین" link="/courses/1" :progress="66" />
      <user-progresses-course-progress title="آموزش مولتی پلیر آنریل انجین" link="/courses/1" :progress="12" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>