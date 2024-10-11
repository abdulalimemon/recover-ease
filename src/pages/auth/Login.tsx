import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { Helmet } from "react-helmet-async";
import SocialLogin from "./SocialLogin";
import { TLoginInputs } from "@/type";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TLoginInputs> = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token);

      dispatch(setUser({ user: user, token: res.token }));
      toast(res.message);

      navigate("/");
    } catch (error) {
      toast((error as any)?.data?.message, {
        description: "Please, try again.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Recover Ease</title>
      </Helmet>
      <section className="py-14 lg:py-2 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Container className="py-16 md:py-0">
          <div className="flex items-center h-full justify-center py-10 sm:py-16 lg:py-24 ">
            <div className="xl:mx-auto w-full md:max-w-sm 2xl:max-w-md">
              <h2 className="text-center text-2xl font-bold leading-tight">
                Login to your account
              </h2>
              <p className="mt-2 text-center text-sm ">
                Don&apos;t have an account?{" "}
                <Link
                  to="/registration"
                  className="font-semibold transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
              <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="email" className="text-base font-medium ">
                      {" "}
                      Email{" "}
                    </label>
                    <div className="mt-2">
                      <Input
                        type="email"
                        id="email"
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
                      <Link
                        to="/"
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </Link>
                    </div>
                    <div className="mt-2">
                      <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
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
                      Login <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </form>
              <div className="py-5">
                <SocialLogin text="Sign in with Google" />
              </div>
            </div>
          </div>
          <div className="px-10 py-5 mb-10 bg-black text-white rounded-md grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p>Demo User Info</p>
              <p>Email : abdulalimemon10@gmail.com</p>
              <p>Password: 12345678</p>
            </div>
            <div>
              <p>Demo Admin Info</p>
              <p>Email : abdulalimemon11@gmail.com</p>
              <p>Password: 12345678</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
