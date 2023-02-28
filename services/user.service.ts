import {ApiResponse} from "~/models/ApiResponse";
import {UserDto} from "~/models/user/userDto";
import {EditUserViewModel} from "~/models/user/editUserViewModel";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {ChangePasswordViewModel} from "~/models/user/changePasswordViewModel";

export function GetCurrentUser():Promise<ApiResponse<UserDto>>{
    return FetchApi('/user/current',{method:'GET'});
}

export function EditUser(command:EditUserViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/user/edit',{
        body: command,
        method:'PUT',
    });
}

export function ChangePassword(command:ChangePasswordViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/user/changePassword',{
        body: command,
        method:'PUT',
    });
}

export function SetAvatar(avatar:FormData):Promise<ApiResponse<undefined>>{
    return FetchApi('/user/setAvatar',{
        body: avatar,
        method:'PUT',
    });
}