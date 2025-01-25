import {createContext} from "react";

type MyContexttype={
counterValue:number
increment:(obj:number)=>void
}
 export const init = {
    counterValue: 0,
    increment: (obj: number) => {
        console.log(obj)//не обращаем внимания на самом деле он не должен ваще ниче делать
    }
};
export const MyContext = createContext<MyContexttype>(init);