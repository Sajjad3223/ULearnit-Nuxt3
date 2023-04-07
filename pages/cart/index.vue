<template>
  <div>
    <div class="w-full lg:mx-auto mt-12">
      <div v-if="cart && cart.items.length > 0" class="flex flex-col lg:flex-row w-full items-start space-y-4 lg:space-y-0">
        <div class="flex-1 flex flex-col lg:ml-8">
          <h2 class="text-2xl font-bold">سبد خرید شما</h2>
          <bread-crumb :links="[
              {link: '',title: 'سبد خرید'}
              ]" />

          <u-alert color="warning" class="mt-4">
            مبالغ به تومان می باشند. لطفا در پرداخت مبلغ دقت کنید، امکان استرداد به هیچ وجه وجود ندارد.
          </u-alert>

         <div class="w-full"></div>
          <u-table :has-header="false" :has-footer="false" :max-height="550" >
            <template #table-header>
              <th scope="col" class="px-6 py-3 hidden lg:block">
                بنر
              </th>
              <th scope="col" class="px-6 py-3">
                نام دوره
              </th>
              <th scope="col" class="px-6 py-3 hidden lg:table-cell">
                قیمت دوره (تومان)
              </th>
              <th scope="col" class="px-6 py-3 hidden lg:table-cell">
                تخفیف (تومان)
              </th>
              <th scope="col" class="px-6 py-3">
                مبلغ نهایی (تومان)
              </th>
              <th></th>
            </template>
            <template #table-body>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(c,i) in cart.items">
                <td class="hidden lg:block">
                  <base-img :src="`${ApiUrl}/core/course/banner/${c.itemBanner}`" class="w-24 m-4 rounded-lg" />
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <NuxtLink :to="`/courses/${c.itemSlug}`" class="hover:underline underline-offset-4">{{c.itemName}}</NuxtLink>
                  <p class="text-xs font-medium mt-2 dark:text-white opacity-60">{{c.itemAuthorName}}</p>
                </th>
                <td class="px-6 py-4 hidden lg:table-cell" v-if="c.price > 0">
                  {{ c.price.toLocaleString() }}
                </td>
                <td class="px-6 py-4 hidden lg:table-cell" v-else>
                  رایگان !
                </td>
                <td class="px-6 py-4 hidden lg:table-cell" v-if="c.discount > 0">
                  {{ c.discount.toLocaleString() }}
                </td>
                <td class="px-6 py-4 hidden lg:table-cell" v-else>
                  0
                </td>
                <td class="px-6 py-4 hidden lg:table-cell" v-if="c.totalPrice > 0">
                  {{ c.totalPrice.toLocaleString() }}
                </td>
                <td class="px-6 py-4 hidden lg:table-cell" v-else>
                  رایگان !
                </td>
                <td>
                  <base-button color="none" class="text-red-500 hover:text-red-600 dark:hover:text-red-400" @click.prevent="deleteOrderItem(c.id,c.itemType)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z" fill="currentColor"/>
                      <path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z" fill="currentColor"/>
                      <path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z" fill="currentColor"/>
                      <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="currentColor"/>
                      <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="currentColor"/>
                    </svg>
                  </base-button>
                </td>
              </tr>
            </template>
          </u-table>
        </div>
        <div class="w-full lg:w-1/4">
          <div class="border-2 rounded-lg border-gray-300 dark:border-gray-700 p-4">
            <label for="">کد تخفیف</label>
            <form class="flex items-stretch mt-2">
              <input type="text" class="searchbox rounded-l-none" dir="ltr" >
              <button type="submit" class="btn px-4 bg-indigo-500 whitespace-nowrap text-sm rounded-r-none">اعمال کد</button>
            </form>
            <hr class="my-4 opacity-50">
            <div class="grid grid-cols-2 gap-6 mx-4 place-items-end">
              <span class="justify-self-start text-sm">جمع کل:</span>
              <strong> {{ cart.totalPrice.toLocaleString() }} <sub>تومان</sub> </strong>
              <span class="justify-self-start text-sm">مبلغ تخفیف:</span>
              <strong v-if="cart.discount"> {{ cart.discount.amount.toLocaleString() }} <sub>تومان</sub> </strong>
              <strong v-else> 0 <sub>تومان</sub> </strong>
              <span class="justify-self-start text-sm">قابل پرداخت:</span>
              <strong> {{ cart.totalPrice.toLocaleString() }} <sub>تومان</sub> </strong>
            </div>
            <hr class="my-4 opacity-50">
            <form>
              <p class="mb-2">انتخاب روش پرداخت:</p>
              <div class="flex mr-4">
                <div class="flex items-center h-5">
                  <input name="paymentMethod" id="wallet" type="radio" value="wallet" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </div>
                <div class="mr-2 text-sm">
                  <label for="wallet" class="font-medium text-gray-900 dark:text-gray-300">کیف پول</label>
                  <span class="mr-2 text-xs font-normal text-gray-500 dark:text-gray-300">( 0 تومان)</span>
                </div>
              </div>
              <div class="flex items-center mt-2 mr-4">
                <input name="paymentMethod" type="radio" checked value="gateway" id="gateway" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="gateway" class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">درگاه بانکی</label>
              </div>
              <base-button @click="finalizeOrder" w-full type="submit" color="success" class="mt-4">پرداخت و ثبت نهایی</base-button>
            </form>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col-reverse lg:flex-row items-center">
        <div class="w-full lg:w-2/3 flex flex-col items-center space-y-4">
          <h2 class="text-2xl lg:text-4xl mb-12 text-indigo-600 dark:text-indigo-300">شما دوره ای در سبد خرید ندارید!</h2>
          <p> به دنبال چه دوره ای هستید؟</p>
          <div class="flex items-stretch w-2/3 lg:w-1/2">
            <input type="text" class="searchbox rounded-l-none">
            <button type="submit" class="bg-indigo-500 p-3 px-6 rounded-l-lg">جستجو</button>
          </div>
          <base-button is-link link="/courses/search">
            مشاهده همه دوره ها
          </base-button>
        </div>
        <img src="/imgs/basket.svg" class="w-2/3 lg:w-1/3">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FinalizeOrder, GetPendingCart, RemoveOrderItem} from "~/services/cart.service";
import {ApiUrl} from "~/utilities/ApiUrls";
import {successAlert} from "~/services/alert.service";
import {OrderItemCommand} from "~/models/cart/orderItemCommand";
import {EItemType} from "~/models/cart/addToCartViewModel";

const cart = ref();

onMounted(async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetPendingCart();
  if(result.isSuccess)
  {
    cart.value = result.data;
  }
}

const deleteItemCommand:OrderItemCommand = reactive({
  itemId:0,
  itemType:EItemType.Course,
  count:0
});

const deleteOrderItem = async (id:Number,itemType:EItemType)=>{
  deleteItemCommand.itemId = id;
  deleteItemCommand.itemType = itemType;
  const result = await RemoveOrderItem(deleteItemCommand);
  if(result.isSuccess)
  {
    successAlert("آیتم با موفقیت حذف شد!");
    await loadData();
  }
}

const router = useRouter();
const finalizeOrder = async ()=>{
  const result = await FinalizeOrder();
  if(result.isSuccess) {
    successAlert();
    router.push("/cart/paymentSucceed")
  }
}
</script>
