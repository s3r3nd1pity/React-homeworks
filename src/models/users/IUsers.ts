import {IUser} from "./IUser.ts";

export interface all{
    users:IUser[],
    total:number,
    skip:number,
    limit:number
}