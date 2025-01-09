import WitgetItem from "@/components/WitgetItem";

const DashboardPage = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WitgetItem />

      <WitgetItem />

      <WitgetItem />

      <WitgetItem />
    </div>
  );
};

export default DashboardPage;
