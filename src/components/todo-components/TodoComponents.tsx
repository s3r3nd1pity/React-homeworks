import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.services.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodoComponents = () => {
    const [todos,setTodos]=useState<ITodo[]>([]);
    useEffect(()=>{
    getTodos()
        .then(response=>{setTodos(response)})
    },[])
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodoComponents;