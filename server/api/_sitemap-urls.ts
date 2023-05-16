//server/api/_sitemap-urls.ts
import {$fetch} from "ofetch";
import {SiteMapDto} from "~/models/sitemapDto";
import {ApiUrl} from "~/utilities/ApiUrls";

export default cachedEventHandler(
    async (e) => {
        const courses = await $fetch<SiteMapDto[]>(`${ApiUrl}/api/Sitemap/courses`,{method:'GET'});
        const posts = await $fetch<SiteMapDto[]>(`${ApiUrl}/api/Sitemap/posts`,{method:'GET'});
        const roadmapPosts = await $fetch<SiteMapDto[]>(`${ApiUrl}/api/Sitemap/roadmap-posts`,{method:'GET'});
        const masters = await $fetch<SiteMapDto[]>(`${ApiUrl}/api/Sitemap/masters`,{method:'GET'});
        const bundles = await $fetch<SiteMapDto[]>(`${ApiUrl}/api/Sitemap/bundles`,{method:'GET'});
        const questions = await $fetch<SiteMapDto[]>(`${ApiUrl}/api/Sitemap/questions`,{method:'GET'});
        return [...courses,...posts,...roadmapPosts,...masters,...bundles,...questions].map((p) => {
            return {
                loc: p.url,
                lastmod: p.lastMod,
            };
        });
    },
    {
        name: 'sitemap-dynamic-url',
        maxAge: 60 * 10, // cache URLs for 10 minutes
    }
);
