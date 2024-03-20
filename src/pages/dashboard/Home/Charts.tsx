import PieChartComponent from "./PieChart";

const Charts = () => {
  return (
    <section className="h-auto">
      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-10 h-auto">
        <div className="border p-5 rounded-md h-[450px]">
          <div>
            <h2 className="text-lg lg:text-xl text font-semibold">
              PieChart Report.
            </h2>
          </div>
          <PieChartComponent />
        </div>
        <div className="border p-5 rounded-md h-[450px]">
          <div>
            <h2 className="text-lg lg:text-xl text font-semibold">
              PieChart Report.
            </h2>
          </div>
          <PieChartComponent />
        </div>
      </div>
    </section>
  );
};

export default Charts;
