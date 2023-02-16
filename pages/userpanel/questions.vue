<template>
  <div>
    <u-divider title="پرسش های من" />
    <div class="w-full mt-4">
      <u-table >
        <template #table-header>
          <th scope="col" class="px-4 py-3">عنوان پرسش</th>
          <th scope="col" class="px-4 py-3">دوره مربوطه</th>
          <th scope="col" class="px-4 py-3">وضعیت</th>
          <th scope="col" class="px-4 py-3">تاریخ ثبت</th>
          <th scope="col" class="px-4 py-3">توضیحات</th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700" v-for="(q,i) in 10">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink to="/courses/1" class="link">مشکل در نصب انریل انجین</NuxtLink>
            </th>
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink to="/courses/1" class="link">دوره آموزش آنریل انجین</NuxtLink>
            </th>
            <td class="px-4 py-3">
              <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">بدون پاسخ</span>
            </td>
            <td class="px-4 py-3">1401/11/18</td>
            <td class="px-4 py-3 whitespace-nowrap">حذف به علت:<br>سوال نامربوط</td>
          </tr>
        </template>
      </u-table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "user",
})
</script>