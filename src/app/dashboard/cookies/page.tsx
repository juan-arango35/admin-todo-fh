import TabBar from "@/components/TabBar";
import { cookies } from "next/headers";

export const metadata = {
 title: 'Cookies',
 description: 'Cookies'
};

const CookiesPage = async () => {
  const cookiesStore = await cookies()
  const cookieTab =  +(cookiesStore.get("selectedTab")?.value ?? "1")
  const allCookies = cookiesStore.getAll()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {JSON.stringify(allCookies, null, 2)}
      <div className="flex flex-col">
      <span className="text-3xl">Tabs</span>
      <TabBar currentTab={cookieTab}/>

      </div>
    </div>
  )
}

export default CookiesPage