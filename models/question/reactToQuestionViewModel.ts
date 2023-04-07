export interface ReactToQuestionViewModel {
    entityId: number;
    postId: number;
    reactionType: EReactionType;
}

export enum EReactionType{
    Like,
    Dislike
}