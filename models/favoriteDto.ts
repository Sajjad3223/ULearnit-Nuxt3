import {EPostType} from "~/models/question/addQuestionViewModel";

export interface FavoriteDto{
    id: string
    creationDate: Date
    isActive: boolean
    userId: number
    postId: number
    postTitle: string
    postSlug: string
    postType: EPostType
}