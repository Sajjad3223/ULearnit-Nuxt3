import {BaseFilterParams} from "~/models/baseFilterParams";
import {ECommentStatus, EPostType} from "~/models/comment/commentDto";

export interface CommentFilterParams extends BaseFilterParams{
    postId: number | null;
    postType: EPostType | null;
    commentStatus: ECommentStatus | null;
    startDate: Date | null;
    endDate: Date | null;
    userRequested: number | null;
}