"use client";
import { CounterProvider } from "./counter/context";
import CounterContext from "./counter";
import { TodoProvider } from "./todosContext/todosContext";
import ContextTodoList from "./todosContext/ReactContextTodoList";


export default function ReactContextExamples() {
 return (
   <div>
     <h1>React Context Examples</h1>
     <CounterProvider>
       <CounterContext />
     </CounterProvider>
     <TodoProvider>
      <ContextTodoList/>
     </TodoProvider>
   </div>
 );
}
