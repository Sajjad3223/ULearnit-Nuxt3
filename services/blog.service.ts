import {PostDto} from "~/models/blog/postDto";
import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreatePostViewModel} from "~/models/blog/createPostViewModel";
import {RegisterWriterViewModel} from "~/models/blog/registerWriterViewModel";
import {EditPostViewModel} from "~/models/blog/editPostViewModel";
import {PostFilterParams, PostFilterResult} from "~/models/post/postFilterData";

export function AmIWriter():Promise<ApiResponse<boolean>>{
    //@ts-ignore
    return FetchApi('/Blog/AmIWriter',{
        method:'GET',
    });
}
export function GetRelatedPosts(postId:number):Promise<ApiResponse<PostFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Blog/related/${postId}`,{
        method:'GET',
    });
}
export function GetPostsByFilter(filterParams:PostFilterParams):Promise<ApiResponse<PostFilterResult>>{
    //@ts-ignore
    return FetchApi('/Blog/search',{
        method:'GET',
        params:filterParams
    });
}
export function GetUserPosts():Promise<ApiResponse<PostDto>>{
    //@ts-ignore
    return FetchApi('/Blog/user',{
        method:'GET',
    });
}
export function GetPost(postId:Number):Promise<ApiResponse<PostDto>>{
    //@ts-ignore
    return FetchApi(`/Blog/${postId}`,{
        method:'GET',
    });
}
export function GetPostBySlug(postSlug:string):Promise<ApiResponse<PostDto>>{
    //@ts-ignore
    return FetchApi(`/Blog/b/${postSlug}`,{
        method:'GET',
    });
}
export function GetPostByShortLink(shortLink:string):Promise<ApiResponse<PostDto>>{
    //@ts-ignore
    return FetchApi(`/Blog/shortLink/${shortLink}`,{
        method:'GET',
    });
}

export function CreatePost(command:CreatePostViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Blog/Create',{
        method:'POST',
        body:command
    });
}
export function EditPost(command:EditPostViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Blog/Edit',{
        method:'PUT',
        body:command
    });
}

export function RegisterWriter(command:RegisterWriterViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Blog/Writer/Register',{
        method:'POST',
        body:command
    });
}
export function DeletePost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Blog/Delete',{
        method:'DELETE',
        body: {
            postId : id,
        }
    });
}