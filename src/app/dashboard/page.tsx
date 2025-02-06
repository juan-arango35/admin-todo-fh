import WitgetItem from "@/components/WitgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <WitgetItem title="server-side USUARIO CONECTADO">
        {JSON.stringify(session, null, 2)}
      </WitgetItem>
    </div>
  );
};

export default DashboardPage;
