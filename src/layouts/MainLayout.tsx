import {Outlet} from "react-router-dom";
import Menu from "../components/menu/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;