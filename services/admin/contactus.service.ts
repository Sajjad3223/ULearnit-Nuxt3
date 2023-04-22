import {ContactUsCommand, CreateNewsletterCommand} from "~/models/contactus/contactUsCommand";
import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";

export function CreateContact(command:ContactUsCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/ContactUs',{
        method:'POST',
        body:command
    });
}
export function SubscribeNewsletter(command:CreateNewsletterCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/ContactUs/newsletter/subscribe',{
        method:'POST',
        body:command
    });
}
export function UnSubscribeNewsletter(email:string):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/ContactUs/newsletter/unsubscribe',{
        method:'POST',
        body:{
            email
        }
    });
}