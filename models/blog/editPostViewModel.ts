import {SeoData} from "~/SeoData";


export interface EditPostViewModel{
    id: number;
    title: string;
    slug: string;
    content: string;
    categoryId: number;
    subCategoryId: number;
    imageName: string;
    seoData:SeoData;
    tags:string;
}