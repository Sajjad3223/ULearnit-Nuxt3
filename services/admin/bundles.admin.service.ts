import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {BundleFilterParams, BundleFilterResult} from "~/models/bundle/bundleFilterResult";
import {SetBundleActivityViewModel} from "~/models/bundle/SetBundleActivityViewModel";

export function GetBundlesByAdmin(filterParams?:BundleFilterParams):Promise<ApiResponse<BundleFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Bundles',{
        method:'GET',
        params:filterParams
    });
}
export function SetBundleActivity(command:SetBundleActivityViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Bundles/activity/${id}`,{
        method:'PUT',
        body:command
    });
}
export function DeleteBundle(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Bundles/delete/${id}`,{
        method:'DELETE',
    });
}