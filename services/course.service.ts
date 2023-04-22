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
import {FavoriteDto} from "~/models/favoriteDto";

export function GetCourses():Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi('/Course',{
        method:'GET',
    });
}
export function GetMasterCourses():Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi('/Course/masterCourses',{
        method:'GET',
    });
}
export function GetCoursesOfMaster(masterId:number):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Course/teacher/${masterId}`,{
        method:'GET',
    });
}
export function GetCourse(courseId:Number):Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi(`/Course/${courseId}`,{
        method:'GET',
    });
}
export function GetCourseBySlug(slug:string):Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi(`/Course/c/${slug}`,{
        method:'GET',
    });
}
export function GetCourseByShortLink(shortLink:string):Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi(`/Course/shortLink/${shortLink}`,{
        method:'GET',
    });
}
export function GetCourseFilter(filterParams:CourseFilterParams):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Course/search`,{
        method:'GET',
        params:filterParams,
    });
}

export function CreateCourse(command:CreateCourseViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Create',{
        method:'POST',
        body:command
    });
}
export function EditCourse(command:EditCourseViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Edit',{
        method:'PUT',
        body:command
    });
}

export function CreateSection(command:CreateSectionViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Sections/Create',{
        method:'POST',
        body:command
    });
}
export function EditSection(command:EditSectionViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Sections/Edit',{
        method:'PUT',
        body:command
    });
}
export function DeleteSection(courseId:number,sectionId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Sections/Delete',{
        method:'DELETE',
        body:{
            courseId,
            sectionId
        }
    });
}

export function GetEpisode(episodeId:number):Promise<ApiResponse<EpisodeDto>>{
    //@ts-ignore
    return FetchApi(`/Course/Episodes/${episodeId}`,{
        method:'GET',
    });
}
export function CreateEpisode(command:CreateEpisodeViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Episodes/Create',{
        method:'POST',
        body:command
    });
}
export function EditEpisode(command:EditEpisodeViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Episodes/Edit',{
        method:'PUT',
        body:command
    });
}
export function DeleteEpisode(courseId:number,sectionId:number,episodeId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
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
    //@ts-ignore
    return FetchApi('/Course/Episodes/Publish',{
        method:'PUT',
        body: {
            courseId,
            episodeId
        },
    });
}

export function GetEpisodeVideo(token:string):Promise<ApiResponse<string>>{
    //@ts-ignore
    return FetchApi(`/Course/GetEpisodeVideo?token=${token}`,{
        method:'GET',
    });
}
export function GetEpisodeVideoFile(token:string):Promise<any>{
    //@ts-ignore
    return FetchApi(`/Course/GetEpisodeVideoFile?token=${token}`,{
        method:'GET',
    });
}
export function GetEpisodeAttachmentFile(token:string):Promise<any>{
    //@ts-ignore
    return FetchApi(`/Course/GetEpisodeAttachFile?token=${token}`,{
        method:'GET',
    });
}

export function GetUserCourses():Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi('/Course/userCourses',{
        method:'GET',
    });
}
export function GetUserFavorites():Promise<ApiResponse<FavoriteDto>>{
    //@ts-ignore
    return FetchApi('/Course/Favorites',{
        method:'GET',
    });
}
export function AddFavorite(postId:Number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Favorites',{
        method:'POST',
        body:postId
    });
}
export function DeleteFavorite(postId:Number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Course/Favorites/${postId}`,{
        method:'DELETE',
    });
}