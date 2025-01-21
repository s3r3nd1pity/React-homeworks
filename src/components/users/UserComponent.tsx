import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link, useNavigate} from "react-router-dom";

type UserPropType={
    item:IUser
}
const UserComponent:FC<UserPropType> = ({item}) => {
    const navigate =useNavigate()
    const handleOnClick=()=>{
        navigate('posts/'+item.id,{state:item})
    }
    return (
        <div>
            <Link to={'details'} state={item}>{item.name}, {item.username}</Link>
            <button onClick={handleOnClick}>    posts</button>
        </div>
    );
};

export default UserComponent;