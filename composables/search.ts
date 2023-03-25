
import {useRoute} from "nuxt/app";
import {CourseFilterParams, CourseFilterResult} from "~/models/course/courseSearchResultDto";
import {ApiResponse} from "~/models/ApiResponse";
import {GetCourseFilter} from "~/services/course.service";

export const useSearch = () => {
    const route = useRoute();

    const getFilterParams = ():CourseFilterParams => {

        const res = {
            pageId:Number(route.query.pageId?.toString() ?? "1"),
            take:10,
        } as CourseFilterParams;

        return res;
    }

    const getCoursesByFilter = ():Promise<ApiResponse<CourseFilterResult>> => {
        const params:CourseFilterParams = getFilterParams();

        return GetCourseFilter(params);
    }

    return {getFilterParams,getCoursesByFilter};
}