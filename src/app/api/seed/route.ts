import { prisma } from '@/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function POST(request: Request) { 
 await prisma.todo.deleteMany() //  delete * from todo


    await prisma.todo.deleteMany()
    await prisma.user.deleteMany()

    const user = await prisma.user.create({
        data : {
            email:"test1@google.com",
            password: bcrypt.hashSync("123456"),
            roles: ["admin", "client", "super-user"],
            todos: {
                create: [
                    { description: 'primera desripcion', complete: true },
                    { description: 'adios segunda', complete: false },
                    { description: 'adios tercera', complete: false },
                    { description: 'adios  cuarta', complete: false },
                    { description: 'adios  quinta', complete: true},
                ]
            }
        }
    })

   /*  await prisma.todo.createMany({
        data: [
            
        ]
    }) */
 return NextResponse.json({ message: 'Soy la respuesta de seed 3' })
}