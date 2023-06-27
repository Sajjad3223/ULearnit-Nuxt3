import {defineStore} from "pinia";
import {LoginResultDto} from "~/models/auth/loginResultDto";
import {Ref} from "vue";
import {UserDto} from "~/models/user/userDto";
import {GetCurrentUser} from "~/services/user.service";
import {AppStatusCode} from "~/models/ApiResponse";
import {errorAlert, successAlert} from "~/services/alert.service";
import {LogoutUser, RefreshToken} from "~/services/auth.service";


export const useAuthStore = defineStore('auth',()=>{
    const loginResult:Ref<LoginResultDto | null> = ref(null);
    const currentUser:Ref<UserDto | null> = ref(null);
    const loading = ref(true);

    const isLogin = computed(()=>loginResult.value != null);

    const setCurrentUser = async ()=>{
        loading.value = true;

        const localStorageData = localStorage.getItem('auth-data');
        if(localStorageData == null) {
            loading.value = false;
            return;
        }

        loginResult.value = JSON.parse(localStorageData);
        const currentUserData = await GetCurrentUser();
        if(currentUserData.isSuccess)
        {
            currentUser.value = currentUserData.data;
        }
        else{
            const refreshResult = await RefreshToken(loginResult.value?.refreshToken ?? '');
            if(refreshResult.isSuccess){
                loginResult.value = refreshResult.data;
                localStorage.setItem('auth-data',JSON.stringify(loginResult.value));
                const currentUserData = await GetCurrentUser();
                if(currentUserData.isSuccess)
                {
                    currentUser.value = currentUserData.data;
                }
            } /*else{
                loginResult.value = null;
                localStorage.removeItem('auth-data');
            }*/
        }

        loading.value = false;
    }

    const logOut = async ()=>{
        const localStorageData = localStorage.getItem('auth-data');
        if(localStorageData == null)
            return;

        const result = await LogoutUser();
        if(result.isSuccess){
            loginResult.value = null;
            currentUser.value = null;
            localStorage.removeItem('auth-data');
            successAlert();
        }else{
            errorAlert(result.metaData.message);
        }
    }

    return {isLogin, loading, loginResult, currentUser, setCurrentUser, logOut}
})