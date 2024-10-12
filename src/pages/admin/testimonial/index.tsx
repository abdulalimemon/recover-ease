import { Helmet } from "react-helmet-async";
import AllTestimonialTable from "./AllTestimonialTable";

const AllTestimonial = () => {
  return (
    <div>
      <Helmet>
        <title>Review - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">
        All Testimonial.
      </h2>
      <AllTestimonialTable />
    </div>
  );
};

export default AllTestimonial;
