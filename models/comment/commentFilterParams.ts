import {BaseFilterParams} from "~/models/baseFilterParams";
import {ECommentStatus, EPostType} from "~/models/comment/commentDto";

export interface CommentFilterParams extends BaseFilterParams{
    postId: number;
    postType: EPostType;
    commentStatus: ECommentStatus;
    startDate: Date;
    endDate: Date;
    userRequested: number;
}