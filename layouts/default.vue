<template>
  <div class="container mx-auto">
   <base-navbar/>

    <main class="container px-4 md:mx-auto flex-col mt-8">

      <slot />

    </main>

    <base-footer/>
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
  ],
  script: [
  ]
})
</script>