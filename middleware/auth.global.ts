export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path.toLocaleLowerCase().startsWith('/userpanel') ||
       to.path.toLocaleLowerCase().startsWith('/admin') ||
       to.path.toLocaleLowerCase().startsWith('/cart') ||
       to.path.toLocaleLowerCase().startsWith('/masterpanel')
        ){
        //@ts-ignore
        if(process.client)
        {
            const token = localStorage.getItem('auth-data');
            if(!token){
                return navigateTo(`/auth/login?returnTo=${to.path}`);
            }
        }
    }
})
