export interface AddToCartViewModel{
    itemType:EItemType;
    itemId:Number;
    count:Number;
}

export enum EItemType{
    Course,
    Project,
    Plugin,
    Game
}