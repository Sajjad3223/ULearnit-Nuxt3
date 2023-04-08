import {CreatePostViewModel} from "~/models/blog/createPostViewModel";


export interface CreateRoadmapPostCommand extends CreatePostViewModel{
    videoName: string;
}