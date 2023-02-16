<template>
  <div>
    <u-divider title="تراکنش های من"/>
    <div class="w-full mt-4">
      <div class="cash mb-2">
        <span>موجودی قابل برداشت: </span>
        <strong>2,500,000 <sub>تومان</sub></strong>
      </div>
      <div class="cash mb-2">
        <span>موجودی غیرقابل برداشت: </span>
        <strong>500,000 <sub>تومان</sub></strong>
      </div>

      <!-- Start coding here -->
      <div class="w-full mt-4">
        <u-table>
          <template #table-header>
            <th scope="col" class="px-4 py-3">عنوان دوره</th>
            <th scope="col" class="px-4 py-3">نوع تراکنش</th>
            <th scope="col" class="px-4 py-3">مبلغ (تومان)</th>
            <th scope="col" class="px-4 py-3">بابت</th>
            <th scope="col" class="px-4 py-3">تاریخ</th>
            <th scope="col" class="px-4 py-3">وضعیت</th>
            <th scope="col" class="px-4 py-3">توضیحات</th>
          </template>
          <template #table-body>
            <tr class="border-b dark:border-gray-700">
              <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                آموزش ++C در آنریل انجین
              </th>
              <td class="px-4 py-3">
                <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">واریز</span>
              </td>
              <td class="px-4 py-3">50,000</td>
              <td class="px-4 py-3">خرید آموزش</td>
              <td class="px-4 py-3">1401/11/18</td>
              <td class="px-4 py-3">
                <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">قابل برداشت</span>
              </td>
              <td class="px-4 py-3">
                درصد مدرس از فروش دوره
              </td>
            </tr>
          </template>
        </u-table>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout:"user",
})
</script>