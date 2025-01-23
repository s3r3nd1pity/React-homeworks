import {useEffect} from "react";
import {login} from "../../services/api.services.tsx";

const LoginPageComponent = () => {
    useEffect(() => {
        login(
            {
                username:"emilys",
                password:"emilyspass",
                expiresInMins:1
            }

        ).then( )
    }, []);
    return (
        <div>
log
        </div>
    );
};

export default LoginPageComponent;