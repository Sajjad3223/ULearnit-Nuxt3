import { QuestionDto } from '~/models/question/questionDto';
import { ApiResponse } from '~/models/ApiResponse';
import {CurrentDomainUrl,ApiUrl} from "~/utilities/ApiUrls";

export default defineEventHandler(async (event) => {
    const shortLink = event.req.url?.split("/")[2];
    if(shortLink){
        const url = `${ApiUrl}/api/Question/c/${shortLink}`;
        const result = await $fetch<ApiResponse<QuestionDto>>(url);
        if(result.isSuccess){
            const redirectUrl = `${CurrentDomainUrl}/question/${result.data.postId}/${result?.data?.id}`;
            event.res.writeHead(301,{ location: redirectUrl });
            event.res.end();
        }
    }
})