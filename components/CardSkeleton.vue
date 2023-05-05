<template>
  <div class="card bg-gray-800">
    <div class="animate-pulse">
      <div class="w-full bg-gray-700 h-[200px]"></div>
      <div class="cardInfo flex flex-col items-start space-y-4">
        <div class="w-full p-2 rounded-full bg-gray-700"></div>
        <div class="w-full flex items-center gap-4">
          <div class="w-1/2 p-2 rounded-full bg-gray-700"></div>
          <div class="w-1/2 p-2 rounded-full bg-gray-700"></div>
        </div>
        <div class="w-1/2 p-2 rounded-full bg-gray-700"></div>
        <div class="w-full p-2 py-6 rounded-lg bg-gray-700"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  @apply flex flex-col rounded-lg relative overflow-clip bg-gray-100 dark:bg-gray-800 shadow-md;
}
.cardInfo{
  @apply flex flex-col py-4 px-6;
}
</style>