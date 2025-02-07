"use client";
import { Todo } from "@prisma/client";
import TodoItem from "./TodoItem";
/* import { updateTodo } from "../helpers/todos"; */
import { useRouter } from "next/navigation";
import { toggleTodo } from '../actions/todo-actions';

interface TodosGridProps {
  todos?: Todo[];
}
const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  const router = useRouter();
/*   const toggleTodo = async (id: string, complete: boolean) => {

    const updatedTodo = await updateTodo(id, complete);
    console.log(updatedTodo); 
    router.refresh();
    
  }; */
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodosGrid;
