import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
import {FC} from "react"

type CharacterComponentType={
    person:ICharacter,
    children:ReactNode
}
export const CharacterComponent:FC<CharacterComponentType>=({person,children})=>{
   return <>
   <h3 className={"font-bold"}>{person.name} {person.surname}, {person.age} years</h3>
       <p>{children}</p>
       <img src={person.photo}/>
   </>
}