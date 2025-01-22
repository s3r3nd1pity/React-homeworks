import CarsComponent from "../../components/cars/CarsComponent.tsx";
import {Outlet} from "react-router-dom";

const CarsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <CarsComponent/>
            </div>
    );
};

export default CarsPage;