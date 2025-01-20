import {Meow} from "../models/ITodo.ts";

export const getTodos= async ():Promise<Meow>=>{
    return( await fetch(import.meta.env.VITE_API_TODOS)
            .then(value => value.json())
    )
}