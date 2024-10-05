import { Helmet } from "react-helmet-async";
import AddSupplies from "./AddSupplies";

const CreateSupplies = () => {
  return (
    <>
      <Helmet>
        <title>Create Supplies - Recover Ease</title>
      </Helmet>
      <div className="mb-10">
        <h2 className="text-center text-xl font-semibold py-5">
          Create Supply.
        </h2>
        <AddSupplies />
      </div>
    </>
  );
};

export default CreateSupplies;
