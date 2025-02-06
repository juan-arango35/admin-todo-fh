"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"

const ProfilePage = () => {
    const {data:session}= useSession()
    console.log(session)
    useEffect(() => {
        console.log("cliente side")
    }, [])
  return (
    <div>
        <h1>Profile</h1>
        <hr />
        <div className="flex flex-col">
            <span>Name: {session?.user?.name  ?? "no Name"}</span>
            <span>Email: {session?.user?.email ?? "no Email"}</span>
            <span>Image: {session?.user?.image ?? "no Image"}</span>

        </div>
    </div>
  )
}

export default ProfilePage