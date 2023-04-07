<template>
  <div v-if="ticket !== undefined">
    <div class="w-full">
      <h4 class="text-xl font-bold">تیکت شماره #{{ ticket.id }}</h4>
      <hr class="my-2">
    </div>

    <Head>
      <Title>{{ticket.title}}</Title>
    </Head>

    <div class="body mt-4">
      <div action="" class="ticket ">
        <div class="topic ">
          <label for="">عنوان تیکت:</label>
          <u-badge><span class="text-xl">{{ticket.title}}</span></u-badge>
        </div>
        <div class="chat-container ">
          <ul class="chats ">
            <li class="me ">
              <p>{{ticket.text}}</p>
              <div class="flex text-sm opacity-70 mr-auto">
                <u-time :time="ticket.creationDate" dir="ltr"/>
                -
                <u-date :date="ticket.creationDate" dir="ltr"/>
              </div>
            </li>
            <li v-for="m in ticket.messages" :key="m"
                :class="`${authStore.currentUser.id === m.userId ? 'me' : 'him'}`">
              <p>{{ m.message }}</p>
              <div class="flex text-sm opacity-70 mr-auto">
                <u-time :time="m.creationDate" dir="ltr"/>
                -
                <u-date :date="m.creationDate" dir="ltr"/>
              </div>
            </li>
          </ul>
          <hr class="my-4">

          <Form @submit="sendMessage">
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-start px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Upload image</span>
              </button>
              <textarea v-model="sendTicketMessageData.message" id="chat" rows="3" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="پیام شما ..."></textarea>
              <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6 -rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                <span class="sr-only">ارسال</span>
              </button>
            </div>
          </Form>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {TicketDto} from "~/models/ticket/ticketDto";
import {GetTicket, SendTicketMessage} from "~/services/ticket.service";
import {useAuthStore} from "~/stores/authStore";
import {Form} from "vee-validate";
import {SendTicketMessageCommand} from "~/models/ticket/sendTicketMessageCommand";
import {errorAlert, successAlert} from "~/services/alert.service";

definePageMeta({
  layout: "user",
})

const authStore = useAuthStore();

const ticket = ref<TicketDto>();
const route = useRoute();

const sendTicketMessageData:SendTicketMessageCommand = reactive({
  ticketId:route.params.id,
  message:""
})

onMounted(async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetTicket(route.params.id);
  if(result.isSuccess) {
    ticket.value = result.data;
  }
}

const sendMessage = async ()=>{
  const result = await SendTicketMessage(sendTicketMessageData);
  if(result.isSuccess){
    successAlert();
    await loadData();
  }
  else {
    errorAlert();
  }
}
</script>