<template>
  <u-modal title="افزودن زیر مجموعه جدید">
    <template #default>
      <Form @submit="addCategoryChild" class="flex flex-col p-4 space-y-4">
        <base-input
            name="title"
            label="عنوان"
            v-model="addCategoryChildData.title"
        />
        <base-input
            name="slug"
            label="اسلاگ"
            v-model="addCategoryChildData.slug"
        />
        <base-button type="submit">ثبت زیر مجموعه</base-button>
      </Form>
    </template>
  </u-modal>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import {AddCourseCategoryChild} from "~/services/admin/courseCategory.service";
import {AddBlogCategoryChild} from "~/services/admin/blogCategory.service";
import {errorAlert, successAlert} from "~/services/alert.service";

const props = defineProps({
  categoryType:{
    type:String,
    default:'course'
  }
});

const emits = defineEmits(["childCategoryCreated"]);

const addCategoryChildData:AddCategoryChildViewModel = reactive({
  parentId: 0,
  title: "",
  slug: "",
});

let parentId = ref(0);

const setParentId=(id:any)=>{
  console.log(id)
  parentId.value = id;
}

const addCategoryChild= async ()=>{
    addCategoryChildData.parentId = parentId.value;
    const cType = props.categoryType;
    let result;
  if (cType === 'course') {
    result = await AddCourseCategoryChild(addCategoryChildData);
  } else if (cType === 'blog') {
    result = await AddBlogCategoryChild(addCategoryChildData);
  }
  if(result?.isSuccess)
  {
    addCategoryChildData.title = "";
    addCategoryChildData.slug = "";
    emits('childCategoryCreated');
    successAlert('دسته بندی با موفقیت اضافه شد!');
  }
  else{
    errorAlert();
  }
}

defineExpose({
  setParentId,
})
</script>