import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import AuthLayout from "../layout";
import ForgotPassword from "../pages/ForgotPassword";
import Logout from "../pages/Logout";
import Profile from "../components/Profile";
import AddTodo from "../components/AddTodo";
import ShowTodos from "../components/ShowTodos";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : "register",
                element : <AuthLayout><RegisterPage/></AuthLayout>
            },
            {
                path : "email",
                element : <AuthLayout><CheckEmailPage/></AuthLayout>
            },
            {
                path : "login",
                element : <AuthLayout><CheckEmailPage/></AuthLayout>
            },
            {
                path : "password",
                element : <AuthLayout><CheckPasswordPage/></AuthLayout>
            },
            {
                path : "forgot-password",
                element : <AuthLayout><ForgotPassword/></AuthLayout>
            },
            {
                path : "logout",
                element : <AuthLayout><Logout/></AuthLayout>
            },
            {
                path : "profile",
                element : <AuthLayout><Profile/></AuthLayout>
            },
            {
                path : "",
                element : <Home/>,                
            },
            {
                path : "showtodos",
                element : <ShowTodos/>,                
            },
            {
                path : "addtodo",
                element : <AddTodo/>,                
            },
        ]
    }
])

export default router ;