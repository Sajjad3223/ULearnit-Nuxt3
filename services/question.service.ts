import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {QuestionFilterParams, QuestionFilterResult} from "~/models/question/questionFilterParams";
import {QuestionDto} from "~/models/question/questionDto";
import {AddQuestionViewModel} from "~/models/question/addQuestionViewModel";
import {AddAnswerViewModel} from "~/models/question/addAnswerViewModel";

export function GetQuestions(filterParams:QuestionFilterParams):Promise<ApiResponse<QuestionFilterResult>>{
    return FetchApi('/Question',{
        method:'GET',
        params:filterParams
    });
}
export function GetLastQuestions(take:Number):Promise<ApiResponse<QuestionFilterResult>>{
    return FetchApi('/Question',{
        method:'GET',
        params:{
            pageId:1,
            take
        }
    });
}
export function GetQuestionsOfUser():Promise<ApiResponse<QuestionFilterResult>>{
    return FetchApi('/Question/user',{
        method:'GET',
    });
}
export function GetQuestion(questionId:Number):Promise<ApiResponse<QuestionDto>>{
    return FetchApi(`/Question/${questionId}`,{
        method:'GET',
    });
}

export function CreateQuestion(command:AddQuestionViewModel):Promise<ApiResponse<Number>>{
    return FetchApi(`/Question`,{
        method:'POST',
        body:command
    });
}
export function AddAnswer(questionId:Number,command:AddAnswerViewModel):Promise<ApiResponse<Number>>{
    return FetchApi(`/Question/${questionId}`,{
        method:'POST',
        body:command
    });
}
export function SetQuestionSolved(questionId:Number,correctAnswerId:Number):Promise<ApiResponse<Number>>{
    return FetchApi(`/Question/resolve`,{
        method:'PUT',
        body:{
            questionId,
            correctAnswerId
        }
    });
}