<template>
  <div>
    <div class="w-full">
      <h4 class="text-xl font-bold">ثبت نام نویسنده</h4>
      <hr class="my-2">
      <div class="mt-6">
        <Form @submit="Register" :validation-schema="registerWriterValidationSchema">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <base-input label="نام و نام خانوادگی" name="fullName" v-model="registerWriterData.fullName" />
            <base-input label="نام کاربری" name="userName" v-model="registerWriterData.userName" />
            <base-file-uploader title="آواتار" name="avatar" v-model="registerWriterData.avatar" />
          </div>
          <base-button type="submit" class="w-1/3 flex mr-auto justify-center mt-4" >
            ثبت درخواست
          </base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import * as Yup from "yup";
import {errorAlert, successAlert} from "~/services/alert.service";
import {RegisterWriterViewModel} from "~/models/blog/registerWriterViewModel";
import {RegisterRoadmapWriter} from "~/services/roadmap.service";

definePageMeta({
  layout: "user",
})

const registerWriterValidationSchema = Yup.object().shape({
  fullName:Yup.string().required("نام و نام خانوادگی الزامی است"),
  userName:Yup.string().required("نام کاربری الزامی است"),
  avatar:Yup.string().required("آواتار الزامی است"),
});

const registerWriterData:RegisterWriterViewModel = reactive({
  fullName: "",
  userName: "",
  avatar: "",
});

const router = useRouter();
const Register= async ()=>{
  const result = await RegisterRoadmapWriter(registerWriterData);
  if(result.isSuccess)
  {
    successAlert();
    router.push("/masterpanel/roadmap");
  }
  else{
    errorAlert(result.metaData.message)
  }
}

</script>