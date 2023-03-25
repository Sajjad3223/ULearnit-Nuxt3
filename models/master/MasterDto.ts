import {UserDto} from "~/user/userDto";

export interface MasterDto{
    id: number;
    creationDate: Date;
    isActive: boolean;
    teacherName: string;
    cvFileName: string;
    status: number;
    user:UserDto;
}