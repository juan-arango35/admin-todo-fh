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


export const addTodo = async (description: string) => {
    try {
        
        const newTodo = await prisma.todo.create({
            data : {
                description: description,
                complete: false
            }
            
        })
        revalidatePath("/dashboard/server-todos")
        return newTodo
    } catch (error) {
        return {
            message: "Error al crear el todo"
        }
    }
}

export const deleteTodo = async (): Promise<void> => {
    try {
        
        await prisma.todo.deleteMany({
            where: { complete: true },
          });
          revalidatePath("/dashboard/server-todos")
    } catch (error) {
        console.log(error, "error al eliminar todos completados")
    }
}