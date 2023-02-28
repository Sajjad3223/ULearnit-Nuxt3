
export interface UserDto {
    id: Number;
    creationDate: Date;
    isActive: boolean;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    avatar: string;
    website: string;
    description: string;
    roles: UserRoleDto[];
}

export interface UserRoleDto {
    roleId: number;
    roleTitle: string;
}