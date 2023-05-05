import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {MasterDto, MasterFilterParams, MasterFilterResult} from "~/models/master/MasterDto";
import FormData from "form-data";

export function RegisterMaster(registerData:FormData):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Teacher/Register',{
        method:'POST',
        body:registerData
    });
}
export function GetAllMasters(filterParams:MasterFilterParams):Promise<ApiResponse<MasterFilterResult>>{
    //@ts-ignore
    return FetchApi('/Teacher/masters',{
        method:'GET',
        params:filterParams
    });
}
export function GetMasterResume(teacherName:string):Promise<ApiResponse<MasterDto>>{
    //@ts-ignore
    return FetchApi(`/Teacher/resume/${teacherName}`,{
        method:'GET',
    });
}
export function AmIMaster():Promise<ApiResponse<boolean>>{
    //@ts-ignore
    return FetchApi(`/Teacher/AmIMaster`,{
        method:'GET',
    });
}