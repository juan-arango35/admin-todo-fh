//este es el server action que hace todo el trabajo sin usar la api rest creada
//estas funciones funcionan del lado dle servidor, pero el cliente las puede mandara a llamar
"use server";

import { prisma } from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const todo = await prisma.todo.findFirst({ where: { id: id } });

    if(!todo){
        throw new Error(`El todo con el id ${id} no existe`)
    }

    const updateTodo = await prisma.todo.update({
        where: { id: id },
        data: { complete: complete }
    })
    revalidatePath("/dashboard/server-todos")
    return updateTodo
}