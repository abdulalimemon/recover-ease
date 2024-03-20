import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SquarePen } from "lucide-react";
import { useUpdateSupplyMutation } from "@/redux/features/reliefGoods/supplyApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { TAddSupplyInputs } from "../create-supplies/AddSupplies";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AllSuppliesEditModal = ({ item }: { item: TAddSupplyInputs }) => {
  const [updateSupply] = useUpdateSupplyMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TAddSupplyInputs>();

  const onSubmit: SubmitHandler<TAddSupplyInputs> = async (
    data: FieldValues
  ) => {
    try {
      const supplyInfo = {
        id: item._id,
        imageUrl: data?.imageUrl,
        category: data?.category,
        title: data?.title,
        amount: data?.amount,
        description: data?.description,
      };

      await updateSupply(supplyInfo);

      await toast("Supply Information Added successfully.");
      reset();
    } catch (error) {
      toast("Please, try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-300 lg:mr-3 mb-2">
          <SquarePen className="size-5 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Your Supply Details.</DialogTitle>
          <DialogDescription>
            Elevate Accuracy and Precision with Updated Details.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-1 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              placeholder={item.title}
              className="col-span-3"
              id="title"
              {...register("title", {
                minLength: {
                  value: 8,
                  message: "Title must be 8 characters or longer.",
                },
              })}
            />
          </div>
          <div className="text-center">
            {errors.title?.type === "minLength" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              Image URL
            </Label>
            <Input
              placeholder="Image URL"
              className="col-span-3"
              type="text"
              id="imageUrl"
              {...register("imageUrl", {
                pattern: {
                  value:
                    /^(?:(?:https?|ftp):\/\/)?[\w-]+(\.[\w-]+)+[\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-]?$/,
                  message: "Please provide a valid image URL.",
                },
              })}
            />
          </div>
          <div className=" text-center">
            {errors.imageUrl?.type === "pattern" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <div className="col-span-3">
              <Select
                {...register("category")}
                onValueChange={(value: string) => setValue("category", value)}
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
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              placeholder="Amount"
              className="col-span-3"
              id="amount"
              {...register("amount", {
                pattern: {
                  value: /^\b(\d{1,4})\b$/,
                  message: "Please provide a valid Amount between 1 to 10000.",
                },
              })}
            />
          </div>
          <div className="text-center">
            {errors.amount?.type === "pattern" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.amount.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              placeholder="Description"
              className="col-span-3"
              id="description"
              {...register("description", {
                minLength: {
                  value: 50,
                  message: "Description must be 50 characters or longer.",
                },
              })}
            />
          </div>
          <div className="text-center">
            {errors.description?.type === "minLength" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.description.message}
              </span>
            )}
          </div>

          <DialogFooter>
            <Button type="submit">Update changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AllSuppliesEditModal;
