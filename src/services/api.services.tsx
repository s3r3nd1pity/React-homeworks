import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsInfo} from "../models/IProductsInfo.ts";
import {retriveLocalStorage} from "./helpers.tsx";
import {ITokenPair} from "../models/ITokenPair.ts";
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
axiosInstance.interceptors.request.use((request)=>{
    if(request.method?.toUpperCase()==='GET'){
        request.headers.Authorization='Bearer '+retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request
})
export const loadAuthProducts= async ():Promise<IProduct[]>=>{
    const response= await axiosInstance.get<IProductsInfo>('/products',{})
    return (response.data.products)
}
export const refresh=async ()=>{
    const IUserWithToken=retriveLocalStorage<IUserWithTokens>('user')
    const {data:{refreshToken,accessToken}} = await axiosInstance.post<ITokenPair>('/refresh',{refreshToken:IUserWithToken.refreshToken,expiresInMins:1})
    IUserWithToken.refreshToken=refreshToken
    IUserWithToken.accessToken=accessToken
        localStorage.setItem("user", JSON.stringify(IUserWithToken))

}