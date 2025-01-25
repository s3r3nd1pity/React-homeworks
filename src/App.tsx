import './App.css'
import LeftBtanch from "./components/LeftBtanch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {

    const [counter, setCounter] = useState<number>(init.counterValue)//но можно написать (0)

    return (
        <>

            <MyContext.Provider value={
                {
                    counterValue: counter,
                    increment: (obj) => {
                        setCounter(++obj)
                    }

                }
            }>
                <LeftBtanch/>
                <RightBranch/>
            </MyContext.Provider>
        </>
    )
}

export default App
