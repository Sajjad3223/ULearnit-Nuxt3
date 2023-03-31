<template>
  <div class="flex-1 flex flex-col lg:ml-6" v-if="question">
    <h2 class="text-2xl font-bold">پرسش و پاسخ: <span class="font-medium">{{question.title}}</span></h2>
    <bread-crumb :links="[
              {link:'/questions',title:'پرسش و پاسخ'},
              {link: `/questions/course?postType=0&postId=${question.postId}`,title: question.postTitle},
              {link: '',title: question.title},
              ]" />

    <div class="mt-8">
      <questions-question-q  :question="question"/>
      <u-divider title="پاسخ ها" class="mt-4" size="base" font="light"/>
      <div v-if="question.answers.length > 0" class="flex flex-col-reverse">
        <questions-question-a class="py-4 first-of-type:pt-0" v-for="a in question.answers" :key="a" :answer="a" @questionSolved="loadData" :is-solved="question.isResolved"/>
      </div>
      <u-alert v-else color="dark">هنوز هیچ پاسخی وجود ندارد!</u-alert>
    </div>

    <u-divider title="ارسال پاسخ" class="mt-8 mb-0" size="base" font="light"/>

    <send-answer :question-id="question.id" @answerSent="loadData"/>
  </div>
</template>

<script setup lang="ts">
import {QuestionDto} from "~/models/question/questionDto";
import {GetQuestion} from "~/services/question.service";
import SendAnswer from "~/components/questions/send-answer.vue";

definePageMeta({
  layout:'question',
})

const question = ref<QuestionDto>();
const route = useRoute();
onMounted(async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetQuestion(Number(route.params?.id?.toString()))
  if(result.isSuccess)
    question.value = result.data;
}

</script>