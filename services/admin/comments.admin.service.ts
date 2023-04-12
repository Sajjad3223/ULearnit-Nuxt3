import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CommentFilterParams} from "~/models/comment/commentFilterParams";
import {CommentFilterResult} from "~/models/comment/commentDto";

export function GetCommentsByAdmin(filterParams?:CommentFilterParams):Promise<ApiResponse<CommentFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Comments',{
        method:'GET',
        params:filterParams
    });
}