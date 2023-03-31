<template>
  <div class="flex-1 flex flex-col lg:ml-6">
    <h2 class="text-2xl font-bold">افزودن پرسش جدید</h2>
    <bread-crumb :links="[
              {link:'/questions',title:'پرسش و پاسخ'},
              {link: '',title: 'آموزش کار با موتور بازی سازی آنریل انجین'}
              ]" />

    <!-- <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"> -->

    <div class="p-4 mt-4 border-2 border-gray-800 rounded-lg">
      <u-alert color="warning">
        توجه داشته باشید : عنوان سوال نباید کمتر از 2 و بیشتر از 12 بخش باشد .در صورت پرسیدن سوال نا مربوط و یا با عنوان نا مناسب سوال شما حذف خواهد شد.
      </u-alert>
      <Form :validation-schema="addQuestionSchema" @submit="AddQuestion" class="space-y-4">
        <base-input label="عنوان پرسش" name="title" v-model="addQuestionData.title" />
        <input-c-k-editor title="متن پرسش" v-model="addQuestionData.text" />
        <base-button type="submit" class="mr-auto flex w-1/3 justify-center">
          ایجاد پرسش
        </base-button>

      </Form>

    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {AddQuestionViewModel, EPostType} from "~/models/question/addQuestionViewModel";
import * as Yup from "yup";
import {CreateQuestion} from "~/services/question.service";
import {errorAlert, successAlert} from "~/services/alert.service";

definePageMeta({
  layout:'question',
})

const addQuestionSchema = Yup.object().shape({
  title:Yup.string().required("عنوان پرسش را وارد کنید"),
})

const route = useRoute();
const router = useRouter();
const addQuestionData:AddQuestionViewModel=reactive({
  postId : Number(route.params.postId),
  postType : EPostType.Course,
  title : "",
  text : ""
});

const AddQuestion = async ()=>{
  const result = await CreateQuestion(addQuestionData);
  if(result.isSuccess)
  {
    successAlert("پرسش با موفقیت ایجاد شد!");
    router.push(`/questions/${addQuestionData.postId}/${result.data}`)
  }
  else {
    errorAlert();
  }
}

</script>
