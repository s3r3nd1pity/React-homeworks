import  {FC} from "react"
import {IUser} from "../../models/IUser.ts";
type UserPropType={
    item:IUser

}
 const UserComponent:FC<UserPropType> = ({item})=>{
    return (
        <p key={item.id}>{item.name}</p>
 )
}
export default UserComponent