<template>

  <main class="container ">

    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <NuxtLink to="/" class="flex items-end mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-[300px] shadow" src="/imgs/light-ulearnit.png" alt="logo">
        </NuxtLink>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <slot />
        </div>
      </div>
    </section>

  </main>

</template>

<script setup>
</script>