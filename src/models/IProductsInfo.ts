import {IProduct} from "./IProduct.ts";

export type IProductsInfo={
    total:number,
    skip:number,
    limit:number,
    products:IProduct[],

}