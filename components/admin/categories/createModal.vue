<template>
  <u-modal title="افزودن دسته بندی جدید">
    <template #default>
      <Form @submit="createCategory" class="flex flex-col p-4 space-y-4">
        <base-input
            name="title"
            label="عنوان"
            v-model="createCategoryData.title"
        />
        <base-input
            name="slug"
            label="اسلاگ"
            v-model="createCategoryData.slug"
        />
        <base-button type="submit">ثبت دسته بندی</base-button>
      </Form>
    </template>
  </u-modal>
</template>

<script setup lang="ts">
import {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import {Form} from "vee-validate";
import {CreateCourseCategory} from "~/services/courseCategory.service";
import {CreateBlogCategory} from "~/services/blogCategory.service";
import {errorAlert, successAlert} from "~/services/alert.service";
import {CreateRoadmapCategory} from "~/services/roadmapCategory.service";

const props = defineProps({
  categoryType:{
    type:String,
    default:'course'
  }
});
const emits = defineEmits(["categoryCreated"]);

const createCategoryData:CreateCategoryViewModel = reactive({
  title: "",
  slug: "",
});

const createCategory= async ()=>{
  const cType = props.categoryType;
  console.log(cType);
  let result;
  if (cType === 'course') {
    result = await CreateCourseCategory(createCategoryData);
  } else if (cType === 'blog') {
    result = await CreateBlogCategory(createCategoryData);
  } else if (cType === 'roadmap') {
    result = await CreateRoadmapCategory(createCategoryData);
  }
  if(result?.isSuccess)
  {
    createCategoryData.title = "";
    createCategoryData.slug = "";
    emits('categoryCreated');
    successAlert('دسته بندی با موفقیت اضافه شد!');
  }
  else{
    errorAlert();
  }
}
</script>