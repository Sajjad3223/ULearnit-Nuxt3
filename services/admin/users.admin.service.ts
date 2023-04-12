import {UserFilterParams, UserFilterResult} from "~/models/user/userFilterParams";
import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";

export function GetUsersByAdmin(filterParams?:UserFilterParams):Promise<ApiResponse<UserFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Users',{
        method:'GET',
        params:filterParams
    });
}