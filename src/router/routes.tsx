import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/home/HomePage.tsx";
import CarsPage from "../pages/cars/CarsPage.tsx";
import FormPage from "../pages/forms/FormPage.tsx";

export const routes=createBrowserRouter(
    [
        {path:'',element:<MainLayout/>,children:[
                {index:true,element:<HomePage/>},
                {path:'cars',element:<CarsPage/>,children:[
                        {path:'post',element:<FormPage/>}
                    ]}
            ]}
    ]
)