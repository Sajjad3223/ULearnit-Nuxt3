import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {QuizFilterParams, QuizFilterResult} from "~/models/quiz/quizFilterData";
import {InsertQuizViewModel} from "~/models/quiz/commands/insertQuizViewModel";
import {QuizForStudentDto} from "~/models/quiz/quizDto";
import {InsertQuizResultViewModel, SignQuizResultViewModel} from "~/models/quiz/commands/insertQuizResultViewModel";
import {QuizResultFilterParams} from "~/models/quiz/quizResultFilterData";
import {QuizResultDto} from "~/models/quiz/quizResultDto";

export function GetQuizzes(filterParams:QuizFilterParams):Promise<ApiResponse<QuizFilterResult>>{
    //@ts-ignore
    return FetchApi('/Quiz',{
        method:'GET',
        params:filterParams
    });
}
export function GetQuizzesOfMaster(filterParams:QuizFilterParams):Promise<ApiResponse<QuizFilterResult>>{
    //@ts-ignore
    return FetchApi('/Quiz/master',{
        method:'GET',
        params:filterParams
    });
}
export function GetQuizResultsForMaster(filterParams:QuizResultFilterParams):Promise<ApiResponse<QuizFilterResult>>{
    //@ts-ignore
    return FetchApi('/Quiz/result/master',{
        method:'GET',
        params:filterParams
    });
}
export function GetQuizForStudent(courseId:number,quizId:number):Promise<ApiResponse<QuizForStudentDto>>{
    //@ts-ignore
    return FetchApi(`/Quiz/quiz/${courseId}/${quizId}`,{
        method:'GET'
    });
}
export function GetQuizResultById(resultId:number):Promise<ApiResponse<QuizResultDto>>{
    //@ts-ignore
    return FetchApi(`/Quiz/result/${resultId}`,{
        method:'GET'
    });
}
export function CreateQuiz(command:InsertQuizViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Quiz',{
        method:'POST',
        body:command
    });
}
export function SendQuizResult(command:InsertQuizResultViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Quiz/result',{
        method:'POST',
        body:command
    });
}
export function SignQuizResult(command:SignQuizResultViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Quiz/sign',{
        method:'PUT',
        body:command
    });
}