import {CreateTicketCommand} from "~/models/ticket/createTicketCommand";
import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {TicketDto, TicketFilterParams, TicketFilterResult} from "~/models/ticket/ticketDto";
import {SendTicketMessageCommand} from "~/models/ticket/sendTicketMessageCommand";

export function CreateTicket(command:CreateTicketCommand):Promise<ApiResponse<number>>{
    // @ts-ignore
    return FetchApi('/Ticket',{
        method:'POST',
        body:command,
    })
}
export function SendTicketMessage(command:SendTicketMessageCommand):Promise<ApiResponse<undefined>>{
    // @ts-ignore
    return FetchApi(`/Ticket/${command.ticketId}`,{
        method:'POST',
        body:command
    })
}
export function GetTicket(id:number):Promise<ApiResponse<TicketDto>>{
    // @ts-ignore
    return FetchApi(`/Ticket/${id}`,{
        method:'GET',
    })
}
export function GetTickets(filterParams:TicketFilterParams):Promise<ApiResponse<TicketFilterResult>>{
    // @ts-ignore
    return FetchApi('/Ticket',{
        method:'GET',
        params:filterParams
    })
}
export function GetUserTickets():Promise<ApiResponse<TicketFilterResult>>{
    // @ts-ignore
    return FetchApi('/Ticket/user',{
        method:'GET',
    })
}