import Swal from "sweetalert2";

export function successAlert(title='عملیات با موفقیت انجام شد',desc:string="",hasTimer:boolean=true){
    Swal.fire({
        title:title,
        text:desc,
        icon:'success',
        timer:5000,
        timerProgressBar:hasTimer,
        confirmButtonText:'باشه'
    });
}
export function errorAlert(title='مشکلی در عملیات رخ داده است!',desc:string="",hasTimer:boolean=true){
    Swal.fire({
        title:title,
        text:desc,
        icon:'error',
        timer:5000,
        timerProgressBar:hasTimer,
        confirmButtonText:'باشه'
    });
}