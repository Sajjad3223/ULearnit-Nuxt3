import {UserFilterParams, UserFilterResult} from "~/models/user/userFilterParams";
import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {UserDto} from "~/models/user/userDto";
import {EditUserViewModel} from "~/models/user/editUserViewModel";
import {SetUserRolesCommand} from "~/models/user/setUserRolesCommand";
import {CreateUserViewModel} from "~/models/user/createUserViewModel";
import {SetUserActivityViewModel} from "~/models/user/setUserActivityViewModel";

export function GetUsersByAdmin(filterParams?:UserFilterParams):Promise<ApiResponse<UserFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Users',{
        method:'GET',
        params:filterParams
    });
}

export function GetUser(userId:Number):Promise<ApiResponse<UserDto>>{
    //@ts-ignore
    return FetchApi(`/admin/Users/${userId}`,{
        method:'GET'
    });
}

export function CreateUser(command:CreateUserViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Users/create',{
        method:'POST',
        body: command
    });
}
export function EditUser(command:EditUserViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Users/edit',{
        body: command,
        method:'PUT',
    });
}
export function SetUserActivity(command:SetUserActivityViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Users/activity',{
        method:'PUT',
        body: command,
    });
}
export function SetUserRoles(command:SetUserRolesCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Users/SetRoles',{
        method:'PUT',
        body: command
    });
}