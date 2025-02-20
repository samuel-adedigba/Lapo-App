import { lazy } from "react";
export const privateRoutes =[
    {
        key: 'Dashboard',
        path: '/',
       component: lazy(() => import("../pages/Dashboards/UserDashboard")),
   },  
]