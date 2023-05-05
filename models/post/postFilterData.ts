import {BaseDto} from "~/models/baseDto";
import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

export interface PostFilterData extends BaseDto{
    title:string;
    slug:string;
    imageName:string;
    postStatus:EPostStatus;
    writerName:string;
}
export interface PostFilterParams extends BaseFilterParams{
    search?:string | null;
    categorySlug?:string | null;
    postStatus?:EPostStatus | null;
    writerId?:number | null;
}
export interface PostFilterResult extends BaseFilterResult<PostFilterData>{}

export enum EPostStatus{
    Pending,
    Published,
    Rejected,
    Drafted
}