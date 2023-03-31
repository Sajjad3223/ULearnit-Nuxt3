export interface AddQuestionViewModel{
    postType: EPostType
    postId: number
    title: string
    text: string
}

export enum EPostType{
    Course,
    Shop,
}