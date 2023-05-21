<template>
  <div v-if="sections !== undefined">
    <Head>
      <Title>
        سرفصل های {{courseTitle}}
      </Title>
    </Head>

    <base-button class="self-start" is-link
                 :link="`http://localhost:3000/masterpanel/courses`">بازگشت</base-button>
    <u-divider :title="`مدیریت سرفصل ${courseTitle}`" />
    <master-sections-create ref="createModal" :courseId="getCourseId" @sectionCreated="loadSections"/>
    <master-sections-edit ref="editModal" :courseId="getCourseId" @sectionUpdated="loadSections"/>
    <div class="w-full mt-4">
      <u-table ref="dataTable" v-if="sections.length > 0" :pagination-data="paginationData">
        <template #table-options>
          <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 md:space-x-reverse flex-shrink-0">
            <button @click="addSection"  class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
              <svg class="ml-2 scale-125" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.4375H3.5C3.26083 7.4375 3.0625 7.23917 3.0625 7C3.0625 6.76083 3.26083 6.5625 3.5 6.5625H10.5C10.7392 6.5625 10.9375 6.76083 10.9375 7C10.9375 7.23917 10.7392 7.4375 10.5 7.4375Z" fill="white"/>
                <path d="M7 10.9375C6.76083 10.9375 6.5625 10.7392 6.5625 10.5V3.5C6.5625 3.26083 6.76083 3.0625 7 3.0625C7.23917 3.0625 7.4375 3.26083 7.4375 3.5V10.5C7.4375 10.7392 7.23917 10.9375 7 10.9375Z" fill="white"/>
              </svg>
              سرفصل جدید
            </button>
          </div>
        </template>
        <template #table-header>
          <th scope="col" class="px-4 py-3">عنوان فصل</th>
          <th scope="col" class="px-4 py-3">توضیحات</th>
          <th scope="col" class="px-4 py-3 whitespace-nowrap">اولویت نمایش</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">عملیات</span>
          </th>
        </template>
        <template v-slot:table-body="{showOption}">
          <tr class="border-b dark:border-gray-700" v-for="(s,i) in sections">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/masterpanel/courses/${getCourseId}/sections/${s.id}/episodes`" class="link" >{{s.title}}</NuxtLink>
            </th>
            <td class="px-4 py-3 truncate">{{s.description}}</td>
            <td class="px-4 py-3">{{ s.displayOrder }}</td>
            <td class="px-4 py-3 flex items-center justify-end">
              <button @click="showOption(i)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div  class="hidden table-option z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                  <li>
                    <NuxtLink :to="`/masterpanel/courses/${getCourseId}/sections/${s.id}/episodes`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">مدیریت قسمت ها</NuxtLink>
                  </li>
                  <li>
                    <button @click="editSection(s.id)" class="block w-full text-right py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ویرایش</button>
                  </li>
                  <li>
                    <button @click="deleteSection(s.id,s.title)" class="block w-full text-right py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">حذف</button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </template>
      </u-table>
      <u-alert v-else>
        هنوز قسمتی ثبت نشده است!
      </u-alert>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CourseDto, SectionDto} from "~/models/course/courseDto";
import {DeleteSection, GetCourse, GetSectionsByFilter} from "~/services/course.service";
import Swal from 'sweetalert2';
import {SectionFilterParams} from "~/models/course/courseSearchResultDto";
import {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";

definePageMeta({
  layout:"user",
middleware:'master'
})

const createModal = ref();
const editModal = ref();
const dataTable = ref();
const route = useRoute();

const courseTitle = ref("");
const paginationData = ref<PaginationData>();
const sections = ref<SectionDto[]>();

onMounted( async ()=>{
  await loadSections();
})

const getCourseId = computed(():number=>{
  return Number.parseInt(route.params['courseId'].toString());
})

const filterParams:SectionFilterParams = reactive({
  courseId:getCourseId.value,
  pageId:Number(route.query?.pageId?.toString() ?? '1'),
  take:Number(route.query?.take?.toString() ?? '10'),
  search:route.query?.q?.toString() ?? null
});

const loadSections = async ()=>{
  const result = await GetSectionsByFilter(filterParams);
  if(result.isSuccess){
    sections.value = result.data.data;
    courseTitle.value = result.data.courseTitle;
    paginationData.value = FillPaginationData(result.data);
  }
}

const addSection = ()=> {
  createModal.value.showModal = true;
}

const editSection = (sectionId:any)=>{
  editModal.value.setSection(sections.value.filter(s=>s.id === sectionId)[0]);
  editModal.value.showModal = true;
  dataTable.value.hideAll();
}

const deleteSection= async (sectionId:any,sectionTitle:string)=>{
  await Swal.fire({
    title:`آیا از حذف سرفصل ${sectionTitle} مطمئن هستید؟`,
    icon:'question',
    text:'با حذف سرفصل همه قسمت های آن نیز حذف میشود!!!',
    showConfirmButton:true,
    confirmButtonText:'حذف',
    showCancelButton:true,
    cancelButtonText:'انصراف',
  }).then(async (result)=>{
    if(result.isConfirmed) {
      const deleteResult = await DeleteSection(getCourseId.value, sectionId);
      if(deleteResult.isSuccess)
      {
        await Swal.fire({
          title:`سرفصل ${sectionTitle} با موفقیت حذف شد!`,
          icon:'success',
        })
        await loadSections();
      }
    }
  });
}

</script>