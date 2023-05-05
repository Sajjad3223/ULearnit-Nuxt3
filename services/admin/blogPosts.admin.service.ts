import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {PostFilterParams, PostFilterResult} from "~/models/post/postFilterData";

export function GetBlogPostsByAdmin(filterParams?:PostFilterParams):Promise<ApiResponse<PostFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/BlogPosts',{
        method:'GET',
        params:filterParams
    });
}

export function PublishPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/BlogPosts/publish/${id}`,{
        method:'PUT',
    });
}
export function RejectPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/BlogPosts/reject/${id}`,{
        method:'PUT',
    });
}
export function DeletePost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/BlogPosts/delete/${id}`,{
        method:'DELETE',
    });
}