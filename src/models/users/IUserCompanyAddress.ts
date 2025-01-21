import {CompanyAddressCoordinates} from "./IUserCompanyAddressCoordinates.ts";

export interface CompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: CompanyAddressCoordinates;
    country: string;
}