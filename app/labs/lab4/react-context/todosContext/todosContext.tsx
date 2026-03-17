"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type item = {
        id: string;
        title: string;
    }
interface TodosContextState {
    todo: item;
    todos: item[];

    addTodo: (todo: item) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (todo: item) => void;
    setTodo: (todo: item) => void;
}

const TodoContext = createContext<TodosContextState | undefined>(undefined);
export const TodoProvider = ({children} : {children: ReactNode}) => {
    const [todo, assignTodo] = useState<item>({id: "-1", title: "default"});
    const [todos, assignTodos] = useState<item[]>([]);
    const addTodo = (todo: item) => {

        const newTodo = {id: new Date().getTime().toString(), title: todo.title};
        const newTodos = [
            ...todos, newTodo];
            assignTodos(newTodos);
            assignTodo({id:"-1", title: ""});
    };
    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo_item) => todo_item.id !== id);
        assignTodos(newTodos);
    };
    
    const updateTodo = (todo: item) => {
        const newTodos = todos.map((todo_item) => 
        todo_item.id === todo.id ? todo: todo_item);
        assignTodos(newTodos);
        assignTodo({id:"-1", title: ""});
    };
    const setTodo = (todo: item) => {
        assignTodo(todo);
    };

    const value: TodosContextState = {
        todo, todos, addTodo, deleteTodo, updateTodo, setTodo
    };

    return (
        <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
}

