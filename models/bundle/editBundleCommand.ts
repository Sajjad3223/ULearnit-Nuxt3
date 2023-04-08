export interface EditBundleCommand{
    bundleId: number;
    title: string;
    slug: string;
    bannerName: string;
    description: string;
    expirationTime: Date;
    discount:number;
}