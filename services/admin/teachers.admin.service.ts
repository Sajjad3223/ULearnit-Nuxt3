import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {MasterDto} from "~/models/master/MasterDto";

export function GetMastersByAdmin():Promise<ApiResponse<MasterDto>>{
    //@ts-ignore
    return FetchApi('/admin/Teachers',{
        method:'GET',
    });
}