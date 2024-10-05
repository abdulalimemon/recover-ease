import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { userAuthContext } from "@/firebase/AuthProvider";
import { useAddTestimonialMutation } from "@/redux/features/testimonial/testimonialApi";
import { useAppSelector } from "@/redux/hooks";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TTestimonialInputs = {
  name: string;
  email: string;
  image: string;
  position: string;
  company: string;
  review: string;
};

const AddTestimonial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TTestimonialInputs>();
  const [testimonial] = useAddTestimonialMutation();
  const userInfo = useAppSelector((state) => state.auth.user);
  const { user } = useContext(userAuthContext);

  const onSubmit: SubmitHandler<TTestimonialInputs> = async (
    data: FieldValues
  ) => {
    try {
      const userData = {
        name: userInfo?.name || user?.displayName,
        email: userInfo?.email || user?.email,
        image: data.image,
        position: data.position,
        company: data.company,
        review: data.review,
      };

      const res = await testimonial(userData).unwrap();

      toast(res.message, { description: "Thank You." });
      reset();
    } catch (error) {
      toast("Please, try again.");
    }
  };
  return (
    <div className="">
      <div className="h-full pb-10 lg:pb-5">
        <div className="xl:mx-auto w-full bg-slate-100 dark:bg-slate-900 p-5 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div>
                <Label htmlFor="name" className="text-base font-medium text">
                  Name
                </Label>
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder={userInfo?.name || user?.displayName || ""}
                    readOnly
                    id="name"
                    {...register("name")}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-base font-medium text">
                  Email
                </Label>
                <div className="mt-2">
                  <Input
                    type="email"
                    placeholder={userInfo?.email || user?.email || ""}
                    readOnly
                    id="email"
                    {...register("email")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="image" className="text-base font-medium text">
                  {" "}
                  Image URL{" "}
                </label>
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder="Image URL"
                    id="image"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image URL is Required.",
                      },
                      pattern: {
                        value:
                          /^(?:(?:https?|ftp):\/\/)?[\w-]+(\.[\w-]+)+[\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-]?$/,
                        message: "Please provide a valid image URL.",
                      },
                    })}
                  />
                </div>
                <div className="pt-2">
                  {errors.image?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.image.message}
                    </span>
                  )}
                  {errors.image?.type === "pattern" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.image.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="position"
                    className="text-base font-medium text"
                  >
                    Position
                  </label>
                </div>
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder="Position"
                    id="position"
                    {...register("position", {
                      required: {
                        value: true,
                        message: "Position is Required.",
                      },
                      minLength: {
                        value: 3,
                        message: "Position must be 3 characters or longer.",
                      },
                    })}
                  />
                </div>
                <div className="pt-2">
                  {errors.position?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.position.message}
                    </span>
                  )}
                  {errors.position?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.position.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="company"
                    className="text-base font-medium text"
                  >
                    Company
                  </label>
                </div>
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder="Company"
                    id="company"
                    {...register("company", {
                      required: {
                        value: true,
                        message: "Company is Required.",
                      },
                      minLength: {
                        value: 3,
                        message: "Company name must be 3 characters or longer.",
                      },
                    })}
                  />
                </div>
                <div className="pt-2">
                  {errors.company?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.company.message}
                    </span>
                  )}
                  {errors.company?.type === "pattern" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.company.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="review"
                    className="text-base font-medium text"
                  >
                    {" "}
                    Review{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <Textarea
                    placeholder="Review"
                    id="review"
                    {...register("review", {
                      required: {
                        value: true,
                        message: "Review is Required.",
                      },
                      minLength: {
                        value: 50,
                        message: "Review must be 50 characters or longer.",
                      },
                    })}
                  />
                </div>
                <div className="pt-2">
                  {errors.review?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.review.message}
                    </span>
                  )}
                  {errors.review?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.review.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <Button className="w-full md:w-1/2 my-3" type="submit">
                Add Testimonial <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonial;
