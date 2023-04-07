import {ApiResponse} from "~/models/ApiResponse";
import {UserDto} from "~/models/user/userDto";
import {EditUserViewModel} from "~/models/user/editUserViewModel";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {ChangePasswordViewModel} from "~/models/user/changePasswordViewModel";
import {UserFilterParams, UserFilterResult} from "~/models/user/userFilterParams";
import {SetUserRolesCommand} from "~/models/user/setUserRolesCommand";

export function GetUsers(filterParams?:UserFilterParams):Promise<ApiResponse<UserFilterResult>>{
   //@ts-ignore
    return FetchApi('/user/users',{
        method:'GET',
        params:filterParams
    });
}

export function GetCurrentUser():Promise<ApiResponse<UserDto>>{
   //@ts-ignore
    return FetchApi('/user/current',{method:'GET'});
}
export function GetUser(userId:Number):Promise<ApiResponse<UserDto>>{
   //@ts-ignore
    return FetchApi(`/user/${userId}`,{method:'GET'});
}

export function EditUser(command:EditUserViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/user/edit',{
        body: command,
        method:'PUT',
    });
}
export function SetUserRoles(command:SetUserRolesCommand):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/user/SetRoles',{
        method:'PUT',
        body: command
    });
}

export function ChangePassword(command:ChangePasswordViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/user/changePassword',{
        body: command,
        method:'PUT',
    });
}

export function SetAvatar(avatar:FormData):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/user/setAvatar',{
        body: avatar,
        method:'PUT',
    });
}