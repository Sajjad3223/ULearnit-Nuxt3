export interface BaseFilterResult<T>{
    entityCount:number;
    currentPage:number;
    pageCount:number;
    startPage:number;
    endPage:number;
    take:number;
    data:T[];
}

export interface PaginationData{
    entityCount:number;
    currentPage:number;
    pageCount:number;
    startPage:number;
    endPage:number;
    take:number;
}