import {ApiResponse} from "~/models/ApiResponse";
import {UserDto} from "~/models/user/userDto";
import {FetchApi} from "~/utilities/CustomFetchApi";

export function GetCurrentUser():Promise<ApiResponse<UserDto>>{
    return FetchApi('/user/current',{method:'GET'});
}