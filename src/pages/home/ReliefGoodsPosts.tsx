import Container from "@/components/layout/Container";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAllReliefGoodsQuery } from "@/redux/features/reliefGoods/reliefGoodsApi";
import PostSkeleton from "@/components/layout/main/PostSkeleton";
import { TReliefGoodsType } from "@/type";

const ReliefGoodsPosts = () => {
  const { data, isLoading, isError } = useAllReliefGoodsQuery(null);
  const navigate = useNavigate();

  const navigateToDetailReliefGoods = (_id: string) => {
    navigate(`/all-relief-goods/${_id}`);
  };

  return (
    <section className="my-10">
      <Container>
        <div>
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text">
              Anytime. Anywhere. <br className="md:hidden" />{" "}
              <span>Anyone in Need.</span>
            </h2>
          </div>
          <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(isLoading || isError || !data) && (
                <>
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                </>
              )}
              {data?.slice(0, 6).map((items: TReliefGoodsType) => (
                <div className="rounded-md border" key={items._id}>
                  <img
                    src={items.image}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h2 className="inline-flex items-center text-lg font-semibold text">
                      {items.title} <ArrowUpRight className="size-4 ml-2" />
                    </h2>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="mb-2 inline-block py-1 font-semibold text2">
                        {items.category}
                      </p>
                      <p className="mb-2  inline-block py-1 font-semibold text2">
                        {items.amount}
                      </p>
                    </div>

                    <Button
                      className="w-full mt-4"
                      onClick={() => navigateToDetailReliefGoods(items._id)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link to="/all-relief-goods">
                <Button>
                  View All <ArrowBigRight className="size-5 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReliefGoodsPosts;
