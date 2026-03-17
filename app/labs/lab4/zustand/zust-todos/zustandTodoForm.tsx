import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useTodoStore } from "./useTodoStore";
export default function ZustandTodoForm(
) {
 const { todo, addTodo, updateTodo, setTodo } = useTodoStore(
   (state) => state,
 );
  return (
    <ListGroupItem>
      <Button variant="success" onClick={() => addTodo(todo)}
              id="wd-add-todo-click"> Add </Button>
      <Button variant="warning" onClick={() => updateTodo(todo)}
              id="wd-update-todo-click"> Update </Button>
      <FormControl id="todo-form" value={todo.title}
        onChange={ (e) => setTodo({ ...todo, title: e.target.value })}/>
    </ListGroupItem>
);}
