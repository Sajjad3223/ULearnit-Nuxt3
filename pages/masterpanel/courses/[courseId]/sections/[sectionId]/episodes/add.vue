<template>
  <div>
    <Head>
      <Title>
        قسمت جدید
      </Title>
    </Head>

    <div class="w-full">
      <u-divider title="افزودن قسمت جدید" />
      <div class="mt-6">
        <Form @submit="addEpisode" :validation-schema="createEpisodeSchema">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <base-input label="عنوان قسمت" name="title" v-model="createEpisodeData.title" placeholder="عنوان را وارد کنید" />
            <base-input label="عنوان انگلیسی قسمت" name="englishTitle" v-model="createEpisodeData.englishTitle" placeholder="عنوان انگلیسی را وارد کنید" dir="ltr"/>
            <base-input label="توضیحات قسمت" name="description" v-model="createEpisodeData.description" multiline placeholder="توضیحات را وارد کنید" class="sm:col-span-2"/>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">ویدئوی این قسمت (فرمت mp4)</label>
              <input @input="UploadVideo"
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input" type="file">
              <master-upload-progress :value="uploadVideoPercentage">{{uploadVideoPercentage}}</master-upload-progress>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">فایل ضمیمه (فرمت rar)</label>
              <input @input="UploadAttachment"
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input" type="file">
              <master-upload-progress :value="uploadAttachPercentage">{{uploadAttachPercentage}}</master-upload-progress>
            </div>

            <base-input label="زمان ویدئو" name="time" v-model="createEpisodeData.time" placeholder="02:15:23" dir="ltr"/>

            <div class="self-end">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="isFree" id="isFree" value="" class="sr-only peer" v-model="createEpisodeData.isFree">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">رایگان؟</span>
              </label>
            </div>

          </div>

          <base-button type="submit" class="w-1/3 flex mr-auto justify-center mt-4" :disabled="!canSubmit">
            ثبت قسمت جدید
          </base-button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import * as Yup from "yup";
import {CreateEpisodeViewModel} from "~/models/course/createEpisodeViewModel";
import {CreateEpisode} from "~/services/course.service";

definePageMeta({
  layout:"user",
middleware:'master'
});

const createEpisodeSchema = Yup.object().shape({
  title: Yup.string().required("عنوان الزامی است"),
  englishTitle: Yup.string().required("عنوان انگلیسی الزامی است"),
  description: Yup.string().required("توضیحات الزامی است"),
  time: Yup.string().required("زمان الزامی است "),
});

const createEpisodeData:CreateEpisodeViewModel = reactive({
  courseId: 0,
  sectionId: 0,
  title: "",
  englishTitle: "",
  description: "",
  time: "",
  videoFile: "",
  attachmentFile: "",
  isFree: false,
});

const canSubmit = ref(false);

const route = useRoute();
const router = useRouter();
const courseId = computed(()=>Number.parseInt(route.params['courseId'].toString()));
const sectionId = computed(()=>Number.parseInt(route.params['sectionId'].toString()));


const addEpisode = async ()=>{
  createEpisodeData.courseId = courseId.value;
  createEpisodeData.sectionId = sectionId.value;
  const result = await CreateEpisode(createEpisodeData);
  if(result.isSuccess)
  {
    alert("قسمت با موفقیت اضافه شد")
    router.push(`/masterpanel/courses/${courseId.value}/sections/${sectionId.value}/episodes/`);
  }
}


import axios from "axios";
import {useAuthStore} from "~/stores/authStore";
import {ApiUrl} from "~/utilities/ApiUrls";
const uploadAttachPercentage = ref(0);
const UploadAttachment = async (e)=>{
  const file = e.target.files[0];
  const url = `${ApiUrl}/api/Course/upload-attach`;
  const form = new FormData()
  form.append('file', file)
  form.append('courseId', courseId.value.toString());
  form.append('sectionId', sectionId.value.toString());

  if(confirm("آیا از آپلود فایل انتخاب شده اطمینان دارید؟"))
  {
    const authStore = useAuthStore();
    const data = await axios.post(url,form,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore?.loginResult?.token}`,
      },
      onUploadProgress: function( progressEvent ) {
        uploadAttachPercentage.value = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ) );
      }.bind(this)
    }).then(function(response){
      createEpisodeData.attachmentFile = response.data.data;
      canSubmit.value = true;
    })
    .catch(function(){
      alert('در آپلود فایل مشکلی پیش آمده است');
    });
  }
}

const uploadVideoPercentage = ref(0);
const UploadVideo = async (e)=> {
  canSubmit.value = false;
  const file = e.target.files[0];
  const url = `${ApiUrl}/api/Course/upload-episode`;
  const form = new FormData()
  form.append('file', file)
  form.append('courseId', courseId.value.toString());
  form.append('sectionId', sectionId.value.toString());

  if(confirm("آیا از آپلود فایل انتخاب شده اطمینان دارید؟"))
  {
    const authStore = useAuthStore();
    const data = await axios.post(url,form,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore?.loginResult?.token}`,
      },
      onUploadProgress: function( progressEvent ) {
        uploadVideoPercentage.value = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ) );
      }.bind(this)
    }).then(function(response){
      createEpisodeData.videoFile = response.data.data;
      canSubmit.value = true;
    })
    .catch(function(){
      alert('در آپلود فایل مشکلی پیش آمده است');
    });
  }
}
</script>