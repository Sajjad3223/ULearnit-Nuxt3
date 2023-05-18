// https://nuxt.com/docs/api/configuration/nuxt-config
import {ApiUrl} from "~/utilities/ApiUrls";

export default defineNuxtConfig({
    app:{
        layoutTransition: { name: 'layout', mode: 'out-in' },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules:[
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        'nuxt-simple-sitemap',
    ],
    nitro: {
        prerender: {
            crawlLinks: true,
            ignore: ['/admin', '/userpanel', '/masterpanel','/cart','/auth'],
        }
    },
    sitemap: {
        exclude:['/admin/**','/userpanel/**', '/masterpanel/**' ,'/cart/**','/auth/**'],
        siteUrl: 'https://ulearnit.ir',
    },
    image:{
        domains:[
            'http://localhost:5161',
            'http://localhost:3000',
            'http://dl.ulearnit.ir'
        ],
        alias:{
            //ulearnit:'http://localhost:5161',
            ulearnit:'http://dl.ulearnit.ir',
        }
    },
    vite: {
       server: {
         proxy: { "/api": "https://sajjadmirshabi.ir" },
       },
    },
})
