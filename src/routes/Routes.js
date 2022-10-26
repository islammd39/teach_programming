import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Error from "../pages/error/Error";
import FAQ from "../pages/faq/FAQ";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import Tutorial from "../pages/Tutorial/Tutorial";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://b610-lerning-platform-server-side-islammd39.vercel.app/programming-languages/')

            },
            {
                path:'/tutorial/:id',
                element:<PrivateRoutes><Tutorial></Tutorial></PrivateRoutes>,
                loader:({params})=>fetch(`https://b610-lerning-platform-server-side-islammd39.vercel.app/programming-languages/${params.id}`)

            },
            {
                path:'/faq',
                element:<PrivateRoutes><FAQ></FAQ></PrivateRoutes>
            },
            {
                path:'/blog',
                element:<PrivateRoutes><Blog></Blog></PrivateRoutes>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'*',
                element:<Error></Error>
            }
        ]
    }
])