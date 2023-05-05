import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {
    CourseFilterParams,
    CourseFilterResult,
    EpisodeFilterParams,
    EpisodeFilterResult
} from "~/models/course/courseSearchResultDto";
import {EpisodeDto} from "~/models/course/courseDto";

export function GetCoursesByAdmin(filterParams?:CourseFilterParams):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Courses',{
        method:'GET',
        params:filterParams
    });
}
export function GetPendingEpisodes(filterParams:EpisodeFilterParams):Promise<ApiResponse<EpisodeFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Courses/episodes',{
        method:'GET',
        query:filterParams
    });
}
export function PublishEpisode(courseId:number,episodeId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Courses/publish`,{
        method:'PUT',
        body:{
            courseId,
            episodeId
        }
    });
}