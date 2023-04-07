import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";
import {ECourseLevel, ECourseStatus} from "~/models/course/courseEnums";

export interface CourseFilterParams extends BaseFilterParams{
    search:string | null;
    categorySlug:string | null;
    priceFilter:number | null;
    orderFilter:number | null;
    requirement:string | null;
}

export interface CourseCardDto{
    id: number;
    title: string;
    slug: string;
    imageName: string;
    courseLevel: ECourseLevel;
    courseStatus: ECourseStatus;
    price: number;
    discount: number;
    totalPrice: number;
    time:string;
    lastUpdate: Date;
    teacherName:string;
}

export interface CourseFilterResult extends BaseFilterResult<CourseCardDto>{

}