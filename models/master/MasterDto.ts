import {UserDto} from "~/models/user/userDto";
import {BaseDto} from "~/models/baseDto";
import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

export interface MasterDto extends BaseDto{
    teacherName: string;
    cvFileName: string;
    status: EMasterStatus;
    user:UserDto;
}

export interface MasterFilterParams extends BaseFilterParams{
    search?: string | null;
    teacherStatus?: EMasterStatus | null;
}

export enum EMasterStatus{
    Pending,
    Active,
    Inactive
}

export interface MasterFilterResult extends BaseFilterResult<MasterDto>{

}