import { prisma } from "@/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";


export default async function TodosPage() {
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
    <div>
     {/*  agregar formulario para agregar todo */}
     
     <TodosGrid todos={todos}/>
    </div>
  );
}
