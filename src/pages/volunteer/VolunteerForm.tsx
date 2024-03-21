import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type TContactInputs = {
  name: string;
  email: string;
  imageUrl: string;
  phone: number;
  location: string;
};

const VolunteerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactInputs>();

  const [addVolunteer] = useAddVolunteerMutation();

  const onSubmit: SubmitHandler<TContactInputs> = async (data: FieldValues) => {
    try {
      const volunteerInfo = {
        name: data.name,
        email: data.email,
        imageUrl: data.imageUrl,
        phone: data.phone,
        location: data.location,
      };

      const res = await addVolunteer(volunteerInfo).unwrap();

      toast(res.message, {
        description:
          "Thank you for joining our volunteer community! Your contribution is greatly appreciated.",
      });
    } catch (error) {
      toast("Please, try again.");
    }
  };
  return (
    <section className="mb-20">
      <Container className="py-5">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            Become a Volunteer.
          </h2>
          <p className="text-sm md:text-base text-center font-semibold py-5 text2">
            Fill out the form below to become a part of our diverse volunteer
            network and make a positive impact today.
          </p>
        </div>
        <div className="p-4 py-6 rounded-lg bg-slate-100 dark:bg-slate-900 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 font-semibold text text-sm">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Full name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Name must be 3 characters or longer.",
                    },
                  })}
                />

                <div className="pt-2">
                  {errors.name?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text font-semibold">
                Email address
              </label>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required.",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide a valid email address.",
                  },
                })}
              />

              <div className="pt-2">
                {errors.email?.type === "required" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="imageUrl" className="text-base font-medium text">
                {" "}
                Image URL{" "}
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  placeholder="Image URL"
                  id="imageUrl"
                  {...register("imageUrl", {
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
                {errors.imageUrl?.type === "required" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.imageUrl.message}
                  </span>
                )}
                {errors.imageUrl?.type === "pattern" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.imageUrl.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text font-semibold">
                Phone Number
              </label>
              <Input
                placeholder="Phone Number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is Required.",
                  },
                  pattern: {
                    value:
                      /^(?:\+?(88)?01)?(?:\d{9}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/,
                    message: "Please enter a valid phone number.",
                  },
                })}
              />

              <div className="pt-2">
                {errors.phone?.type === "required" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "pattern" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text font-semibold">
                Location
              </label>
              <Input
                placeholder="Location"
                {...register("location", {
                  required: {
                    value: true,
                    message: "Location is Required.",
                  },
                  minLength: {
                    value: 3,
                    message: "Location name must be 3 characters or longer.",
                  },
                })}
              />

              <div className="pt-2">
                {errors.location?.type === "required" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.location.message}
                  </span>
                )}
                {errors.location?.type === "minLength" && (
                  <span className="text-sm mt-2 text-red-600 font-semibold">
                    {errors.location.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-5">
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default VolunteerForm;
