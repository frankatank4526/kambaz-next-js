import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "../../styles.css"

export default function TodoList() {
   const { todos } = useSelector((state: RootState) => state.todosReducer);
  
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup id="todo-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
);}
