import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePostCommentMutation } from "@/redux/features/comment/commentApi";
import { TCommentInputs } from "@/type";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const PostComments = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCommentInputs>();

  const [postComment] = usePostCommentMutation();

  const onSubmit: SubmitHandler<TCommentInputs> = async (data: FieldValues) => {
    try {
      const commentInfo = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      const res = await postComment(commentInfo).unwrap();

      toast(res.message, {
        description: "Thank you.",
      });
      reset();
    } catch (error) {
      toast("Please, try again.");
    }
  };
  return (
    <section className="mb-16">
      <Container className="py-5">
        <div>
          <div className="py-10">
            <p className="text-sm lg:text-xl text-center font-bold text">
              Leave a comment.
            </p>
            <h2 className="text-2xl lg:text-4xl text-center font-bold text">
              Express your thoughts.
            </h2>
          </div>
          <div className="p-4 py-6 rounded-lg bg-slate-100 dark:bg-slate-900 md:p-8 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full my-4">
                <label className="block mb-2 text-sm text font-semibold">
                  Comment
                </label>
                <Textarea
                  placeholder="Comment"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Comment is Required.",
                    },
                    minLength: {
                      value: 50,
                      message: "Comment must be 50 characters or longer.",
                    },
                  })}
                />

                <div className="pt-2">
                  {errors.message?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.message.message}
                    </span>
                  )}
                  {errors.message?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>

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
              <div className="mt-5">
                <Button type="submit" className="w-full">
                  Post Comment
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PostComments;
