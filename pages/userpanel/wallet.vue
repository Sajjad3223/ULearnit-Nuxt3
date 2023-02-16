<template>
  <div>
    <u-divider title="کیف پول من" />
    <div class="w-full mt-4">
      <div class="cash mb-2">
        <span>موجودی کیف پول: </span>
        <strong>2,500,00 <sub>تومان</sub></strong>
      </div>
      <u-alert color="warning">
        مبلغ پرداختی به <b>تومان</b> می باشد. لطفا در پرداخت مبلغ دقت کنید امکان استرداد وجود <u>ندارد</u>.
      </u-alert>
      <form action="" class="flex flex-wrap items-center w-full lg:w-1/2 space-x-2 space-x-reverse">
        <label for="">شارژ کیف پول (تومان) :</label>
        <input type="number" name="" id="" class="searchbox w-1/2 bg-slate-900">
        <button type="submit" class="btn btn-cta">پرداخت</button>
      </form>
      <u-table>
        <template #table-header>
          <th scope="col" class="px-4 py-3">نوع تراکنش</th>
          <th scope="col" class="px-4 py-3">مبلغ (تومان)</th>
          <th scope="col" class="px-4 py-3">بابت</th>
          <th scope="col" class="px-4 py-3">تاریخ</th>
          <th scope="col" class="px-4 py-3">توضیحات</th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              برداشت
            </th>
            <td class="px-4 py-3">50,000</td>
            <td class="px-4 py-3">ثبت نام در دوره</td>
            <td class="px-4 py-3">1401/11/18</td>
            <td class="px-4 py-3">
              بابت فاکتور #21352
            </td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              واریز
            </th>
            <td class="px-4 py-3">50,000</td>
            <td class="px-4 py-3">شارژ کیف پول</td>
            <td class="px-4 py-3">1401/11/18</td>
            <td class="px-4 py-3">
              شارژ کیف پول
            </td>
          </tr>
        </template>
      </u-table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "user",
})


</script>