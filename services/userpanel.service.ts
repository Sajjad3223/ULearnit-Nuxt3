import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {UserPanelPendingsViewModel} from "~/models/user/userPanelPendingsViewModel";

export function GetUserPanelPendings():Promise<ApiResponse<UserPanelPendingsViewModel>>{
    //@ts-ignore
    return FetchApi('/UserPanel',{
        method:'GET',
    });
}