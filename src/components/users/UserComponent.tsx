import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";

type UserComponentPropType={
    user:IUser
}
const UserComponent:FC<UserComponentPropType> = ({user}) => {
    return (
        <div>
            {user.firstName} {user.lastName}
        </div>
    );
};

export default UserComponent;