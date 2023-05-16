import {GetCurrentUser} from "~/services/user.service";
import {useAuthStore} from "~/stores/authStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
    //@ts-ignore
    if(process.client) {

        let user = useAuthStore().currentUser;
        if(user == null)
            user = (await GetCurrentUser()).data;

        if (!user?.roles.some(r => r.roleTitle === 'ادمین')) {
            return navigateTo('/userpanel');
        }
    }
})
