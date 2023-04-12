import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CourseFilterParams, CourseFilterResult} from "~/models/course/courseSearchResultDto";

export function GetCoursesByAdmin(filterParams?:CourseFilterParams):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Courses',{
        method:'GET',
        params:filterParams
    });
}