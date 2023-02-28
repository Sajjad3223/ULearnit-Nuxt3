<template>
  <div class="container mx-auto">
    <base-navbar />

    <main class="render-body">
      <div>
        <user-sidebar />
        <div class="panel-details">
          <slot/>
        </div>
      </div>
    </main>

    <base-footer />
  </div>
</template>

<script setup lang="ts">

useHead({
  link: [
    {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
  ],
})

</script>