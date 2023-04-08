import {BundleFilterParams, BundleFilterResult} from "~/models/bundle/bundleFilterResult";
import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {BundleDto} from "~/models/bundle/bundleDto";
import {CreateBundleCommand} from "~/models/bundle/createBundleCommand";
import {AddBundleItemCommand} from "~/models/bundle/addBundleItemCommand";
import {EditBundleCommand} from "~/models/bundle/editBundleCommand";

export function GetBundlesByFilter(filterParams:BundleFilterParams):Promise<ApiResponse<BundleFilterResult>>{
    //@ts-ignore
    return FetchApi('/Bundle/search',{
        method:'GET',
        params:filterParams
    });
}
export function GetAllBundles():Promise<ApiResponse<BundleDto>>{
    //@ts-ignore
    return FetchApi('/Bundle',{
        method:'GET'
    });
}
export function GetActiveBundles():Promise<ApiResponse<BundleFilterResult>>{
    //@ts-ignore
    return FetchApi('/Bundle/active',{
        method:'GET'
    });
}
export function GetUserBundles():Promise<ApiResponse<BundleFilterResult>>{
    //@ts-ignore
    return FetchApi('/Bundle/user',{
        method:'GET'
    });
}
export function GetBundleBySlug(slug:string):Promise<ApiResponse<BundleDto>>{
    //@ts-ignore
    return FetchApi(`/Bundle/bundle/${slug}`,{
        method:'GET'
    });
}
export function GetBundleById(id:number):Promise<ApiResponse<BundleDto>>{
    //@ts-ignore
    return FetchApi(`/Bundle/${id}`,{
        method:'GET'
    });
}

// Post Methods
export function CreateBundle(command:CreateBundleCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Bundle`,{
        method:'POST',
        body:command
    });
}
export function AddBundleItem(command:AddBundleItemCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Bundle/${command.bundleId}`,{
        method:'POST',
        body:command
    });
}

// PUT Methods
export function EditBundle(command:EditBundleCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Bundle`,{
        method:'PUT',
        body:command
    });
}

// Delete Methods
export function DeleteBundle(bundleId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Bundle/${bundleId}`,{
        method:'Delete'
    });
}
export function DeleteBundleItemByItemId(bundleId:number,itemId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Bundle/${bundleId}/${itemId}`,{
        method:'Delete'
    });
}
export function DeleteBundleItemByCourseId(bundleId:number,courseId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Bundle/c/${bundleId}/${courseId}`,{
        method:'Delete'
    });
}