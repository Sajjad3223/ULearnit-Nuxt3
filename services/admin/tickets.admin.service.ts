import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {TicketFilterParams, TicketFilterResult} from "~/models/ticket/ticketDto";

export function GetTicketsByAdmin(filterParams?:TicketFilterParams):Promise<ApiResponse<TicketFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Tickets',{
        method:'GET',
        params:filterParams
    });
}
export function CloseTicket(id:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Tickets/close/${id}`,{
        method:'PUT',
    });
}