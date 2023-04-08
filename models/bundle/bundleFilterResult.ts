import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

export interface BundleFilterData{
    id: number;
    creationDate: Date;
    isActive: boolean;
    title: string;
    slug: string;
    bannerName: string;
    expirationTime: Date;
    itemsCount: number;
    totalPrice: number;
    discount: number;
    finalPrice: number;
}

export interface BundleFilterParams extends BaseFilterParams{
    search?:string | null;
    justActiveBundles?: boolean;
    minPrice?: number | null;
    userId?: number | null;
}

export interface BundleFilterResult extends BaseFilterResult<BundleFilterData>{}