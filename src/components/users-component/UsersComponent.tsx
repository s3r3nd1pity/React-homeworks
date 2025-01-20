import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-components/UserComponent.tsx";
import {getUsers} from "../../services/api.services.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            });
    }, [])
    return (
        <div>
            {
                users.map(value => <UserComponent item={value}/>)

            }
            bebe
        </div>
    );
};

export default UsersComponent;