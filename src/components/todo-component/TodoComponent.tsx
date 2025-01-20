import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";
type TodoPropType={
    todo:ITodo

}

const TodoComponent:FC<TodoPropType> = ({todo}) => {
    return (
        <div>
            <p >{todo.title}</p>
        </div>
    );
};

export default TodoComponent;