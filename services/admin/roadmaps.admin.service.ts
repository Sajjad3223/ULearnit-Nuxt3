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