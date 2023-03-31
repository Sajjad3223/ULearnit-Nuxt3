import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {AddToCartViewModel} from "~/models/cart/addToCartViewModel";
import {OrderDto} from "~/models/cart/orderDto";
import {OrderItemCommand} from "~/models/cart/orderItemCommand";
import {BaseFilterResult} from "~/models/baseFilterResult";

export function GetPendingCart():Promise<ApiResponse<OrderDto>>{
    return FetchApi('/Cart',{
        method:'GET',
    });
}
export function GetOrderById(id:Number):Promise<ApiResponse<OrderDto>>{
    return FetchApi(`/Cart/${id}`,{
        method:'GET',
    });
}
export function GetUserOrders():Promise<ApiResponse<BaseFilterResult<OrderDto>>>{
    return FetchApi('/Cart/user',{
        method:'GET',
    });
}
export function AddToCart(addToCartViewModel:AddToCartViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/Cart',{
        method:'POST',
        body:addToCartViewModel
    });
}
export function RemoveOrderItem(deleteItemCommand:OrderItemCommand):Promise<ApiResponse<undefined>>{
    return FetchApi('/Cart/item',{
        method:'DELETE',
        body:deleteItemCommand
    });
}