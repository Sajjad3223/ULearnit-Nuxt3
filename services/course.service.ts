import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreateCourseViewModel} from "~/models/course/createCourseViewModel";
import {CourseDto, EpisodeDto} from "~/models/course/courseDto";
import {CreateSectionViewModel} from "~/models/course/createSectionViewModel";
import {CreateEpisodeViewModel} from "~/models/course/createEpisodeViewModel";
import {EditCourseViewModel} from "~/models/course/editCourseViewModel";
import {EditSectionViewModel} from "~/models/course/editSectionViewModel";
import {EditEpisodeViewModel} from "~/models/course/editEpisodeViewModel";
import {CourseFilterParams, CourseFilterResult} from "~/models/course/courseSearchResultDto";

export function GetCourses():Promise<ApiResponse<CourseDto>>{
    return FetchApi('/Course',{
        method:'GET',
    });
}
export function GetMasterCourses():Promise<ApiResponse<CourseDto>>{
    return FetchApi('/Course/masterCourses',{
        method:'GET',
    });
}
export function GetCourse(courseId:Number):Promise<ApiResponse<CourseDto>>{
    return FetchApi(`/Course/${courseId}`,{
        method:'GET',
    });
}
export function GetCourseFilter(filterParams:CourseFilterParams):Promise<ApiResponse<CourseFilterResult>>{
    return FetchApi(`/Course/search`,{
        method:'GET',
        params:filterParams,
    });
}

export function CreateCourse(command:CreateCourseViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Create',{
        method:'POST',
        body:command
    });
}
export function EditCourse(command:EditCourseViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Edit',{
        method:'PUT',
        body:command
    });
}

export function CreateSection(command:CreateSectionViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Sections/Create',{
        method:'POST',
        body:command
    });
}
export function EditSection(command:EditSectionViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Sections/Edit',{
        method:'PUT',
        body:command
    });
}
export function DeleteSection(courseId,sectionId):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Sections/Delete',{
        method:'DELETE',
        body:{
            courseId,
            sectionId
        }
    });
}

export function GetEpisode(episodeId):Promise<ApiResponse<EpisodeDto>>{
    return FetchApi(`/Course/Episodes/${episodeId}`,{
        method:'GET',
    });
}
export function CreateEpisode(command:CreateEpisodeViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Episodes/Create',{
        method:'POST',
        body:command
    });
}
export function EditEpisode(command:EditEpisodeViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Episodes/Edit',{
        method:'PUT',
        body:command
    });
}
export function DeleteEpisode(courseId,sectionId,episodeId):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Episodes/Delete',{
        method:'DELETE',
        body:{
            courseId,
            sectionId,
            episodeId
        }
    });
}

export function PublishEpisode(courseId:Number,episodeId:Number):Promise<ApiResponse<undefined>>{
    return FetchApi('/Course/Episodes/Publish',{
        method:'PUT',
        body: {
            courseId,
            episodeId
        },
    });
}