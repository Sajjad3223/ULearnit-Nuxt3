import {WriterDto} from "~/models/writerDto";
import {CategoryDto} from "~/models/category/categoryDTO";
import {SeoData} from "~/models/SeoData";
import {EPostStatus} from "~/models/post/postFilterData";

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