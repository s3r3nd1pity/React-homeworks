import {ICompany} from "./ICompany.ts";
import {IAdress} from "./IAdress.ts";

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAdress;
	phone: string;
	website: string;
	company: ICompany;
}


