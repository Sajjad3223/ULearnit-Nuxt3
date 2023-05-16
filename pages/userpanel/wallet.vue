<template>
  <div>
    <Head>
      <Title>کیف پول من</Title>
    </Head>

    <u-divider title="کیف پول من" />
    <div class="w-full mt-4" v-if="wallets != undefined">
      <div class="cash mb-2">
        <span>موجودی کیف پول: </span>
        <strong>{{wallets.availableWallet.toLocaleString()}} <sub>تومان</sub></strong>
      </div>
      <u-alert color="warning">
        مبلغ پرداختی به <b>تومان</b> می باشد. لطفا در پرداخت مبلغ دقت کنید امکان استرداد وجود <u>ندارد</u>.
      </u-alert>
      <Form @submit="chargeWallet" class="flex flex-wrap items-center w-full lg:w-1/2 space-x-2 space-x-reverse">
        <label for="">شارژ کیف پول (تومان) :</label>
        <input type="number" v-model="chargeWalletData.price" class="searchbox w-1/2 ">
        <base-button type="submit">پرداخت</base-button>
      </Form>
      <u-table :has-header="false">
        <template #table-header>
          <th scope="col" class="px-4 py-3">نوع تراکنش</th>
          <th scope="col" class="px-4 py-3">مبلغ (تومان)</th>
          <th scope="col" class="px-4 py-3">تاریخ</th>
          <th scope="col" class="px-4 py-3">توضیحات</th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700" v-for="w in wallets.data">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <u-badge color="success" v-if="w.type === EWalletType.Deposit">واریز</u-badge>
              <u-badge color="warning" v-if="w.type === EWalletType.Withdraw">برداشت</u-badge>
            </th>
            <td class="px-4 py-3">{{ w.price.toLocaleString() }}</td>
            <td class="px-4 py-3">{{new Date(w.finallyDate).toLocaleDateString('fa-IR')}}</td>
            <td class="px-4 py-3">
              {{w.description}}
            </td>
          </tr>
        </template>
      </u-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {ChargeWallet, GetUserWallets} from "~/services/user.service";
import {EWalletType, WalletFilterParams, WalletFilterResult} from "~/models/user/walletFilterResult";
import {ChargeWalletViewModel} from "~/models/user/ChargeWalletViewModel";

definePageMeta({
  layout: "user",

})

const filterParams:WalletFilterParams = reactive({
  take:10,
  pageId:1,
  startDate:null,
  endDate:null,
  userId:null,
  walletType:null
});

const chargeWalletData:ChargeWalletViewModel = reactive({
  price:0,
  errorCallBackUrl:"http://localhost:3000/cart/paymentFailed",
  successCallBackUrl:"http://localhost:3000/userpanel/wallet"
});

const wallets = ref<WalletFilterResult>();

onMounted(async ()=>{
  const result = await GetUserWallets(filterParams);
  if(result.isSuccess)
    wallets.value = result.data;
})

const chargeWallet = async ()=>{
  const result = await ChargeWallet(chargeWalletData);
  if(result.isSuccess)
    window.location.replace(result.data);
}

</script>