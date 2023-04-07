<template>
  <div>
    <u-divider title="پرسش های من" />
    <div class="w-full mt-4">
      <u-table >
        <template #table-header>
          <th scope="col" class="px-4 py-3">عنوان پرسش</th>
          <th scope="col" class="px-4 py-3">دوره مربوطه</th>
          <th scope="col" class="px-4 py-3">وضعیت</th>
          <th scope="col" class="px-4 py-3">تاریخ ثبت</th>
          <th scope="col" class="px-4 py-3">توضیحات</th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700" v-for="(q,i) in userQuestions">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/questions/${q.postId}/${q.id}`" class="link">{{q.title}}</NuxtLink>
            </th>
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/questions/course?postType=0&postId=${q.postId}`" class="link">{{q.postTitle}}</NuxtLink>
            </th>
            <td class="px-4 py-3">

              <u-badge v-if="q.isResolved" color="success">حل شده</u-badge>
              <u-badge v-if="!q.isResolved && q.answersCount === 0" >بدون پاسخ</u-badge>
              <u-badge v-if="!q.isResolved && q.answersCount > 0" color="warning">پاسخ داده شده</u-badge>
            </td>
            <td class="px-4 py-3">{{new Date(q.creationDate).toLocaleDateString('fa-IR')}}</td>
          </tr>
        </template>
      </u-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {QuestionFilterData} from "~/models/question/questionFilterParams";
import {GetQuestionsOfUser} from "~/services/question.service";

definePageMeta({
  layout: "user",
})

const userQuestions = ref<QuestionFilterData>()

onMounted( async ()=>{
  const result = await GetQuestionsOfUser();
  if(result.isSuccess)
    userQuestions.value = result.data.data;
})
</script>