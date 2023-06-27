import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseDto} from "~/models/baseDto";
import {BaseFilterResult} from "~/models/baseFilterResult";
import {EPassedState} from "~/models/quiz/quizResultDto";

export interface QuizResultFilterData extends BaseDto{
    quizTitle: string;
    studentFullName: string;
    dateTaken: string;
    score: number;
    passState: EPassedState;
}

export interface QuizResultFilterParams extends BaseFilterParams{
    search: string;
    passedState: EPassedState;
    beforeDate: Date;
    afterDate: Date;
    studentId: number;
    quizId: number;
    teacherId: number;
}
export interface QuizResultFilterResult extends BaseFilterResult<QuizResultFilterData>{

}