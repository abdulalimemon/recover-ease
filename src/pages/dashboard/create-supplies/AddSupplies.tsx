import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useAddSupplyMutation } from "@/redux/features/reliefGoods/supplyApi";
import { TAddSupplyInputs } from "@/type";

const AddSupplies = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TAddSupplyInputs>();
  const [supply] = useAddSupplyMutation();

  const onSubmit: SubmitHandler<TAddSupplyInputs> = async (
    data: FieldValues
  ) => {
    try {
      const supplyInfo = {
        imageUrl: data.imageUrl,
        category: data.category,
        title: data.title,
        amount: data.amount,
        description: data.description,
      };

      await supply(supplyInfo);

      await toast("Supply Information Added successfully.");
      reset();
    } catch (error) {
      toast("Please, try again.");
    }
  };
  return (
    <div>
      <div className="h-full pb-10 lg:pb-5">
        <div className="xl:mx-auto w-full  bg-slate-100 dark:bg-slate-900 p-5 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="title" className="text-base font-medium text">
                    {" "}
                    Title{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder="Title"
                    id="title"
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Title is Required.",
                      },
                      minLength: {
                        value: 8,
                        message: "Title must be 8 characters or longer.",
                      },
                    })}
                  />
                </div>
                <div className="pt-2">
                  {errors.title?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.title.message}
                    </span>
                  )}
                  {errors.title?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.title.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="imageUrl"
                  className="text-base font-medium text"
                >
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
              <div>
                <label
                  htmlFor="category"
                  className="text-base font-medium text"
                >
                  {" "}
                  Category{" "}
                </label>
                <div className="mt-2">
                  <Select
                    {...register("category", {
                      required: {
                        value: true,
                        message: "Category is Required.",
                      },
                    })}
                    onValueChange={(value: string) =>
                      setValue("category", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel className="text">Category</SelectLabel>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="medical supplies">
                          Medical Supplies
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="pt-2">
                    {errors.category?.type === "required" && (
                      <span className="text-sm mt-2 text-red-600 font-semibold">
                        {errors.category.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="amount"
                    className="text-base font-medium text"
                  >
                    {" "}
                    Amount{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder="Amount"
                    id="amount"
                    {...register("amount", {
                      required: {
                        value: true,
                        message: "Amount is Required.",
                      },
                      pattern: {
                        value: /^\b(\d{1,4})\b$/,
                        message:
                          "Please provide a valid Amount between 1 to 10000.",
                      },
                    })}
                  />
                </div>
                <div className="pt-2">
                  {errors.amount?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.amount.message}
                    </span>
                  )}
                  {errors.amount?.type === "pattern" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.amount.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="text-base font-medium text"
                  >
                    {" "}
                    Description{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <Textarea
                    placeholder="Description"
                    id="description"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description is Required.",
                      },
                      minLength: {
                        value: 50,
                        message: "Description must be 50 characters or longer.",
                      },
                    })}
                  />
                </div>
                <div className="pt-2">
                  {errors.description?.type === "required" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.description.message}
                    </span>
                  )}
                  {errors.description?.type === "minLength" && (
                    <span className="text-sm mt-2 text-red-600 font-semibold">
                      {errors.description.message}
                    </span>
                  )}
                </div>
              </div>
              <div></div>
              <Button className="w-full" type="submit">
                Add Supply Post <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSupplies;
