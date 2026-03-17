import { ListGroup } from "react-bootstrap";


import "../../styles.css"
import { useTodos } from "./todosContext";
import ContextTodoForm from "./ContextTodoForm";
import ContextTodoItem from "./ContextTodoItem";

export default function ContextTodoList() {
   //const { todos } = useSelector((state: RootState) => state.todosReducer);
    const {todos} = useTodos()!;
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup id="todo-group">
        <ContextTodoForm />
        {todos.map((todo: any) => (
          <ContextTodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
);}