<template>
  <u-modal v-model="showModal" title="ویرایش سرفصل" >
    <Form @submit="editSection" :validation-schema="editSectionSchema" v-slot="{valid}">
      <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <base-input name="title" v-model="editSectionData.title" label="عنوان سرفصل" placeholder="عنوان سرفصل را وارد کنید" />
        <base-input type="number" name="displayOrder" v-model="editSectionData.displayOrder" label="اولویت نمایش"/>
        <base-input name="description" v-model="editSectionData.description" label="توضیحات سرفصل"
                    multiline placeholder="توضیحات سرفصل را وارد کنید" class="sm:col-span-2"/>
      </div>
      <base-button color="cta" class="mt-2 flex items-center mr-auto" type="submit">
        <svg class="ml-1 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
        ویرایش سرفصل
      </base-button>
    </Form>
  </u-modal>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import * as Yup from "yup";
import {EditSection} from "~/services/course.service";
import {EditSectionViewModel} from "~/models/course/editSectionViewModel";
import {SectionDto} from "~/models/course/courseDto";

const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false,
  },
  courseId:{
    type:Number,
    default:0,
  }
})

const emits = defineEmits(['sectionUpdated'])

const showModal = ref(false);

const editSectionSchema = Yup.object().shape({
  title: Yup.string().required("عنوان سرفصل الزامی است"),
  description: Yup.string().required("توضیحات سرفصل الزامی است"),
});

const editSectionData:EditSectionViewModel = reactive({
  courseId: 0,
  sectionId: 0,
  title: "",
  description: "",
  displayOrder: 0,
});

const setSection = (section:SectionDto)=>{
  editSectionData.sectionId = section.id;
  editSectionData.title = section.title;
  editSectionData.description = section.description;
  editSectionData.displayOrder = section.displayOrder;
};

const editSection = async ()=>{
  const courseId = props.courseId;
  editSectionData.courseId = courseId;
  const result = await EditSection(editSectionData);
  if(result.isSuccess)
  {
    editSectionData.title = "";
    editSectionData.description = "";
    showModal.value = false;
    emits('sectionUpdated');
  }
}

defineExpose({
  setSection,
  showModal
})
</script>