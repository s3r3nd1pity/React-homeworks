import {IUser} from "../../models/IUser.ts";
import {useLocation} from "react-router-dom";

const SingleUserDetailsComponent = () => {
    const {state}=useLocation()
    const user =state as IUser
    return (

        <div>
            {user.email}
        </div>
    );
};

export default SingleUserDetailsComponent;