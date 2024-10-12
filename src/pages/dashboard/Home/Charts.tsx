import { DonationsChart } from "./DonationsChart";
import { SuppliesChart } from "./SuppliesChart";

const Charts = () => {
  return (
    <section className="h-auto">
      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto">
        <DonationsChart />
        <SuppliesChart />
      </div>
    </section>
  );
};

export default Charts;
