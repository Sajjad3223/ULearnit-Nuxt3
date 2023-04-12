import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {PermissionDto, RoleDto} from "~/models/role/roleDto";
import {CreateRoleCommand} from "~/models/role/createRoleCommand";
import {SetRolePermissionsCommand} from "~/models/role/setRolePermissionsCommand";

export function CreateRole(command:CreateRoleCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Role',{
        method:'POST',
        body:command
    });
}
export function CreatePermission(command:CreateRoleCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Role/Permissions',{
        method:'POST',
        body:command
    });
}
export function SetRolePermissions(command:SetRolePermissionsCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Role/SetPermissions',{
        method:'PUT',
        body:command
    });
}

export function EditRole(roleId:number,title:string):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Role',{
        method:'PUT',
        body:{
            roleId,
            title
        }
    });
}
export function EditPermission(permissionId:number,title:string):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/admin/Role/Permissions',{
        method:'PUT',
        body:{
            permissionId,
            title
        }
    });
}
export function GetRoles():Promise<ApiResponse<RoleDto>>{
    //@ts-ignore
    return FetchApi(`/admin/Role`,{
        method:'GET',
    });
}
export function GetRole(id:Number):Promise<ApiResponse<RoleDto>>{
    //@ts-ignore
    return FetchApi(`/admin/Role/${id}`,{
        method:'GET',
    });
}
export function GetPermissions():Promise<ApiResponse<PermissionDto>>{
    //@ts-ignore
    return FetchApi(`/admin/Role/Permissions`,{
        method:'GET',
    });
}
export function GetPermission(id:Number):Promise<ApiResponse<PermissionDto>>{
    //@ts-ignore
    return FetchApi(`/admin/Role/Permissions/${id}`,{
        method:'GET',
    });
}