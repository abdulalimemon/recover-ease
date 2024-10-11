import Container from "@/components/layout/Container";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubscribeMutation } from "@/redux/features/newsletter/newsletterApi";
import { TSubscribeInputs } from "@/type";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const people = [
  {
    id: 1,
    name: "Maria Garcia",
    designation: "Field Coordinator",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "David Patel",
    designation: "Logistics Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Alish Khan",
    designation: "Community Outreach Lead",
    image:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Kenzo Tanaka",
    designation: "Volunteer Coordinator",
    image:
      "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    designation: "Medical Relief Specialist",
    image:
      "https://images.pexels.com/photos/1458332/pexels-photo-1458332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Ibrahim Hassan",
    designation: "Public Relations Officer",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=800&q=60",
  },
];

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSubscribeInputs>();
  const [subscribe] = useSubscribeMutation();

  const onSubmit: SubmitHandler<TSubscribeInputs> = async (
    data: FieldValues
  ) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
      };

      const res = await subscribe(userInfo).unwrap();

      await toast("Success!", {
        description: res.message,
      });
      reset();
    } catch (error) {
      toast((error as any)?.data?.message, {
        description: "Thank you.",
      });
    }
  };
  return (
    <section className="pb-10 md:pb-16">
      <Container>
        <div className="p-5 md:p-10 bg-red-100 rounded-lg overflow-x-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div className="w-full mx-auto sm:w-8/12 lg:w-full">
              <h2 className="text-2xl font-bold text-black">
                Join Hands for a Better Tomorrow
              </h2>
              <p className="mt-4 text-sm w-11/12 sm:w-10/12 lg:11/12 text-black">
                Together, we can build resilience and provide timely aid to
                those facing the aftermath of disasters. Join us in making a
                positive impact today!
              </p>
              <div className="mt-4">
                <div className="flex items-center">
                  <AnimatedTooltip items={people} />
                </div>
                <p className="text-sm font-semibold mt-4 text-black">
                  Join over 10,000 organizations and individuals.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex flex-col justify-center w-full mx-auto sm:w-8/12 lg:w-full">
              <form
                className="flex lg:justify-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex w-full max-w-md flex-col space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="p-5"
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
                    ></Input>
                    <div className="pt-1">
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
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="p-5"
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
                    ></Input>
                    <div className="pt-1">
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
                  <Button className="font-semibold text-base">Subscribe</Button>
                </div>
              </form>
              <p className="mt-2 text-left lg:text-center max-w-md lg:mx-auto">
                <span className="text-sm text-black">
                  Subscribe to our newsletter and stay connected. By signing up,
                  you agree to our terms of service and privacy policy.
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
