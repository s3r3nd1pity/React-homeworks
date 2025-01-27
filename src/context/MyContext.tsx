import {createContext} from "react";

export const init={
    theme:"light",
    themeChanger:(theme:string)=>console.log(theme)
}

type MyContextType={
    theme:string,
    themeChanger:(theme:string)=>void
}

export const MyContext=createContext<MyContextType>(init)