import {FetchApi} from "~/utilities/CustomFetchApi";
import {CommentFilterParams} from "~/models/comment/commentFilterParams";
import {CommentFilterResult} from "~/models/comment/commentDto";
import {ApiResponse} from "~/models/ApiResponse";
import {SendCommentViewModel} from "~/models/comment/sendCommentViewModel";
import {ReactToCommentViewModel} from "~/models/comment/reactToCommentViewModel";

export function GetComments(FilterParams:CommentFilterParams):Promise<ApiResponse<CommentFilterResult>>{
   //@ts-ignore
    return FetchApi('/Comment',{
        method:'GET',
        params:FilterParams
    });
}
export function SendComment(command:SendCommentViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/Comment',{
        method:'POST',
        body:command
    });
}
export function EditComment(commentId:BigInt,text:string):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/Comment',{
        method:'PUT',
        body:{
            commentId,
            text
        }
    });
}
export function DeleteComment(commentId:BigInt):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/Comment/${commentId}`,{
        method:'DELETE',
    });
}
export function VerifyComment(commentId:BigInt):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/Comment/verify/${commentId}`,{
        method:'PUT',
    });
}
export function RejectComment(commentId:BigInt):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/Comment/reject/${commentId}`,{
        method:'PUT',
    });
}

// Reactions //
export function ReactToComment(command:ReactToCommentViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/Comment/react',{
        method:'POST',
        body:command
    });
}
export function DeleteReaction(commentId:BigInt):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/Comment/react/${commentId}`,{
        method:'DELETE',
    });
}