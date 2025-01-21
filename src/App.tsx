import './App.css'
import FormComponent from "./components/FormComponent.tsx";
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./services/user.service.tsx";
function App() {
    useEffect(() => {
        getAllUsers().then(value => console.log(value))
        saveUser({name:'olex',id:12,email:'lll@l'}).then(value => console.log(value))
    }, []);
    return (
        <>
            <FormComponent/>
        </>
    )
}

export default App
