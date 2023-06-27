import {BaseDto} from "~/models/baseDto";
import {UserDto} from "~/models/user/userDto";
import {EQuestionType, QuizDto, QuizQuestionDto} from "~/models/quiz/quizDto";

export interface QuizResultDto extends BaseDto{
    quizTitle: string;
    dateTaken: string;
    questionResults: QuestionResultDto[];
    score: number;
    totalScore: number;
    totalQuestions: number;
    passState: EPassedState;
    teacherNote: string;
    quiz: QuizDto;
    student: UserDto;
}
export interface QuestionResultDto {
    id: number;
    creationDate: string;
    isActive: boolean;
    answer: string;
    isCorrect: boolean;
    questionType: EQuestionType;
    quizQuestion: QuizQuestionDto;
}

export enum EPassedState{
    Pending,
    Passed,
    Failed
}