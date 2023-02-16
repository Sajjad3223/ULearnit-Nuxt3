<template>
  <div>
    <div class="w-full">
      <h4 class="text-xl font-bold">تیکت شماره #12312</h4>
      <hr class="my-2">
    </div>

    <div class="body mt-4">
      <div action="" class="ticket ">
        <div class="topic ">
          <label for="">عنوان تیکت:</label>
          <input type="text" placeholder="عنوان تیکت را وارد کنید" value="دانلود نشدن ویدئو های دوره" class="searchbox w-2/3 bg-slate-900" disabled>
        </div>
        <div class="chat-container ">
          <ul class="chats ">
            <li class="me ">
              <p>سلام بنده در دانلود قسمت های دوره مشکل دارم. بعد از اینکه روی دکمه دانلود کلیک میکنم لینک دانلود برام نمیاد.</p>
              <span >1400/08/09 - 22:00</span>
            </li>
            <li class="him ">
              <p>سلام لطفا نام دوره بفرستید تا بررسی کنم</p>
              <span >1400/08/09 - 22:20</span>
            </li>
            <li class="me ">
              <p><a href="">دوره آموزش بازی سازی با موتور آنریل انجین</a></p>
              <span >1400/08/09 - 22:25</span>
            </li>
            <li class="him ">
              <p>بررسی کردم و مشکلی نبود، دوباره امتحان کنید</p>
              <span >1400/08/09 - 22:27</span>
            </li>
          </ul>
          <hr class="my-4">

          <form>
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Upload image</span>
              </button>
              <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="پیام شما ..."></textarea>
              <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6 -rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                <span class="sr-only">ارسال</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "user",
})
</script>