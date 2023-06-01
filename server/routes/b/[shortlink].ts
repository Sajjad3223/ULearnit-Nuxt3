import { PostDto } from '~/models/blog/postDto';
import { ApiResponse } from '~/models/ApiResponse';
import {CurrentDomainUrl,ApiUrl} from "~/utilities/ApiUrls";

export default defineEventHandler(async (event) => {
    const shortLink = event.req.url?.split("/")[2];
    if(shortLink){
        const url = `${ApiUrl}/api/Blog/c/${shortLink}`;
        const result = await $fetch<ApiResponse<PostDto>>(url);
        if(result.isSuccess){
            const redirectUrl = `${CurrentDomainUrl}/blog/${result?.data?.slug}`;
            event.res.writeHead(301,{ location: redirectUrl });
            event.res.end();
        }
    }
})