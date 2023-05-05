import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";
import {ECourseLevel, ECourseStatus} from "~/models/course/courseEnums";
import {EpisodeDto, SectionDto} from "~/models/course/courseDto";

export interface CourseFilterParams extends BaseFilterParams{
    search:string | null;
    categorySlug:string | null;
    priceFilter:number | null;
    orderFilter:number | null;
    requirement:string | null;
}
export interface SectionFilterParams extends BaseFilterParams{
    search:string | null;
    courseId:number;
}
export interface EpisodeFilterParams extends BaseFilterParams{
    search:string | null;
    courseId:number | null;
    sectionId:number | null;
}

export interface CourseCardDto{
    id: number;
    title: string;
    slug: string;
    imageName: string;
    courseLevel: ECourseLevel;
    courseStatus: ECourseStatus;
    episodesCount: number;
    price: number;
    discount: number;
    totalPrice: number;
    time:string;
    teacherName:string;
}

export interface CourseFilterResult extends BaseFilterResult<CourseCardDto>{

}
export interface SectionFilterResult extends BaseFilterResult<SectionDto>{
    courseTitle:string;
}
export interface EpisodeFilterResult extends BaseFilterResult<EpisodeDto>{
    sectionTitle:string;
}