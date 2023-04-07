import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import {CategoryDto} from "~/models/category/categoryDTO";

export function CreateBlogCategory(command:CreateCategoryViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/BlogCategory/Create',{
        method:'POST',
        body:command
    });
}
export function AddBlogCategoryChild(command:AddCategoryChildViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/BlogCategory/AddChild',{
        method:'POST',
        body:command
    });
}

export function GetBlogCategories():Promise<ApiResponse<CategoryDto>>{
    //@ts-ignore
    return FetchApi('/BlogCategory',{
        method:'GET',
    });
}
export function GetBlogCategory(id:Number):Promise<ApiResponse<CategoryDto>>{
    //@ts-ignore
    return FetchApi(`/BlogCategory/${id}`,{
        method:'GET',
    });
}