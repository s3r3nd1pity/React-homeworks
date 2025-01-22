import {useEffect, useState} from "react";
import {ICar} from "../../models/cars/ICar.ts";
import {getAllCars} from "../../services/car.services.tsx";
import CarComponent from "./CarComponent.tsx";
import {Link} from "react-router-dom";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars().then(value => setCars(value))
    }, []);
    return (
        <div>
            <Link to={'post'}>Post new Car</Link>
            <hr/>
            {
                cars.map(value => <CarComponent car={value} key={value.id}/>)
            }
        </div>
    );
};

export default CarsComponent;