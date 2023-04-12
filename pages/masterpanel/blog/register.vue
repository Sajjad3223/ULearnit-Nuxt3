<template>
  <div>
    <Head>
      <Title>
        ثبت نام نویسنده مقالات
      </Title>
    </Head>
    <div class="w-full">
      <h4 class="text-xl font-bold">ثبت نام نویسنده</h4>
      <hr class="my-2">
      <div class="mt-6">
        <Form @submit="Register" :validation-schema="registerWriterValidationSchema">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <base-input label="نام و نام خانوادگی" name="fullName" v-model="registerWriterData.fullName" />
            <base-input label="نام کاربری" name="userName" v-model="registerWriterData.userName" />
            <base-file-uploader title="آواتار" name="avatar" v-model="registerWriterData.avatar" accept-format="image" />
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
import {RegisterWriter} from "~/services/blog.service";
import {errorAlert, successAlert} from "~/services/alert.service";
import {RegisterWriterViewModel} from "~/models/blog/registerWriterViewModel";

definePageMeta({
  layout:"user",
  middleware:'complete-user-info'
})

const registerWriterValidationSchema = Yup.object().shape({
  fullName:Yup.string().required("نام و نام خانوادگی الزامی است"),
  userName:Yup.string().required("نام کاربری الزامی است"),
});

const registerWriterData:RegisterWriterViewModel = reactive({
  fullName: "",
  userName: "",
  avatar: "",
});

const router = useRouter();
const Register= async ()=>{
  const result = await RegisterWriter(registerWriterData);
  if(result.isSuccess)
  {
    successAlert();
    router.push("/masterpanel/blog");
  }
  else{
    errorAlert(result.metaData.message)
  }
}

</script>