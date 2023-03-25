import {SeoData} from "~/SeoData";

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

export enum ECourseLevel{
    Beginner,
    Intermediate,
    Advanced
}
export enum ECourseStatus{
    Preparing,
    InProgress,
    Completed,
    Canceled
}