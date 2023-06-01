import {CurrentDomainUrl} from "~/utilities/ApiUrls";
import {GetQuestionByShortLink} from "~/services/question.service";

export default defineEventHandler(async (event) => {
    const shortLink = event.req.url?.split("/")[2];
    if(shortLink){
        const result = await GetQuestionByShortLink(shortLink);
        if(result.isSuccess){
            const redirectUrl = `${CurrentDomainUrl}/questions/${result.data.postId}/${result.data.id}`;
            event.res.writeHead(301,{ location: redirectUrl });
            event.res.end();
        }
    }
})