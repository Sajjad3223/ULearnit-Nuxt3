import {SenderDto} from "~/models/comment/commentDto";

export interface QuestionDto{
    id: number
    creationDate: Date
    isActive: boolean
    postId: number
    postType: number
    postTitle: string
    title: string
    text: string
    isResolved: boolean
    lastUpdate: Date
    sender: SenderDto
    likesCount: number
    dislikesCount: number
    userReaction: string
    answers: AnswerDto[]
}

export interface AnswerDto {
    id: number
    creationDate: Date
    isActive: boolean
    questionId: number
    text: string
    isCorrectAnswer: boolean
    answerStatus: number
    likesCount: number
    dislikesCount: number
    userReaction: string
    sender: SenderDto
}