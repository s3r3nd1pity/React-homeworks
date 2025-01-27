import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const BranchRightA1 = () => {
    const {theme} = useContext(MyContext)
    return (
        <div>
        Theme is {theme}
        </div>
    );
};

export default BranchRightA1;