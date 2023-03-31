export interface OrderDto{
    id: number
    creationDate: string
    isActive: boolean
    userId: number
    userFullName: string
    discount: Discount
    orderStatus: EOrderStatus
    lastUpdate: string
    items: ItemDto[]
    totalPrice: number
    itemCount: number
}

export enum EOrderStatus{
    Pending,
    Paid,
    Canceled
}
export interface Discount {
    amount: number
    code: string
}

export interface ItemDto {
    id: number
    creationDate: string
    isActive: boolean
    orderId: number
    itemType: number
    itemId: number
    itemName: string
    itemSlug: string
    itemAuthorName: string
    itemBanner: string
    price: number
    count: number
    discount: number
    totalPrice: number
}
