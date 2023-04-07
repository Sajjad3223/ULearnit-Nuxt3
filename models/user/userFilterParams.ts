import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

export interface UserFilterParams extends BaseFilterParams{
    phoneNumber: string | null | undefined;
    email: string | null | undefined;
    id: number | null | undefined;
}

export interface UserFilterData{
    id: number
    creationDate: Date
    isActive: boolean
    firstName: string
    lastName: string
    fullName: string
    phoneNumber: string
    email: string
    website: string
    avatar: string
}

export interface UserFilterResult extends BaseFilterResult<UserFilterData>{}