import {GetCourseByShortLink} from "~/services/course.service";
import {CurrentDomainUrl} from "~/utilities/ApiUrls";

export default defineEventHandler(async (event) => {
    const shortLink = event.req.url?.split("/")[2];
    if(shortLink){
        const result = await GetCourseByShortLink(shortLink);
        if(result.isSuccess){
            const redirectUrl = `${CurrentDomainUrl}/courses/${result.data.slug}`;
            event.res.writeHead(301,{ location: redirectUrl });
            event.res.end();
        }
    }
})