import {BaseFilterResult, PaginationData} from "~/models/baseFilterResult";

export function FillPaginationData<T>(result:BaseFilterResult<T>):PaginationData{
    return {
        take:result.take,
        currentPage:result.currentPage,
        endPage:result.endPage,
        entityCount:result.entityCount,
        pageCount:result.pageCount,
        startPage:result.startPage
    } as PaginationData;
}