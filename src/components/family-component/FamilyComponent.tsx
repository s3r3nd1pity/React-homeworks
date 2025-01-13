import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import {simpsons} from "../../data/simpsons-data.ts";

export const FamilyComponent=()=>{
    return <div>
        {simpsons.map((person)=><CharacterComponent person={person}>
                {person.info}
            </CharacterComponent>)}
    </div>
}