import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {QuestionFilterParams, QuestionFilterResult} from "~/models/question/questionFilterParams";
import {QuestionDto} from "~/models/question/questionDto";
import {AddQuestionViewModel} from "~/models/question/addQuestionViewModel";
import {AddAnswerViewModel} from "~/models/question/addAnswerViewModel";
import {ReactToCommentViewModel} from "~/models/comment/reactToCommentViewModel";
import {ReactToQuestionViewModel} from "~/models/question/reactToQuestionViewModel";

export function GetQuestions(filterParams:QuestionFilterParams):Promise<ApiResponse<QuestionFilterResult>>{
   //@ts-ignore
    return FetchApi('/Question',{
        method:'GET',
        params:filterParams
    });
}
export function GetLastQuestions(take:Number):Promise<ApiResponse<QuestionFilterResult>>{
   //@ts-ignore
    return FetchApi('/Question',{
        method:'GET',
        params:{
            pageId:1,
            take
        }
    });
}
export function GetQuestionsOfUser():Promise<ApiResponse<QuestionFilterResult>>{
   //@ts-ignore
    return FetchApi('/Question/user',{
        method:'GET',
    });
}
export function GetQuestion(questionId:Number):Promise<ApiResponse<QuestionDto>>{
   //@ts-ignore
    return FetchApi(`/Question/${questionId}`,{
        method:'GET',
    });
}

export function CreateQuestion(command:AddQuestionViewModel):Promise<ApiResponse<Number>>{
   //@ts-ignore
    return FetchApi(`/Question`,{
        method:'POST',
        body:command
    });
}
export function AddAnswer(questionId:Number,command:AddAnswerViewModel):Promise<ApiResponse<Number>>{
   //@ts-ignore
    return FetchApi(`/Question/${questionId}`,{
        method:'POST',
        body:command
    });
}
export function SetQuestionSolved(questionId:Number,correctAnswerId:Number):Promise<ApiResponse<Number>>{
   //@ts-ignore
    return FetchApi(`/Question/resolve`,{
        method:'PUT',
        body:{
            questionId,
            correctAnswerId
        }
    });
}

// Reactions //
export function ReactToQuestion(command:ReactToQuestionViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/Question/react',{
        method:'POST',
        body:command
    });
}
export function DeleteReaction(entityId:BigInt):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/Question/react/${entityId}`,{
        method:'DELETE',
    });
}