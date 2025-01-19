export const dinamic = "force-dynamic";
export const revalidate =0
import { FormNewTodo } from "@/components/FormNewTodo";
import { prisma } from "@/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";

export default async function ServerTodosPage() {
  /*   useEffect(() => {
    try {
      const traterTodo = async () => {
        const response = await fetch("http://localhost:3000/api/todos");
        const data = await response.json();
        console.log(data);
      };
      traterTodo();
    } catch (error) {
      console.log(error);
    }
  }, []); */ // esta seria una forma pero no se hara asi ya que no es recomendable

  //usando server components
  const todos = await prisma.todo.findMany({ orderBy: { id: "asc" } });

  return (
    <>
    <span className="text-3xl mb-10">SERVER ACTIONS</span>
      <div className="w-full px-3 mx-5 mb-5">
        <FormNewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}
