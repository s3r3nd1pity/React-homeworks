import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.services.tsx";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers()
            .then(allUsers=>setUsers(allUsers))
    }, [])

    return (
        <div>
            {
                users.map(user=><UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;