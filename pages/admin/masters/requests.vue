<template>
  <div>
    <u-divider title="مدرسین"/>

    <u-table ref="dataTable">
      <template #table-header>
        <th scope="col" class="px-4 py-3">آواتار مدرس</th>
        <th scope="col" class="px-4 py-3">نام مدرس</th>
        <th scope="col" class="px-4 py-3">فایل رزومه</th>
        <th scope="col" class="px-4 py-3">ایمیل</th>
        <th scope="col" class="px-4 py-3">تلفن همراه</th>
        <th scope="col" class="px-4 py-3">
          <span class="sr-only">عملیات</span>
        </th>
      </template>
      <template v-slot:table-body="{showOption}">
        <tr class="border-b dark:border-gray-700" v-for="(r,i) in requests">
          <th class="p-2 w-2/12">
            <img :src="getUserAvatar(r.user.avatar)" class="rounded-full max-w-[50px]">
          </th>
          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <NuxtLink :to="`/profile/${r.user.id}`" class="link" >{{ r.user.fullName }}</NuxtLink>
          </th>
          <td class="px-4 py-3">
            <a download :href="getUserResume(r.cvFileName)">
              <u-badge color="primary">فایل رزومه</u-badge>
            </a>
          </td>
          <td class="px-4 py-3">
            {{ r.user.email }}
          </td>
          <td class="px-4 py-3">
            {{ r.user.phoneNumber }}
          </td>
          <td class="px-4 py-3 flex items-center justify-end">
            <button @click.prevent="showOption(i)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <div class="table-option absolute hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                <li>
                  <button @click.prevent="accept(r.id)" class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">قبول درخواست</button>
                </li>
                <li>
                  <button @click.prevent="reject(r.id)" class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">رد درخواست</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
    </template>
    </u-table>
  </div>
</template>

<script setup lang="ts">
import {AcceptMasterRequest, GetRequests, RejectMasterRequest} from "~/services/teacher.service";
import {ApiUrl} from "~/utilities/ApiUrls";

definePageMeta({
  layout:'admin',
middleware:'admin'
})

const requests = ref();
const dataTable = ref();

onMounted(async ()=>{
  const result = await GetRequests();
  requests.value = result.data;
})

const getUserAvatar = (avatarName:string)=>`${ApiUrl}/user/avatars/${avatarName}`;
const getUserResume = (cvName:string)=>`${ApiUrl}/core/Teacher/${cvName}`;

const accept=async (masterId:any)=>{
  const result = await AcceptMasterRequest(masterId);
  dataTable.value.hideAll();

}
const reject= async (masterId:any)=>{
  const result = await RejectMasterRequest(masterId,"");
}
</script>