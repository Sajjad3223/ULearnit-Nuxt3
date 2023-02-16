<template>
  <div>
    <u-divider title="علاقه مندی های من" />
    <div ref="table" class="w-full mt-4">
      <u-table >
        <template #table-header>
          <th scope="col" class="px-4 py-3">نام دوره</th>
          <th scope="col" class="px-4 py-3">وضعیت دوره</th>
          <th scope="col" class="px-4 py-3">قیمت (تومان)</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">عملیات</span>
          </th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700" v-for="(f,i) in 10">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink to="/courses/1" class="link" >آموزش جامع آنریل انجین</NuxtLink>
            </th>
            <td class="px-4 py-3">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">در حال برگزاری</span>
            </td>
            <td class="px-4 py-3">50,000</td>
            <td class="px-4 py-3 flex items-center justify-end">
              <button @click.prevent="toggleOption(event,i)" id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div ref="options" id="apple-imac-27-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                  <li>
                    <NuxtLink to="/courses/1" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">نمایش</NuxtLink>
                  </li>
                  <li>
                    <button class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">حذف</button>
                  </li>
                </ul>
              </div>
            </td>
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

const options = ref();
const table = ref();
const toggleOption=(e,i)=>{

  if(!options.value[i].classList.contains('hidden')) {
    options.value[i].classList.add('hidden');
    return;
  }
  options.value.forEach(s=>{
    s.classList.add('hidden');
  })
  options.value[i].classList.toggle('hidden');
  options.value[i].classList.add('absolute');
  console.log(table.value.getBoundingClientRect().height)
  if(document.documentElement.clientHeight > options.value[i].parentElement.parentElement.getBoundingClientRect().bottom + 40 &&
      table.value.getBoundingClientRect().height > options.value[i].parentElement.parentElement.getBoundingClientRect().bottom - table.value.getBoundingClientRect().top / 2 ) {
    options.value[i].style.inset = "0px auto auto 0px";
    options.value[i].style.transform = `translate(0px, ${156 + (i * 49)}px)`;
  }
  else{
    options.value[i].style.inset = "auto auto 0px 0px";
    options.value[i].style.transform = `translate(0px, ${-115 - ((9 - i) * 49)}px)`;
  }
}
</script>