import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";
import {IUser} from "../../models/users/IUser.ts";
import {getUsersInfo} from "../../services/api.services.tsx";
import {useSearchParams} from "react-router-dom";

const UsersComponent = () => {
    const [users,setUsers]=useState<IUser[]>([])
    const [searchParams]=useSearchParams({page:'1'})
    useEffect(() => {
        const currentPage=searchParams.get('page')||'1'
        getUsersInfo(currentPage)
            .then(value =>setUsers(value.users) )
    }, [searchParams]);
    return (
        <div>
            {
                users.map(user=><UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;