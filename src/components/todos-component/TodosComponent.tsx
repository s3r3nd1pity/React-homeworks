import {useEffect, useState} from "react";
import {getTodos} from "../../services/TodoData.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {ITodo} from "../../models/ITodo.ts";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getTodos()
            .then(({todos}) => {
                setTodos(todos)
            })

    }, [])
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;