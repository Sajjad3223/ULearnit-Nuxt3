import {WriterDto} from "~/models/blog/writerDto";
import {CategoryDto} from "~/models/category/categoryDTO";
import {SeoData} from "~/models/SeoData";

export interface PostDto{
    id: number;
    title: string;
    slug: string;
    content: string;
    writer: WriterDto;
    visit: number;
    category: CategoryDto;
    subCategory: CategoryDto;
    imageName: string;
    tags?: string;
    postStatus: EPostStatus;
    creationDate: Date;
    seoData: SeoData;
}

export enum EPostStatus{
    Pending,
    Published,
    Rejected,
    Drafted
}