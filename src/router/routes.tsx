import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routes=createBrowserRouter(
    [
        {path:'/',element:<MainLayout/>, children:
        [
            {path:'',element:<HomePage/>},
            {path:'users',element:<UsersPage/>}
        ]}
    ]
)