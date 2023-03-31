import {useRoute} from "nuxt/app";
import {QuestionFilterParams, QuestionFilterResult} from "~/models/question/questionFilterParams";
import {ApiResponse} from "~/models/ApiResponse";
import {GetQuestions} from "~/services/question.service";

export const useQuestion = () => {
    const route = useRoute();

    const getFilterParams= ()=>{
        const filterParams = {
            pageId:Number(route.query.pageId?.toString() ?? "1"),
            take:Number(route.query.take?.toString() ?? "10"),
            postType :Number(route.query.postType?.toString() ?? "0") === 0 ? null : Number(route.query.postType?.toString()),
            postId:Number(route.query.postId?.toString() ?? "0") === 0 ? null : Number(route.query.postId?.toString()),
            //startDate:Date.parse(route.query.startDate?.toString())
            isResolved:getBoolean(route.query.isResolved?.toString()) === false ? null : getBoolean(route.query.isResolved?.toString()),
        } as QuestionFilterParams;

        return filterParams;
    }

    const router = useRouter();
    const changePageId = async (pageId: number) => {
        const currentPath = route.path;
        const queryParams = route.query;
        await router.push({
            path: currentPath,
            query: { ...queryParams, pageId },
        });
    };

    const getQuestionsByFilter=():Promise<ApiResponse<QuestionFilterResult>> => {
        const params = getFilterParams();
        return GetQuestions(params);
    }

    return {getFilterParams, getQuestionsByFilter, changePageId};
}

function getBoolean(value:any): boolean {
    switch (value) {
        case true:
        case "true":
        case 1:
        case "1":
            return true;
        default:
            return false;
    }
}