import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {PostFilterParams, PostFilterResult} from "~/models/post/postFilterData";

export function GetRoadmapsByAdmin(filterParams?:PostFilterParams):Promise<ApiResponse<PostFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Roadmaps',{
        method:'GET',
        params:filterParams
    });
}

export function PublishPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Roadmaps/publish/${id}`,{
        method:'PUT',
    });
}
export function RejectPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Roadmaps/reject/${id}`,{
        method:'PUT',
    });
}
export function DeletePost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Roadmaps/delete/${id}`,{
        method:'DELETE',
    });
}