import {ApiResponse} from "~/models/ApiResponse";
import {UserDto} from "~/models/user/userDto";
import {EditUserViewModel} from "~/models/user/editUserViewModel";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {ChangePasswordViewModel} from "~/models/user/changePasswordViewModel";

export function RegisterMaster(registerData:FormData):Promise<ApiResponse<undefined>>{
    return FetchApi('/Teacher/Register',{
        method:'POST',
        body:registerData
    });
}