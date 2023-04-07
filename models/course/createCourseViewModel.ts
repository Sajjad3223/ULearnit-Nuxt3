import {SeoData} from "~/models/SeoData";
import {ECourseLevel} from "~/models/course/courseEnums";

export interface CreateCourseViewModel{
    teacherId: number;
    title: string;
    slug: string;
    description: string;
    categoryId: number;
    subCategoryId: number;
    imageName: string;
    introVideo: string;
    courseLevel: ECourseLevel;
    seoData: SeoData;
    price: number;
    tags: string;
    requirements: string;
}

