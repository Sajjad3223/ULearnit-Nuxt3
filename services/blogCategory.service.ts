import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import {CategoryDto} from "~/models/category/categoryDTO";

export function CreateBlogCategory(command:CreateCategoryViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/BlogCategory/Create',{
        method:'POST',
        body:command
    });
}
export function AddBlogCategoryChild(command:AddCategoryChildViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/BlogCategory/AddChild',{
        method:'POST',
        body:command
    });
}

export function GetBlogCategories():Promise<ApiResponse<CategoryDto>>{
    return FetchApi('/BlogCategory',{
        method:'GET',
    });
}
export function GetBlogCategory(id:Number):Promise<ApiResponse<CategoryDto>>{
    return FetchApi(`/BlogCategory/${id}`,{
        method:'GET',
    });
}