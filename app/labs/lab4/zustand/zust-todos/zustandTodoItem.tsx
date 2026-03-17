import { ListGroupItem, Button } from "react-bootstrap";
import { useTodoStore } from "./useTodoStore";
 





export default function ZustandTodoItem({ todo}: {
  todo: { id: string; title: string };}) {
    const { deleteTodo, setTodo } = useTodoStore(
   (state) => state,
 );
  return (
    <ListGroupItem key={todo.id}>
      <Button variant="danger" onClick={() => deleteTodo(todo.id)} 
              id="wd-delete-todo-click"> Delete </Button>
      <Button onClick={() => setTodo(todo)}
              id="wd-set-todo-click"> Edit </Button>
      {todo.title}    </ListGroupItem>);

  }