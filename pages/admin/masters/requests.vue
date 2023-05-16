<template>
  <div>
    <u-divider title="درخواست های مدرسین"/>

    <u-table ref="dataTable" :pagination-data="paginationData">
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
            <base-img :src="`/ulearnit/user/avatars/${r.user.avatar}`" class="rounded-full max-w-[50px]" />
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
                  <button @click.prevent="accept(r.id,r.user.id)" class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">قبول درخواست</button>
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
import {ApiUrl, FtpUrl} from "~/utilities/ApiUrls";
import {AcceptMasterRequest,RejectMasterRequest, GetMastersRequests} from "~/services/admin/teachers.admin.service";
import {MasterDto, MasterFilterParams} from "~/models/master/MasterDto";
import {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";
import {errorAlert, successAlert} from "~/services/alert.service";

definePageMeta({
  layout:'admin',
middleware:'admin'
})

const requests = ref<MasterDto[]>();
const dataTable = ref();
const paginationData = ref<PaginationData>();

const route = useRoute();
const filterParams:MasterFilterParams = reactive({
  pageId:Number(route.query?.pageId ?? '1'),
  take:Number(route.query?.take ?? '10'),
  search:route.query?.q?.toString() ?? null,
  teacherStatus:null
})
const setFilters = ()=>{
  filterParams.pageId = Number(route.query?.pageId ?? '1');
  filterParams.take = Number(route.query?.take ?? '10');
  filterParams.search = route.query?.q?.toString() ?? null;
}

watch(
    ()=>route.query,
    async ()=> {
      setFilters();
      await loadData();
    }
);

onMounted(async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetMastersRequests(filterParams);
  if(result.isSuccess){
    requests.value = result.data.data;
    paginationData.value = FillPaginationData(result.data);
  }
}

const getUserResume = (cvName:string)=>`${FtpUrl}/core/Teacher/${cvName}`;

const router= useRouter();
const accept=async (masterId:any,userId:number)=>{
  const result = await AcceptMasterRequest(masterId);
  if(result.isSuccess) {
    successAlert();
    dataTable.value.hideAll();
    router.push(`/admin/users/${userId}/permissions`)
  }else{
    errorAlert();
  }
}
const reject= async (masterId:any)=>{
  const result = await RejectMasterRequest(masterId);
  if(result.isSuccess) {
    successAlert();
    dataTable.value.hideAll();
  }else{
    errorAlert();
  }
}
</script>