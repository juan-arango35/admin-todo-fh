"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: Props) => {
  const router = useRouter();  
  const [selected,setSelected] = useState(currentTab)

const onSelectetedTab =(tab: number)=>{
    setSelected(tab)
    setCookie("selectedTab",tab.toString()) // con esto ya esta utilizando cookies y me mantiene seleccionado
    router.refresh()
}

  return (
    <div
      className={`

    grid w-full grid-cols-4 space-x-2 rounded-xl bg-gray-500 p-2
    ${"grid-cols-" + tabOptions.length}
    `}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input 
          checked={selected === tab}
          onChange={() =>{}}
          type="radio" id={tab.toString()} className="peer hidden" />
          <label
          onClick={()=>onSelectetedTab( tab)}
          className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
