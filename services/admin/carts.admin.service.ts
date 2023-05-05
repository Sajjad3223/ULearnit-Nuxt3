import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {OrderFilterParams, OrderFilterResult} from "~/models/cart/orderFilterData";
import {ChangeOrderStatusViewModel} from "~/models/cart/changeOrderStatusViewModel";

export function GetOrdersByAdmin(filterParams?:OrderFilterParams):Promise<ApiResponse<OrderFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Carts',{
        method:'GET',
        params:filterParams
    });
}
export function ChangeOrderStatus(command:ChangeOrderStatusViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Carts/status`,{
        method:'PUT',
    });
}
export function FinalizeOrder(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/admin/Carts/finalize/${id}`,{
        method:'PUT',
    });
}