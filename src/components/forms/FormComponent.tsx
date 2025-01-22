import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsValidator} from "../../validators/cars.validator.tsx";
import {ICar} from "../../models/cars/ICar.ts";
import {saveCar} from "../../services/car.services.tsx";

interface IFormProps {
    brand: string,
    year: number,
    price: number
}

const FormComponent = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IFormProps>(
        {mode: 'all', resolver: joiResolver(carsValidator)}
    )
    const customHandler = (data: ICar) => {
saveCar(data)    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type={'text'} {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>

                <label>
                    <input type={'number'} {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>

                <label>
                    <input type={'number'} {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;