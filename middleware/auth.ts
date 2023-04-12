import {useAuthStore} from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    if(!authStore.isLogin)
    {
        //return navigateTo('/auth/login'); TODO - in refresh middleware runs before auth Store so always isLogin is false
    }
})
