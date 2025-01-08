import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from 'yup';

interface ParametrosProps {
  params: {
    id: string;
  };
}




export async function GET(request: Request, { params }: ParametrosProps) {
    const {id } = params
    const todo = await prisma.todo.findFirst({
        where: {
          id: id,
        },
      })

      if(!todo) {
        return NextResponse.json({ message: `Todo con id : ${id} no encontrado` }, { status: 404 })
      }
  return NextResponse.json(todo);
}

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
})


export async function PUT(request: Request, { params }: ParametrosProps) {
    const {id } = params
    const todo = await prisma.todo.findFirst({
        where: {
          id: id,
        },
      })

      if(!todo) {
        return NextResponse.json({ message: `Todo con id : ${id} no encontrado` }, { status: 404 })
      }

      try {
        
          const {complete, description} = await putSchema.validate( await request.json())
          const todoUpdate = await prisma.todo.update({
            where: {
              id
            },
            data: {complete, description}
          })
      return NextResponse.json(todoUpdate);
      } catch (error) {
        return NextResponse.json(error, { status: 400 });
      }
}


