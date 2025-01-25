import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBtanchA = () => {
    const {counterValue} =useContext(MyContext)

    return (
        <div>
            LeftBtanchA
            current value is {counterValue}
        </div>
    );
};

export default LeftBtanchA;