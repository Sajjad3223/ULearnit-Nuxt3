import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import {CategoryDto} from "~/models/category/categoryDTO";
import {EditCategoryCommand} from "~/models/category/editCategoryCommand";

export function CreateRoadmapCategory(command:CreateCategoryViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/RoadmapCategory/Create',{
        method:'POST',
        body:command
    });
}

export function GetRoadmapCategories():Promise<ApiResponse<CategoryDto>>{
    //@ts-ignore
    return FetchApi('/RoadmapCategory',{
        method:'GET',
    });
}
export function GetRoadmapCategory(id:Number):Promise<ApiResponse<CategoryDto>>{
    //@ts-ignore
    return FetchApi(`/RoadmapCategory/${id}`,{
        method:'GET',
    });
}
export function EditRoadmapCategory(command:EditCategoryCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/RoadmapCategory/Edit`,{
        method:'PUT',
        body:command
    });
}
export function DeleteRoadmapCategory(id:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/RoadmapCategory/Delete/${id}`,{
        method:'DELETE',
    });
}

