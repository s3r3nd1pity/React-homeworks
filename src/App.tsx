import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";

function App() {
    const users = useFetch<{ id: number, name: string }[]>('users', [])


    return (
        <>
            {
                users.map((user) =>
               <div> {user.name}</div>
                )}
        </>
    )
}

export default App
