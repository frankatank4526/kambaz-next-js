import { create} from "zustand";

type TodoItem = {
    id: string,
    title: string
}

interface TodoState {
    todo: TodoItem,
    todos: TodoItem[],
    addTodo: (item: TodoItem) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (item: TodoItem) => void;
    setTodo: (item: TodoItem) => void;
}

export const useTodoStore = create<TodoState>((set) => ( {
    todo: {id: "-1", title: ""},
    todos: [],
    addTodo: (item) => set((state) => ({
        todos: [...state.todos, {id: new Date().getTime().toString(), title: item.title}],
        todo: {id: "-1", title: ""}
    })),
    deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo_item) => todo_item.id !== id)
    })),
    updateTodo: (item) => set((state) => ({
        todos: state.todos.map((todo_item) => 
        todo_item.id === state.todo.id ? item : todo_item)
    })),
    setTodo: (item) => set((state) => ({
        todo: item
    }))

}));