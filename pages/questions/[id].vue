<template>
  <div class="flex-1 flex flex-col lg:ml-6">
    <h2 class="text-2xl font-bold">پرسش و پاسخ: <span class="font-medium">در اتاق در پروژه عملی باز نمیشه</span></h2>
    <bread-crumb :links="[
              {link:'/questions',title:'پرسش و پاسخ'},
              {link: '/courses/1',title: 'آموزش کار با موتور بازی سازی آنریل انجین'},
              {link: '',title: 'در اتاق در پروژه عملی باز نمیشه'},
              ]" />

    <div class="mt-8">
      <questions-question-q />
      <u-divider title="پاسخ ها" class="mt-4" size="base" font="light"/>
      <div>
        <questions-question-a class="py-4 first-of-type:pt-0" is-correct />
        <questions-question-a class="py-4 first-of-type:pt-0" />
        <questions-question-a class="py-4 first-of-type:pt-0" />
      </div>
    </div>

    <u-divider title="ارسال پاسخ" class="mt-8 mb-0" size="base" font="light"/>

    <send-comment/>
  </div>
</template>

<script setup>

import SendComment from "~/components/comments/send-comment.vue";

definePageMeta({
  layout:'question',
})
</script>