
export const RemoveEmptyProps=(object)=>{
    for(const key in object){
        //@ts-ignore
        if(object[key] === "" || object[key] === null || object[key] === undefined){
            //@ts-ignore
            delete object[key];
        }
    }
}