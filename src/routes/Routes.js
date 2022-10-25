import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Error from "../pages/error/Error";
import FAQ from "../pages/faq/FAQ";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import Tutorial from "../pages/Tutorial/Tutorial";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Tutorial></Tutorial>

            },
            {
                path:'/tutorial/:id',
                element:<Tutorial></Tutorial>,
                loader:({params})=>fetch(`http://localhost:5000/programming-languages/${params.id}`)

            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
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