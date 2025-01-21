import {IAllInfo} from "../models/IUser.ts";

export const getData=async (pg:string):Promise<IAllInfo>=>{

    return(await fetch('https://reqres.in/api/users?page='+pg)
        .then(value => value.json()))
}