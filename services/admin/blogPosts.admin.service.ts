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
    return FetchApi('/Blog/accept',{
        method:'PUT',
        body: {
            postId : id,
        }
    });
}
export function RejectPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Blog/reject',{
        method:'PUT',
        body: {
            postId : id,
        }
    });
}