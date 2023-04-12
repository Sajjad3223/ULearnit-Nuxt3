import {useAuthStore} from "~/stores/authStore";
import {AmIMaster} from "~/services/teacher.service";

export default defineNuxtRouteMiddleware( async (to, from) => {
    const authStore = useAuthStore();

    if(!authStore.isLogin)
    {
        return navigateTo('/auth/login');
    }
    const amIMaster = await AmIMaster();
    if(!amIMaster.data)
    {
        return navigateTo('/userpanel');
    }
})
