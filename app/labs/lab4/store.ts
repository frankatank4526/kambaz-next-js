import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./redux/hello/helloReducer";
import counterReducer from "./redux/CounterRedux/counterReducer";
import addReducer     from "./redux/AddRedux/addReducer";
import todosReducer from "./redux/todos/todosReducer";

const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todosReducer,}});
  /* The below gets typeof store.getState. getState returns the "state tree," which takes the form:
  {
    reducer: state,
    helloReducer: message,
    someReducer: someState 
  }
    where the left hand side is a reducer function, used as a key, and the right hand side is the *state* used as the value. 

    So, typeof store.getState is essentially equivalent to *a func* that takes in nothing, and *returns a key val*; i.e. () => {reducer: state, ...}.
    Hence, calling ReturnType<...> on that gives a pair of {nameOfReducer: stateType, ...}. Note that during runtime, the pairs take the form of 
    {nameOfReducer: resultOfRunningReducer}. 
  */
export type RootState = ReturnType<typeof store.getState>;
export default store;