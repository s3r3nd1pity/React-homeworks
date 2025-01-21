import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getData} from "../../services/api.services.tsx";
import {IUser} from "../../models/IUser.ts";

const Some = () => {
    const [query] = useSearchParams()
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(
        () => {
            if (query) {
                const pg = query.get('pg')//остали значение странички в строке
                getData(pg || '1')
                    .then(value => setUsers(value.data))
            }
        },
        [query])
    return (
        <div>
            {
                users.map(value => <div key={value.id}>{value.first_name} {value.last_name}</div>)
            }
        </div>
    );
};

export default Some;