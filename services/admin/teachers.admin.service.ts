import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {MasterDto, MasterFilterParams, MasterFilterResult} from "~/models/master/MasterDto";
import {SetMasterActivityViewModel} from "~/models/master/setMasterActivity";

export function GetMastersByAdmin(filterParams:MasterFilterParams):Promise<ApiResponse<MasterFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Teachers',{
        method:'GET',
        params:filterParams
    });
}
export function GetMastersRequests(filterParams:MasterFilterParams):Promise<ApiResponse<MasterFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Teachers/requests',{
        method:'GET',
        params:filterParams
    });
}

export function AcceptMasterRequest(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Teachers/accept/${id}`,{
        method:'PUT',
    });
}
export function RejectMasterRequest(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Teachers/reject/${id}`,{
        method:'PUT',
    });
}

export function SetMasterActivity(command:SetMasterActivityViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Teachers/activity`,{
        method:'DELETE',
        body:command
    });
}