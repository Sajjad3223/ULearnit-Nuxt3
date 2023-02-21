import {$fetch, FetchError, FetchOptions} from "ofetch";
import {ApiResponse, AppStatusCode} from "~/models/ApiResponse";
import {useAuthStore} from "~/stores/authStore";

export async function FetchApi<T>(
    url: string,
    config: FetchOptions = {},
): Promise<ApiResponse<T>>
{
    var config = {
        baseURL:'http://localhost:5161/api',
        ...config
    };

    const authStore = useAuthStore();
    if(!config.headers)
    {
        config.headers = {};
    }
    if(authStore && authStore.isLogin)
    {
        const loginData = authStore.loginResult;
        config.headers['Authorization'] = `Bearer ${loginData.token}`;
    }

    return $fetch<ApiResponse<T>>(url,config)
        .then(res=>{
            return res;
        })
        .catch((e:FetchError) =>{
            return {
                data:null,
                isSuccess:false,
                metaData:{
                    message: e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده است!",
                    appStatusCode: e.response?._data?.MetaData?.AppStatusCode ?? AppStatusCode.ServerError,
                },
            }
    });
}