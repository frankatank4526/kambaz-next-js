"use client"

import ZustandCounter from "./counter";
import ZustandTodoList from "./zust-todos/zustandTodoList";
export default function ZustandExamples() {
 return (
   <div>
     <h2>Zustand Examples</h2>
     <ZustandCounter />
     <ZustandTodoList/>
   </div>
 );
}
