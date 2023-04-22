export interface ContactUsCommand{
    fullName:string;
    phoneNumber:string;
    email:string;
    text:string;
}

export interface CreateNewsletterCommand{
    fullName?:string | null;
    email:string;
}