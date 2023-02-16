<template>
  <div class="course-comments" id="comments">
    <div class="title">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 8H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h4>نظرات کاربران:</h4>
      <div>
        (<span class="text-warning">127</span> نظر)
      </div>
    </div>
    <div class="alert alert-warning">
      لطفا سوالات خود را راجع به این آموزش در این بخش پرسش و پاسخ مطرح کنید به سوالات در قسمت نظرات  پاسخ داده نخواهد شد و آن نظر حذف میشود.
    </div>
    <send-comment />
    <section class="bg-white dark:bg-gray-900 py-8 ">
      <div class="w-full mx-auto px-4">
        <comment />
        <comment is-child />
        <comment />
        <comment />
      </div>
    </section>
  </div>
</template>

<script setup>
import SendComment from "~/components/comments/send-comment.vue";
import Comment from "~/components/comments/comment.vue";
</script>

<style scoped>

</style>