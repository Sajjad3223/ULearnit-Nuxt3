import {RegisterViewModel} from "~/models/auth/registerViewModel";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {ApiResponse} from "~/models/ApiResponse";
import {LoginViewModel} from "~/models/auth/loginViewModel";
import {LoginResultDto} from "~/models/auth/loginResultDto";

export function RegisterUser(command:RegisterViewModel) : Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi("/auth/register",{
        method:"POST",
        body:command,
    });
}

export function LoginUser(command:LoginViewModel) : Promise<ApiResponse<LoginResultDto>>{
    //@ts-ignore
    return FetchApi("/auth/login",{
        method:"POST",
        body:command,
    });
}

export function RefreshToken(refreshToken:string) : Promise<ApiResponse<LoginResultDto>>{
    //@ts-ignore
    return FetchApi("/auth/refreshToken",{
        method:"POST",
        body:refreshToken,
    });
}

export function LogoutUser() : Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi("/auth/logout",{
        method:"DELETE",
    });
}