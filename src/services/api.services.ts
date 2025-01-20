export const getTodos=async ()=>{
    return (await fetch(import.meta.env.VITE_API_TODOS)
            .then(value => value.json())
    )
}