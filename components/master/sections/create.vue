<template>
  <u-modal v-model="showModal" title="سرفصل جدید" >
    <Form @submit="addSection" :validation-schema="createSectionSchema" v-slot="{valid}">
      <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <base-input name="title" v-model="createSectionData.title" label="عنوان سرفصل" placeholder="عنوان سرفصل را وارد کنید" />
        <base-input type="number" name="displayOrder" v-model="createSectionData.displayOrder" label="اولویت نمایش"/>
        <base-input name="description" v-model="createSectionData.description" label="توضیحات سرفصل"
                    multiline placeholder="توضیحات سرفصل را وارد کنید" class="sm:col-span-2"/>
      </div>
      <base-button class="mt-2 flex items-center mr-auto" type="submit">
        <svg class="ml-1 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
        افزودن سرفصل جدید
      </base-button>
    </Form>
  </u-modal>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import * as Yup from "yup";
import {CreateSectionViewModel} from "~/models/course/createSectionViewModel";
import {CreateSection} from "~/services/course.service";
import Swal from 'sweetalert2';

const props = defineProps({
  courseId:{
    type:Number,
    default:0,
  }
});
const emits = defineEmits(["sectionCreated","update:modelValue"])

const showModal = ref(false);

const createSectionSchema = Yup.object().shape({
  title: Yup.string().required("عنوان سرفصل الزامی است"),
  description: Yup.string().required("توضیحات سرفصل الزامی است"),
});

const createSectionData:CreateSectionViewModel = reactive({
  courseId: 0,
  title: "",
  description: "",
  displayOrder: 0,
});

const addSection = async ()=>{
  const courseId = props.courseId;
  createSectionData.courseId = courseId;
  const result = await CreateSection(createSectionData);
  if(result.isSuccess)
  {
    createSectionData.title = "";
    createSectionData.description = "";
    showModal.value = false;
    await Swal.fire({
      title:'سرفصل با موفقیت اضافه شد',
      icon:'info',
    })
    emits('sectionCreated');
  }
}

defineExpose({
  showModal,
})
</script>