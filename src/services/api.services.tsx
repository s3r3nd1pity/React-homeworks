import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsInfo} from "../models/IProductsInfo.ts";
const axiosInstance=axios.create(
    {
        baseURL:'https://dummyjson.com/auth',
        headers:{}
    }
)
type LoginData={
    username:string,
    password:string,
    expiresInMins:number
}
export const login=async ({username,password,expiresInMins}:LoginData):Promise<IUserWithTokens>=>{
   const {data}= await axiosInstance.post<IUserWithTokens>("/login",{username,password,expiresInMins})
    localStorage.setItem("user",JSON.stringify(data))
    return (data)
}
export const loadAuthProducts= async ():Promise<IProduct>=>{
    const {data}=axiosInstance.get<IProductsInfo>('/products',{})
    return (data.products)

}