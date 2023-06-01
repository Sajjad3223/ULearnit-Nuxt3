<template>
  <Head>
    <Title>{{ seoData.metaTitle }}</Title>
    <Meta name="title" :content="seoData.metaTitle" />
    <Meta name="og:title" :content="seoData.metaTitle" />
    <Meta name="twitter:title" :content="seoData.metaTitle" />
    <Meta name="description" :content="seoData.metaDescription" />
    <Meta name="og:description" :content="seoData.metaDescription" />
    <Meta name="twitter:description" :content="seoData.metaDescription" />
    <Meta name="twitter:image" :content="imageUrl" v-if="imageUrl" />
    <Meta name="og:site_name" content="یولرنیت - وبسایت تخصصی آموزش بازی سازی" />
    <Meta name="keywords" :content="seoData.metaKeyWords" />

    <Meta property="og:image" :content="imageUrl" v-if="imageUrl"/>
    <Meta property="og:image:url" :content="imageUrl" v-if="imageUrl" />
    <Meta property="og:image:width" :content="imageWidth" v-if="imageUrl && imageWidth" />
    <Meta property="og:image:height" :content="imageHeight" v-if="imageUrl && imageHeight" />
    <Meta property="og:image:type" content="image/jpg" v-if="imageUrl" />

    <Meta property="og:price:currency" content="IRR" />
    <Meta property="og:locale" content="ir_FA" />

    <Meta rel="canonical" :href="seoData.canonical"/>
    <Meta property="og:url" :content="seoData.canonical" />

    <Meta content="index, follow" name="robots" v-if="seoData.indexPage"/>
    <Meta content="noindex, nofollow" name="robots" v-else/>

    <slot />
  </Head>
</template>

<script setup lang="ts">
import {SeoData} from "~/models/SeoData";

defineProps<{
  seoData:SeoData,
  imageUrl:string | null,
  imageWidth:number | null,
  imageHeight:number | null,
}>();
</script>