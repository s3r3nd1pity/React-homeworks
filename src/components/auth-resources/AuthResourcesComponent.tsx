import {useEffect} from "react";
import {loadAuthProducts} from "../../services/api.services.tsx";

const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthProducts()
    }, []);
    return (
        <div>

        </div>
    );
};

export default AuthResourcesComponent;