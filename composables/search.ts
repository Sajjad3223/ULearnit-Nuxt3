import {useRoute} from "nuxt/app";
import {CourseFilterParams, CourseFilterResult} from "~/models/course/courseSearchResultDto";
import {ApiResponse} from "~/models/ApiResponse";
import {GetCourseFilter} from "~/services/course.service";

export const useSearch = () => {
    const route = useRoute();

    const getFilterParams = ():CourseFilterParams => {

        let categorySlug = null;
        if(route.params?.slug)
            categorySlug = route.params?.slug[0]?.split('category-')[1];

        return  {
            pageId: Number(route.query.pageId?.toString() ?? "1"),
            take: Number(route.query.take?.toString() ?? "1"),
            search: route.query?.q ?? null,
            categorySlug: categorySlug ?? null,
            orderFilter: route.query?.orderBy ?? null,
            priceFilter: route.query?.price ?? null,
            requirement: route.query?.requires ?? null,
        } as CourseFilterParams;
    }

    const getCoursesByFilter = ():Promise<ApiResponse<CourseFilterResult>> => {
        const params:CourseFilterParams = getFilterParams();

        return GetCourseFilter(params);
    }

    return {getFilterParams,getCoursesByFilter};
}