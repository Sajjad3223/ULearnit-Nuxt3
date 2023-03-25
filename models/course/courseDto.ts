import {SeoData} from "~/SeoData";
import {MasterDto} from "~/master/MasterDto";
import {CategoryDto} from "~/category/categoryDTO";

export interface CourseDto{
    id: number;
    creationDate: Date;
    isActive: boolean;
    title: string;
    slug: string;
    description: string;
    imageName: string;
    introVideo: string;
    courseLevel: number;
    courseStatus: number;
    seoData: SeoData;
    price: number;
    lastUpdate: Date;
    sections: SectionDto[];
    teacher: MasterDto;
    category: CategoryDto;
    subCategory: CategoryDto;
    tags:string[];
    requirements:string[];
}
export interface SectionDto {
    id: number;
    creationDate: Date;
    isActive: boolean;
    title: string;
    description: string;
    displayOrder: number;
    episodes: EpisodeDto[];
    course: string;
}
export interface EpisodeDto {
    id: number;
    creationDate: Date;
    isActive: boolean;
    title: string;
    englishTitle: string;
    description: string;
    token: string;
    time: string;
    videoName: string;
    attachmentName: string;
    isFree: boolean;
    section: string;
}