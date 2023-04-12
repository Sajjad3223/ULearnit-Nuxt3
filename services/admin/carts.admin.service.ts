import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {OrderFilterParams, OrderFilterResult} from "~/models/cart/orderFilterData";

export function GetOrdersByAdmin(filterParams?:OrderFilterParams):Promise<ApiResponse<OrderFilterResult>>{
    //@ts-ignore
    return FetchApi('/admin/Carts',{
        method:'GET',
        params:filterParams
    });
}