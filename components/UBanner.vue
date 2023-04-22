<template>
  <div class="banners">
    <div class="banner">

      <h2>
        یونیتی
      </h2>
      <img src="/imgs/Unity-Icon.png" alt="unity-icon" class="UnityIcon">
      <base-button link="/courses/1" is-link color="cta" class="absolute left-4 bottom-4 text-sm lg:text-base">
        مشاهده دوره ها
      </base-button>
    </div>
    <div class="banner">

      <h2>
        آنریل انجین
      </h2>
      <img src="/imgs/UE-Icon.png" alt="UE-icon" class="UnrealIcon">
      <base-button is-link color="cta" class="absolute left-4 bottom-4 text-sm lg:text-base">
        مشاهده دوره ها
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.banners{
  @apply w-full mt-4 lg:m-4 flex flex-col lg:flex-row;
}
.banner{
  @apply relative flex w-full lg:w-1/2 min-h-[12rem] border-2 rounded-lg dark:border-white border-red-300 items-center my-4 lg:m-8 justify-center p-4 lg:space-x-4 lg:space-x-reverse bg-gradient-to-br dark:from-slate-700 dark:to-slate-900 from-red-200 to-blue-400;
}
.banner > h2{
  @apply text-2xl lg:text-5xl font-medium;
}
.banner > img.UnityIcon{
  @apply w-28 lg:w-36 drop-shadow-lg;
}
.banner > img.UnrealIcon{
  @apply w-28 lg:w-48 drop-shadow-lg;
}
</style>