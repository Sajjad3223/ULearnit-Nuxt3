import {defineStore} from "pinia";
import {LoginResultDto} from "~/models/auth/loginResultDto";
import {Ref} from "vue";
import {UserDto} from "~/models/user/userDto";
import {GetCurrentUser} from "~/services/user.service";
import {AppStatusCode} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {errorAlert, successAlert} from "~/services/alert.service";


export const useAuthStore = defineStore('auth',()=>{
    const loginResult:Ref<LoginResultDto | null> = ref(null);
    const currentUser:Ref<UserDto | null> = ref(null);
    const loading = ref(true);

    const isLogin = computed(()=>loginResult.value != null);

    const setCurrentUser = async ()=>{
        loading.value = true;

        const localStorageData = localStorage.getItem('auth-data');
        if(localStorageData == null)
            return;

        loginResult.value = JSON.parse(localStorageData);
        const currentUserData = await GetCurrentUser();
        if(currentUserData.isSuccess)
        {
            currentUser.value = currentUserData.data;
        }
        else if(currentUserData.metaData.appStatusCode === AppStatusCode.UnAuthorize){
            loginResult.value = null;
            localStorage.removeItem('auth-data');
        }

        loading.value = false;
    }

    const logOut = async ()=>{
        const localStorageData = localStorage.getItem('auth-data');
        if(localStorageData == null)
            return;
        localStorage.removeItem('auth-data');

        const result = await FetchApi('/auth/logout',{
            method:'DELETE',
        });
        if(result.isSuccess){
            successAlert();
        }else{
            errorAlert(result.metaData.message);
        }

        loginResult.value = null;
        currentUser.value = null;
    }

    return {isLogin, loading, loginResult, currentUser, setCurrentUser, logOut}
})