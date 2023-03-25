import {SeoData} from "~/SeoData";


export interface CreatePostViewModel{
    title: string;
    slug: string;
    content: string;
    categoryId: number;
    subCategoryId: number;
    imageName: string;
    seoData:SeoData;
    tags:string;
}