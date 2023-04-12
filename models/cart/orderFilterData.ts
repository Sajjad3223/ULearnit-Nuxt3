import {BaseDto} from "~/models/baseDto";
import {EOrderStatus} from "~/models/cart/orderDto";
import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

export interface OrderFilterData extends BaseDto {
    userId: number;
    userFullName: string | null;
    orderStatus: EOrderStatus;
    lastUpdate: string | null;
    totalPrice: number;
    totalItemCount: number;
}

export interface OrderFilterParams extends BaseFilterParams {
    userId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    status?: EOrderStatus | null;
}

export interface OrderFilterResult extends BaseFilterResult<OrderFilterData>{}