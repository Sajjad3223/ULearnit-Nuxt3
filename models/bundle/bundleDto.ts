import {CourseDto} from "~/models/course/courseDto";
import {UserDto} from "~/models/user/userDto";

export interface BundleDto{
    id: null;
    creationDate: Date;
    isActive: boolean;
    title: string;
    slug: string;
    bannerName: string;
    description: string;
    expirationTime: Date;
    totalPrice: number;
    discount: number;
    finalPrice: number;
    items:BundleItemDto[];
    user:UserDto;
}

export interface BundleItemDto{
    id: number ;
    creationDate:Date ;
    isActive:boolean ;
    bundleId:number ;
    banner:string ;
    title:string ;
    slug:string ;
    price:number ;
    course:CourseDto;
}