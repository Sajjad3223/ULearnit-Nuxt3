import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

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