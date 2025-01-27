import './App.css'
import BranchLeft from "./components/BranchLeft.tsx";
import BranchRight from "./components/BranchRight.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
 const [themeValue,setThemeValue]=useState(init.theme)

    return (
        <>
          <MyContext.Provider value={
              {
                  theme:themeValue,
                  themeChanger:(theme)=>{setThemeValue(theme)}
              }
          }>
              <BranchLeft/>
              <BranchRight/>
          </MyContext.Provider>
        </>
    )
}

export default App
