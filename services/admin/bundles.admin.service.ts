import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {BundleFilterParams, BundleFilterResult} from "~/models/bundle/bundleFilterResult";

export function GetBundlesByAdmin(filterParams?:BundleFilterParams):Promise<ApiResponse<BundleFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Bundles',{
        method:'GET',
        params:filterParams
    });
}