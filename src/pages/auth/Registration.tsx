import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useSigninMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

export type TRegisterInputs = {
  name: string;
  email: string;
  password: string;
};

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterInputs>();

  const [signin] = useSigninMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TRegisterInputs> = async (data: FieldValues) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const res = await signin(userInfo).unwrap();

      toast(res.message, {
        description: "Please, Login.",
      });
      navigate("/login");
    } catch (error) {
      toast((error as any)?.data?.message, { description: "Please, try again." });
    }
  };
  return (
    <section className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Container>
        <div className="flex h-full items-center justify-center py-10 6 sm:py-16 lg:py-24">
          <div className="xl:mx-auto w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight ">
              Sign up to create account
            </h2>
            <p className="mt-2 text-center text-base ">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium  transition-all duration-200 hover:underline"
              >
                Login
              </Link>
            </p>
            <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium ">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      id="name"
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
                  </div>
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
                <div>
                  <label htmlFor="email" className="text-base font-medium ">
                    {" "}
                    Email{" "}
                  </label>
                  <div className="mt-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
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
                  </div>

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
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium "
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      id="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required.",
                        },
                        minLength: {
                          value: 8,
                          message: "Password must be 8 characters or longer.",
                        },
                      })}
                    />
                  </div>
                  <div className="pt-2">
                    {errors.password?.type === "required" && (
                      <span className="text-sm mt-2 text-red-600 font-semibold">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-sm mt-2 text-red-600 font-semibold">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <Button className="w-full" type="submit">
                    Sign Up <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Registration;
