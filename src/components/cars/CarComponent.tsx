import {ICar} from "../../models/cars/ICar.ts";
import {FC} from "react";

type CarComponentPropsType={
    car:ICar
}

const CarComponent:FC<CarComponentPropsType> = ({car}) => {
    return (
        <div>

            {car.id}.{car.brand}
        </div>
    );
};

export default CarComponent;