import { ListGroupItem, Button } from "react-bootstrap";

import { useTodos } from "./todosContext";


export default function ContextTodoItem({ todo}: {
  todo: { id: string; title: string };}) {
    const {deleteTodo, setTodo} = useTodos()!;
  return (
    <ListGroupItem key={todo.id}>
      <Button variant="danger" onClick={() => deleteTodo(todo.id)} 
              id="wd-delete-todo-click"> Delete </Button>
      <Button onClick={() => setTodo(todo)}
              id="wd-set-todo-click"> Edit </Button>
      {todo.title}    </ListGroupItem>);

  }