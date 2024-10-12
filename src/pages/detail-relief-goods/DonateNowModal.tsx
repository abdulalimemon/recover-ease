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
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useDonationMutation } from "@/redux/features/reliefGoods/donationApi";
import { TDonationInputs, TReliefGoodsType } from "@/type";

const DonateNowModal = ({ data }: { data: TReliefGoodsType }) => {
  const { title, amount } = data;
  const userInfo = useAppSelector((state) => state?.auth?.user);
  const token = useAppSelector(useCurrentToken);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDonationInputs>();
  const [donation] = useDonationMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TDonationInputs> = async (data) => {
    try {
      const donationInfo = {
        name: userInfo?.name,
        email: userInfo?.email,
        amount: data.amount,
      };
      const res = await donation(donationInfo).unwrap();

      await toast(res.message, {
        description: "Thank you for your generous contribution!",
      });

      navigate("/dashboard/home");
    } catch (error) {
      toast("Please, try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Donate Now</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        {token ? (
          <>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                <span className="font-semibold text">Amount</span>: {amount}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={userInfo?.name}
                  disabled
                  className="col-span-3 text-primary"
                  {...register("name")}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={userInfo?.email}
                  disabled
                  className="col-span-3 text-primary"
                  {...register("email")}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  placeholder="Amount"
                  className="col-span-3"
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
                <div className="col-span-4 text-center">
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
              <DialogFooter>
                <Button type="submit">Donate Now</Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            <DialogHeader className="my-5">
              <DialogTitle className="text-sm lg:text-lg font-semibold leading-7 text">
                To make a donation, Please log in to your account first.
              </DialogTitle>
              <DialogDescription className="text-xl text-center font-semibold text">
                Thank you.
              </DialogDescription>
            </DialogHeader>
            <div className="text-center w-3/4 lg:w-1/2 mx-auto">
              <Link to="/login">
                <Button className="w-full">Login</Button>
              </Link>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonateNowModal;
