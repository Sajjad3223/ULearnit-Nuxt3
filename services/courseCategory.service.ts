import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import {CategoryDto} from "~/models/category/categoryDTO";

export function CreateCourseCategory(command:CreateCategoryViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/CourseCategory/Create',{
        method:'POST',
        body:command
    });
}
export function AddCourseCategoryChild(command:AddCategoryChildViewModel):Promise<ApiResponse<undefined>>{
    return FetchApi('/CourseCategory/AddChild',{
        method:'POST',
        body:command
    });
}

export function GetCourseCategories():Promise<ApiResponse<CategoryDto>>{
    return FetchApi('/CourseCategory',{
        method:'GET',
    });
}
export function GetCourseCategory(id:Number):Promise<ApiResponse<CategoryDto>>{
    return FetchApi(`/CourseCategory/${id}`,{
        method:'GET',
    });
}