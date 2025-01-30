import {useAppSelector} from "../../redux/hooks/useSlice.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../../redux/slices/users/userSlice.tsx";

const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice)//это наше хранилище store in main.tsx


    const dispatch = useAppDispatch()//аналог сетстейт, сетает актион

    useEffect(() => {
       dispatch(usersSliceActions.loadUsers())
    }, []);


    return (
        <div>
            {
                users.map((user) => {
                    return (<div key={user.id}>{user.name}</div>)
                })
            }
        </div>
    );
};

export default UsersComponent;