import { prisma } from '@/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: Request) { 
 await prisma.todo.deleteMany() //  delete * from todo

/*     const todo = await prisma.todo.create({ data: { description: 'hola', complete: true }, })
    console.log(todo, "todo")
 */

    await prisma.todo.createMany({
        data: [
            { description: 'primera desripcion', complete: true },
            { description: 'adios segunda', complete: false },
            { description: 'adios tercera', complete: false },
            { description: 'adios  cuarta', complete: false },
            { description: 'adios  quinta', complete: true},
        ]
    })
 return NextResponse.json({ message: 'Soy la respuesta de seed 3' })
}