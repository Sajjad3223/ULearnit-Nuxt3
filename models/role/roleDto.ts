export interface RoleDto{
    id:number
    creationDate:Date
    isActive:boolean
    title:string
    permissions:PermissionDto[]
}

export interface PermissionDto{
    id:number
    creationDate:Date
    isActive:boolean
    title:string
}