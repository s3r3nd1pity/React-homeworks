import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import Users from "../pages/Users.tsx";
import HomePage from "../pages/HomePage.tsx";
import Posts from "../pages/Posts.tsx";
import SingleUserDetails from "../pages/SingleUserDetails.tsx";

export const routes = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <Users/>, children: [{path: 'posts/:userId', element: <Posts/>}]},
            {path: 'users/details', element: <SingleUserDetails/>},

        ]
    }
])