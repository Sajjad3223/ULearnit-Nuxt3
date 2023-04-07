export interface ReactToCommentViewModel {
    commentId: number;
    postId: number;
    reactionType: EReactionType;
}

export enum EReactionType{
    Like,
    Dislike
}