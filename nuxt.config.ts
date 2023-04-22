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
    ],
    image:{
        domains:[
            'http://localhost:5161',
            'http://localhost:3000'
        ],
        alias:{
            ulearnit:'http://localhost:5161',
        }
    },
    /*vite: {
       server: {
         proxy: { "/api": "http://api.ulearnit.ir/" },
       },
    },*/
})
