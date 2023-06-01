import {CurrentDomainUrl} from "~/utilities/ApiUrls";
import {GetPostByShortLink} from "~/services/blog.service";

export default defineEventHandler(async (event) => {
    const shortLink = event.req.url?.split("/")[2];
    if(shortLink){
        const result = await GetPostByShortLink(shortLink);
        if(result.isSuccess){
            const redirectUrl = `${CurrentDomainUrl}/blog/${result.data.slug}`;
            event.res.writeHead(301,{ location: redirectUrl });
            event.res.end();
        }
    }
})