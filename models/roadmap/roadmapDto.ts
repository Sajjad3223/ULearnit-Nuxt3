import {WriterDto} from "~/models/writerDto";
import {CategoryDto} from "~/models/category/categoryDTO";
import {SeoData} from "~/models/SeoData";
import {EPostStatus} from "~/models/blog/postDto";

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