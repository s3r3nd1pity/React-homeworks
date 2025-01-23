import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../../services/api.services.tsx";

const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthProducts().then(products=>console.log(products)).catch(reason => console.log(reason))
        refresh().then(() => loadAuthProducts())
    }, []);
    return (
        <div>

        </div>
    );
};

export default AuthResourcesComponent;