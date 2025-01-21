import UsersComponent from "../components/users/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

const Users = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Users;