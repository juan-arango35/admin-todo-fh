import Image from "next/image"
import Link from "next/link"
import {  CiLogout } from "react-icons/ci"
import SidebarItem from "./SidebarItem"
import {  IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPrintOutline } from "react-icons/io5"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"





const menuItems =[
  {
    icon: <IoCalendarOutline/>,
    title: "Dashboard",
    path: "/dashboard"
  },
  {
    icon: <IoCheckboxOutline/>,
    title: "Rest TODOS",
    path: "/dashboard/rest-todos"
  },
  {
    icon: <IoListOutline/>,
    title: "Server Actions",
    path: "/dashboard/server-todos"
  },
  {
    icon: <IoCodeWorkingOutline/>,
    title: "Cookies",
    path: "/dashboard/cookies"
  },
  {
    icon: <IoPrintOutline/>,
    title: "Products",
    path: "/dashboard/products"
  }
]

const Sidebar = async() => {

//agregando la tarea
  const session = await getServerSession(authOptions );
 


  const name = session?.user?.name ?? "no Name"
  const imageAvatar = session?.user?.image || "../../public/perfil.jpg"

  return (
     <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
           <div>
             <div className="-mx-6 px-6 py-4">
               {/* TODO: Next/Link hacia dashboard */}
               <Link href="#" title="home">
                 {/* Next/Image */}
                 <img src="/otro.webp"  className="w-32"  alt="tailus logo"/>
               </Link>
             </div>
   
             <div className="mt-8 text-center">
               {/* Next/Image */}
               <Image src={imageAvatar}   alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" width={50} height={50}/>
                 <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{name}</h5>
                 <span className="hidden text-gray-400 lg:block">Admin</span>
             </div>
   
             <ul className="space-y-2 tracking-wide mt-8">
           {
            menuItems.map((item)=>(

              <SidebarItem  key={item.path} title={item.title} icon={item.icon} path={item.path} />
            ))
           }
              
            
             </ul>
           </div>
   
           <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
             <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
               <CiLogout />
               <span className="group-hover:text-gray-700">Logout</span>
             </button>
           </div>
         </aside>
  )
}

export default Sidebar