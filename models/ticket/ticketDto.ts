import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

export interface TicketDto{
    id: number
    title: string
    userId: number
    ownerFullName: string
    text: string
    ticketStatus: ETicketStatus
    creationDate: Date
    messages: Message[]
}

export enum ETicketStatus{
    Pending,
    Answered,
    Closed
}

export interface Message {
    id: number
    ticketId: number
    userId: number
    userFullName: string
    message: string
    creationDate: Date
}

export interface TicketFilterData{
    id: number
    creationDate: Date
    isActive: boolean
    title: string
    userId: number
    ownerFullName: string
    ticketStatus: ETicketStatus
}

export interface TicketFilterParams extends BaseFilterParams{
    ticketStatus: ETicketStatus
    search: string
    userId: number
}

export interface TicketFilterResult extends BaseFilterResult<TicketFilterData>{

}