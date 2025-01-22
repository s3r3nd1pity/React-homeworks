import {ICar} from "../models/cars/ICar.ts";
import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: "http://owu.linkpc.net/carsAPI/v1",
        headers: {"Content-Type": "application/json"}
    }
)

export const getAllCars=async ():Promise<ICar[]>=>{
   const {data}=await axiosInstance.get<ICar[]>('/cars')
    return (data)
}
export const saveCar=async (car:ICar)=>{
    await axiosInstance.post<ICar[]>('/cars',car)

}