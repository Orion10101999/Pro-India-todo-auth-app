import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import AuthLayout from "../layout";
import ForgotPassword from "../pages/ForgotPassword";
import ShowTodos from "../pages/ShowTodos";
import DeleteTodo from "../pages/DeleteTodo";
import UpdateTodo from "../pages/UpdateTodo";


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
                path : "",
                element : <Home/>,                
            },
        ]
    }
])

export default router ;