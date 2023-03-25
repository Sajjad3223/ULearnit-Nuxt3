import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {MasterDto} from "~/models/master/MasterDto";
import FormData from "form-data";

export function RegisterMaster(registerData:FormData):Promise<ApiResponse<undefined>>{
    return FetchApi('/Teacher/Register',{
        method:'POST',
        body:registerData
    });
}
export function GetAllMasters():Promise<ApiResponse<MasterDto>>{
    return FetchApi('/Teacher',{
        method:'GET',
    });
}
export function GetRequests():Promise<ApiResponse<MasterDto>>{
    return FetchApi('/Teacher/requests',{
        method:'GET',
    });
}
export function AcceptMasterRequest(masterId:Number):Promise<ApiResponse<MasterDto>>{
    return FetchApi(`/Teacher/Accept?teacherId=${masterId}`,{
        method:'PUT',
    });
}

export function RejectMasterRequest(masterId:Number,reason:String):Promise<ApiResponse<MasterDto>>{
    return FetchApi(`/Teacher/Reject`,{
        method:'PUT',
        body:{
            teacherId: masterId,
            reason: reason
        }
    });
}