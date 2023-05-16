import {useAuthStore} from "~/stores/authStore";
import {errorAlert} from "~/services/alert.service";
import {GetCurrentUser} from "~/services/user.service";

export default defineNuxtRouteMiddleware(async (to, from) => {

    //@ts-ignore
    if(!process.client) return;

    let user = useAuthStore().currentUser;
    if(user == null)
        user = (await GetCurrentUser()).data;

    if(user === null)
    {
        return navigateTo('/auth/login');
    }
    if(
        user?.firstName === "" ||
        user?.lastName === "" ||
        user?.email === "" ||
        user?.phoneNumber === "")
    {
        errorAlert("لطفا ابتدا مشخصات خود را کامل کنید.","نام، نام خانوادگی، ایمیل و شماره تماس");
        return navigateTo('/userpanel/userInformation');
    }
})
