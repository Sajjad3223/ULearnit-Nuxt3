import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {NotificationFilterParams, NotificationFilterResult} from "~/models/notification/notificationDto";

export function GetUserNotifications(filterParams:NotificationFilterParams):Promise<ApiResponse<NotificationFilterResult>>{
    //@ts-ignore
    return FetchApi('/Notification',{
        method:'GET',
        params:filterParams,
    });
}
export function SeenNotification(notifId:number):Promise<ApiResponse<NotificationFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Notification/${notifId}`,{
        method:'PUT',
    });
}
export function SeenNotifications():Promise<ApiResponse<NotificationFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Notification`,{
        method:'PUT',
    });
}

export function DeleteNotification(notifId:number):Promise<ApiResponse<NotificationFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Notification/${notifId}`,{
        method:'DELETE',
    });
}
export function DeleteNotifications():Promise<ApiResponse<NotificationFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Notification`,{
        method:'DELETE',
    });
}