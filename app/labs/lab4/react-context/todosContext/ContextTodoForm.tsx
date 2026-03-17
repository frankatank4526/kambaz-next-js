import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useTodos } from "./todosContext";
export default function ContextTodoForm(
) {
  const {todo, todos, addTodo, updateTodo, setTodo} = useTodos()!;
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
