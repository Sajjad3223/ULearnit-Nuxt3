<template>
  <div>
    <button @click="toggleNotifs" id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
      <div class="relative flex" v-if="unreadNotifs > 0">
        <div class="relative flex justify-center items-center w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 left-3 dark:border-gray-900">
          <span class="sr-only text-white text-[10px]">{{ unreadNotifs }}</span>
        </div>
      </div>
    </button>
    <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster">
      <div v-show="showNotifs" id="dropdownNotification" class="z-20 w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
           style="position: absolute; inset: 0px auto auto 0px; margin: 0px;">
        <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
          اعلان ها
        </div>
        <div class="divide-y divide-gray-100 dark:divide-gray-700">
          <NuxtLink class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" v-for="n in notifs" @click="seenNotif(n.id,n.link)">
            <div class="flex-shrink-0">
              <base-img v-if="n.icon === EIcon.Course"
                  class="rounded-full w-11 h-11 object-cover" :src="`/ulearnit/core/course/banner/${n.avatar}`" />
              <div class="absolute flex items-center justify-center w-5 h-5 mr-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">

                <svg v-if="n.icon === EIcon.Course"
                     class="w-3 h-3 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z" fill="white"/>
                  <path d="M10.7083 4.70969C8.87828 3.71969 6.10828 2.83969 4.22828 2.67969H4.15828C2.95828 2.67969 1.98828 3.64969 1.98828 4.84969V16.7397C1.98828 17.7097 2.77828 18.5997 3.74828 18.7197L4.05828 18.7597C5.69828 18.9797 8.00828 19.6597 9.86828 20.4397C10.5183 20.7097 11.2383 20.2197 11.2383 19.5097V5.59969C11.2383 5.21969 11.0383 4.88969 10.7083 4.70969ZM4.99828 7.73969H7.24828C7.65828 7.73969 7.99828 8.07969 7.99828 8.48969C7.99828 8.90969 7.65828 9.23969 7.24828 9.23969H4.99828C4.58828 9.23969 4.24828 8.90969 4.24828 8.48969C4.24828 8.07969 4.58828 7.73969 4.99828 7.73969ZM7.99828 12.2397H4.99828C4.58828 12.2397 4.24828 11.9097 4.24828 11.4897C4.24828 11.0797 4.58828 10.7397 4.99828 10.7397H7.99828C8.40828 10.7397 8.74828 11.0797 8.74828 11.4897C8.74828 11.9097 8.40828 12.2397 7.99828 12.2397Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div class="w-full pr-3">
              <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-200">{{n.title}}</div>
              <div class="text-xs text-blue-600 dark:text-blue-500">
                <u-time :time="n.creationDate"/> - <u-date :date="n.creationDate" />
              </div>
            </div>
          </NuxtLink>
        </div>
        <NuxtLink to="/userpanel/messages" class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
          <div class="inline-flex items-center ">
            <svg class="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
            مشاهده همه
          </div>
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {GetUserNotifications, SeenNotification} from "~/services/notification.service";
import {EIcon, NotificationDto, NotificationFilterParams} from "~/models/notification/notificationDto";

const showNotifs = ref(false);

const emits = defineEmits(["update:modelValue"])

const notifs = ref<NotificationDto[]>();
const unreadNotifs = ref<number>();

const toggleNotifs=()=>{
  const notifsButton = document.getElementById("dropdownNotificationButton");
  const notifsDropdown = document.getElementById("dropdownNotification");

  showNotifs.value = !showNotifs.value;
  let x = notifsButton.getBoundingClientRect().left - 190;
  if(notifsButton.getBoundingClientRect().left + 190 > document.documentElement.clientWidth)
    x = x - 110;
  notifsDropdown.style.transform = `translate(${x}px,${77}px)`;
};

const filterParams:NotificationFilterParams = reactive({
  pageId:1,
  take:5,
  isSeen:null
});

onMounted(async ()=>{
  const res = await GetUserNotifications(filterParams);
  if(res.isSuccess)
  {
    notifs.value = res.data.data;
    unreadNotifs.value = res.data.data.filter(d=>!d.isSeen).length;
  }
})

const router = useRouter();
const seenNotif = async (id:number,link)=>{
  const res = await SeenNotification(id);
  if(res.isSuccess)
    if(link != undefined) router.push(link);
}
</script>