export interface CategoryDto{
    id: number;
    creationDate: Date;
    isActive: boolean;
    title: string;
    slug: string;
    children: CategoryDto[];
}