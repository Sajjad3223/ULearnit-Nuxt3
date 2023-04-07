import {SeoData} from "~/models/SeoData";
import {ECourseLevel, ECourseStatus} from "~/models/course/courseEnums";

export interface EditCourseViewModel{
    courseId: number;
    title: string;
    slug: string;
    description: string;
    categoryId: number;
    subCategoryId: number;
    imageName: string;
    introVideo: string;
    courseLevel: ECourseLevel;
    courseStatus: ECourseStatus;
    seoData: SeoData;
    price: number;
    tags: string;
    requirements: string;
}

