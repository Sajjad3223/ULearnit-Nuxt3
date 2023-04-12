import {useAuthStore} from "~/stores/authStore";
import {errorAlert} from "~/services/alert.service";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();


    if(!authStore.isLogin)
    {
        return navigateTo('/auth/login');
    }
    if(
        authStore.currentUser?.firstName === "" ||
        authStore.currentUser?.lastName === "" ||
        authStore.currentUser?.email === "" ||
        authStore.currentUser?.phoneNumber === "")
    {
        errorAlert("لطفا ابتدا مشخصات خود را کامل کنید.","نام، نام خانوادگی، ایمیل و شماره تماس");
        return navigateTo('/userpanel/userInformation');
    }
})
