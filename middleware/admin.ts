import {useAuthStore} from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    if(!authStore.isLogin)
    {
        //TODO - in refresh middleware runs before auth Store so always isLogin is false
        //return navigateTo('/auth/login');
    }
    if(!authStore.currentUser?.roles.some(r=>r.roleTitle === 'ادمین'))
    {
        // TODO - in refresh middleware runs before auth Store so always isLogin is false
        //return navigateTo('/userpanel');
    }
})
