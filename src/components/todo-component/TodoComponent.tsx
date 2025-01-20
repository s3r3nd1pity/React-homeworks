import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";
type TodoComponentPropType={
    todo:ITodo
}
const TodoComponent:FC<TodoComponentPropType> = ({todo}) => {
    return (
        <div>
                <h4>{todo.id}. {todo.todo}</h4>
                <p> {todo.completed}</p>
        </div>
    );
};

export default TodoComponent;