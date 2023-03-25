import {BaseFilterParams} from "~/baseFilterParams";
import {BaseFilterResult} from "~/baseFilterResult";

export interface CourseFilterParams extends BaseFilterParams{

}

export interface CourseCardDto{
    id: number;
    title: string;
    slug: string;
    imageName: string;
    courseLevel: number;
    price: number;
    time:string;
    lastUpdate: Date;
}

export interface CourseFilterResult extends BaseFilterResult<CourseCardDto>{

}