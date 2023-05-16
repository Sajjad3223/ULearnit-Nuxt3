import {useAuthStore} from "~/stores/authStore";
import {GetCurrentUser} from "~/services/user.service";

export default defineNuxtRouteMiddleware( async (to, from) => {
    //@ts-ignore
    if(process.client) {

        let user = useAuthStore().currentUser;
        if(user == null)
            user = (await GetCurrentUser()).data;

        if (!user?.roles.some(r => r.roleTitle === 'مدرس')) {
            return navigateTo('/userpanel');
        }
    }
})
