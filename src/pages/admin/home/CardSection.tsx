import {
  ArrowRight,
  BookUser,
  HandCoins,
  NewspaperIcon,
  Wallet,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAllReliefGoodsQuery } from "@/redux/features/reliefGoods/reliefGoodsApi";
import { Link } from "react-router-dom";
import { useGetSupplyQuery } from "@/redux/features/reliefGoods/supplyApi";
import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";
import { useGetDonationQuery } from "@/redux/features/reliefGoods/donationApi";
import { useAppSelector } from "@/redux/hooks";

const CardSection = () => {
  const { data: goods } = useAllReliefGoodsQuery(null);
  const { data: supplies } = useGetSupplyQuery(null);
  const { data: volunteer } = useGetVolunteerQuery(null);
  const { data: donations } = useGetDonationQuery(null);
  const user = useAppSelector((state) => state?.auth?.user);

  return (
    <div className="my-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Total Relief Goods posts
            </CardTitle>
            <NewspaperIcon className="size-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{goods?.length}</p>
            <div className="mt-3">
              {user?.role === "admin" ? (
                <Link
                  to="/admin/relief-goods"
                  className="font-semibold flex items-center underline hover:text-blue-500"
                >
                  Details <ArrowRight className="size-5 ml-2" />
                </Link>
              ) : (
                <Link
                  to="/all-relief-goods"
                  className="font-semibold flex items-center underline hover:text-blue-500"
                >
                  Details <ArrowRight className="size-5 ml-2" />
                </Link>
              )}
            </div>
          </CardContent>
        </Card>

        {user?.role === "admin" && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Total Supplies
              </CardTitle>
              <Wallet className="size-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{supplies?.length}</p>
              <div className="mt-3">
                <Link
                  to="/admin/supplies"
                  className="font-semibold flex items-center underline hover:text-blue-500"
                >
                  Details <ArrowRight className="size-5 ml-2" />
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Total Volunteers
            </CardTitle>
            <BookUser className="size-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{volunteer?.length}</p>
            <div className="mt-3">
              {user?.role === "admin" ? (
                <Link
                  to="/admin/volunteer"
                  className="font-semibold flex items-center underline hover:text-blue-500"
                >
                  Details <ArrowRight className="size-5 ml-2" />
                </Link>
              ) : (
                <Link
                  to="/about-us"
                  className="font-semibold flex items-center underline hover:text-blue-500"
                >
                  Details <ArrowRight className="size-5 ml-2" />
                </Link>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Total Donations
            </CardTitle>
            <HandCoins className="size-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{donations?.length}</p>
            <div className="mt-3">
              {user?.role === "admin" ? (
                <Link
                  to="/admin/donations"
                  className="font-semibold flex items-center underline hover:text-blue-500"
                >
                  Details <ArrowRight className="size-5 ml-2" />
                </Link>
              ) : (
                <Link
                  to="/leaderboard"
                  className="font-semibold flex items-center underline hover:text-blue-500"
                >
                  Details <ArrowRight className="size-5 ml-2" />
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardSection;
