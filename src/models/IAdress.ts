import {IGEo} from "./IGeo.ts";

export interface IAdress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGEo;
}