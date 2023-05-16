import {WriterDto} from "~/models/writerDto";
import {CategoryDto} from "~/models/category/categoryDTO";
import {SeoData} from "~/models/SeoData";
import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";
import {EPostStatus} from "~/models/post/postFilterData";

export interface RoadmapPostDto{
    id: number;
    title: string;
    slug: string;
    content: string;
    roadmapWriter: WriterDto;
    visit: number;
    category: CategoryDto;
    imageName: string;
    videoName: string;
    tags?: string;
    postStatus: EPostStatus;
    creationDate: Date;
    seoData: SeoData;
}

export interface RoadmapFilterParams extends BaseFilterParams{
    search?:string | null;
    categorySlug?:string | null;
    postStatus?:EPostStatus | null;
    writerId?:number | null;
}

export interface RoadmapFilterResult extends BaseFilterResult<RoadmapPostDto>{}