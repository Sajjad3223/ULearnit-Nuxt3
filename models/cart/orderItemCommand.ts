import {EItemType} from "~/models/cart/addToCartViewModel";

export interface OrderItemCommand{
    itemType : EItemType;
    itemId:Number;
    count:Number;
}