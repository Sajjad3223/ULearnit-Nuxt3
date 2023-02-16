<template>
  <div class="w-full">
    <u-divider title="دوره های پسندیده شده" />
    <div class="liked-courses">
      <ul>
        <user-favorites-favorite title="دوره آموزش آنریل انجین" link="/courses/1" v-for="i in 5" />
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>