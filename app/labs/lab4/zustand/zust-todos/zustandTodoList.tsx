import { ListGroup } from "react-bootstrap";


import "../../styles.css"
import { useTodoStore } from "./useTodoStore";
import ZustandTodoForm from "./zustandTodoForm";
import ZustandTodoItem from "./zustandTodoItem";

export default function ZustandTodoList() {
   //const { todos } = useSelector((state: RootState) => state.todosReducer);
    const { todos, } = useTodoStore(
      (state) => state,
    );
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup id="todo-group">
        <ZustandTodoForm />
        {todos.map((todo: any) => (
          <ZustandTodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
);}