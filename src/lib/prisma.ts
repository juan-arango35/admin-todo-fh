import { PrismaClient } from '@prisma/client'

export let prisma = new PrismaClient;

if( process.env.NODE_ENV !== 'production' ) {
    prisma = new PrismaClient()
} else {
    if( !(global as any).prisma)  {
        (global as any) = new PrismaClient()
    }
    prisma = (global as any).prisma
}