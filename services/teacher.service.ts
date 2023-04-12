import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {MasterDto} from "~/models/master/MasterDto";
import FormData from "form-data";

export function RegisterMaster(registerData:FormData):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Teacher/Register',{
        method:'POST',
        body:registerData
    });
}
export function GetAllMasters():Promise<ApiResponse<MasterDto>>{
    //@ts-ignore
    return FetchApi('/Teacher',{
        method:'GET',
    });
}
export function GetRequests():Promise<ApiResponse<MasterDto>>{
    //@ts-ignore
    return FetchApi('/Teacher/requests',{
        method:'GET',
    });
}
export function AcceptMasterRequest(masterId:Number):Promise<ApiResponse<MasterDto>>{
    //@ts-ignore
    return FetchApi(`/Teacher/Accept?teacherId=${masterId}`,{
        method:'PUT',
    });
}

export function RejectMasterRequest(masterId:Number,reason:String):Promise<ApiResponse<MasterDto>>{
    //@ts-ignore
    return FetchApi(`/Teacher/Reject`,{
        method:'PUT',
        body:{
            teacherId: masterId,
            reason: reason
        }
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