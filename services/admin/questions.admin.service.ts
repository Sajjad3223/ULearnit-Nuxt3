import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {QuestionFilterParams, QuestionFilterResult} from "~/models/question/questionFilterParams";

export function GetQuestionsByAdmin(filterParams?:QuestionFilterParams):Promise<ApiResponse<QuestionFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Questions',{
        method:'GET',
        params:filterParams
    });
}
export function DeleteQuestion(id:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Questions/question/${id}`,{
        method:'DELETE',
    });
}
export function DeleteAnswer(id:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Questions/answer/${id}`,{
        method:'DELETE',
    });
}