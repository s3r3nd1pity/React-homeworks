import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";

type UserComponentPropsType={
    user:IUser
}
const UserComponent:FC<UserComponentPropsType> = ({user}) => {

    return (
        <div>
            {user.id}.{user.firstName} {user.lastName}
        </div>
    );
};

export default UserComponent;