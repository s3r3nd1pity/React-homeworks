import {useEffect, useState} from "react";

export const useFetch=<T,>(endPointUrl:string,defaultValue:T) =>{

    const [obj,setObj]=useState<T>(defaultValue)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com" + '/'+endPointUrl)
            .then(value => value.json())
            .then(value =>setObj(value) )
    }, []);
 return obj
}