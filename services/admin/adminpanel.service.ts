import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {AdminPanelPendingsViewModel} from "~/models/admin/adminPanelPendingsViewModel";

export function GetAdminPanelPendings():Promise<ApiResponse<AdminPanelPendingsViewModel>>{
    //@ts-ignore
    return FetchApi('/Admin/AdminPanel',{
        method:'GET',
    });
}