import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/api.services.tsx";
import {IUser} from "../../models/users/IUser.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([])
    useEffect(() => {
        if (allUsers) {
            getAllUsers()
                .then(
                    ({users}) => {
                        setAllUsers(users)
                    }
                )
        }
    },[])
    return (
        <div>
            {
                allUsers.map(value => <UserComponent key={value.id} user={value}/>)
            }

        </div>
    );
};

export default UsersComponent;