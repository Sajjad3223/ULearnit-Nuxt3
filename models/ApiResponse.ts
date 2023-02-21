export interface ApiResponse<TData>{
    isSuccess:boolean;
    data:TData;
    metaData:MetaData;
}

export interface MetaData{
    message:string;
    appStatusCode:AppStatusCode;
}

export enum AppStatusCode{
    Success = 1,
    NotFound,
    BadRequest,
    LogicError,
    UnAuthorize,
    ServerError
}