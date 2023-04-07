import {PostDto} from "~/models/blog/postDto";
import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreatePostViewModel} from "~/models/blog/createPostViewModel";
import {RegisterWriterViewModel} from "~/models/blog/registerWriterViewModel";
import {EditPostViewModel} from "~/models/blog/editPostViewModel";

export function GetPosts():Promise<ApiResponse<PostDto>>{
    //@ts-ignore
    return FetchApi('/Blog',{
        method:'GET',
    });
}
export function GetPostsByFilter(slug:string,search:string):Promise<ApiResponse<PostDto>>{
    //@ts-ignore
    return FetchApi('/Blog/search',{
        method:'GET',
        params:{
            categorySlug:slug,
            search
        }
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