import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

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


