import {CompanyAddress} from "./IUserCompanyAddress.ts";

export interface Company {
    department: string;
    name: string;
    title: string;
    address: CompanyAddress;
}