import { lazy } from "react";
export const privateRoutes =[
    {
        key: 'Dashboard',
        path: '/',
       component: lazy(() => import("../pages/views/UserDashboard")),
   },  
   {
    key: 'Card Request',
    path: '/card-request/:id',
   component: lazy(() => import("../pages/views/CardRequestDetails")),
},  
{
    key: 'Card Request Details',
    path: '/card-request',
   component: lazy(() => import("../pages/views/CardRequest")),
},  
{
    key: 'Card Request Details',
    path: '/card-profile',
   component: lazy(() => import("../pages/views/CardProfile")),
},  
{
    key: 'Create Card',
    path: '/create-card',
   component: lazy(() => import("../pages/views/CreateProfile")),
}, 
]