import { Helmet } from "react-helmet-async";
import AddTestimonial from "./AddTestimonial";

const CreateTestimonial = () => {
  return (
    <>
      <Helmet>
        <title>Review - Recover Ease</title>
      </Helmet>
      <div className="mb-10">
        <h2 className="text-center text-xl font-semibold py-5">
          Share Your Experience.
        </h2>
        <AddTestimonial />
      </div>
    </>
  );
};

export default CreateTestimonial;
