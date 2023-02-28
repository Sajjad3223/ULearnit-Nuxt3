import {defineStore} from "pinia";
import {LoginResultDto} from "~/models/auth/loginResultDto";
import {Ref} from "vue";
import {UserDto} from "~/models/user/userDto";
import {GetCurrentUser} from "~/services/user.service";
import {AppStatusCode} from "~/models/ApiResponse";


export const useAuthStore = defineStore('auth',()=>{
    const loginResult:Ref<LoginResultDto | null> = ref(null);
    const currentUser:Ref<UserDto | null> = ref(null);
    const loading = ref(false);

    const isLogin = computed(()=>loginResult.value != null);

    const setCurrentUser = async ()=>{
        const localStorageData = localStorage.getItem('auth-data');
        if(localStorageData == null)
            return;

        loginResult.value = JSON.parse(localStorageData);
        loading.value = true;
        const currentUserData = await GetCurrentUser();
        if(currentUserData.isSuccess)
        {
            currentUser.value = currentUserData.data;
            console.log(currentUserData.data);
        }
        else if(currentUserData.metaData.appStatusCode === AppStatusCode.UnAuthorize){
            loginResult.value = null;
            localStorage.removeItem('auth-data');
        }

        loading.value = false;
    }

    return {isLogin, loading, loginResult, currentUser, setCurrentUser}
})