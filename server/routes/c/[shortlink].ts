import { ApiResponse } from '~/models/ApiResponse';
import { CourseDto } from '~/models/course/courseDto';
import {CurrentDomainUrl,ApiUrl} from "~/utilities/ApiUrls";

export default defineEventHandler(async (event) => {
    const shortLink = event.req.url?.split("/")[2];
    if(shortLink){
        const url = `${ApiUrl}/api/Course/c/${shortLink}`;
        const result = await $fetch<ApiResponse<CourseDto>>(url);
        if(result.isSuccess){
            const redirectUrl = `${CurrentDomainUrl}/courses/${result?.data?.slug}`;
            event.res.writeHead(301,{ location: redirectUrl });
            event.res.end();
        }
    }
})