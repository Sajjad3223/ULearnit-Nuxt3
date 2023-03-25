import {EPostType} from "~/models/comment/commentDto";

export interface SendCommentViewModel{
    parentId: number;
    postId: number;
    postType: EPostType;
    text: string;
}