import {MyContext} from "../context/MyContext.tsx";
import {useContext} from "react";

const BranchLeftA1 = () => {
    const {themeChanger} = useContext(MyContext)
    const handlerDark = () => {
        themeChanger('dark')

    }
    const handlerLight = () => {
        themeChanger('light')

    }

    return (
        <div>
            <button onClick={handlerDark}>Change to dark</button>
            <button onClick={handlerLight}>Change to light</button>
        </div>
    );
};

export default BranchLeftA1;