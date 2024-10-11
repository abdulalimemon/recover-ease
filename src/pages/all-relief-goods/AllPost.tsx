import Container from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAllReliefGoodsQuery } from "@/redux/features/reliefGoods/reliefGoodsApi";
import { TReliefGoodsType } from "../home/ReliefGoodsPosts";
import { useNavigate } from "react-router-dom";
import PostSkeleton from "@/components/layout/main/PostSkeleton";

const AllPost = () => {
  const { data, isLoading, isError } = useAllReliefGoodsQuery(null);
  const navigate = useNavigate();

  const navigateToDetailReliefGoods = (_id: string) => {
    navigate(`/all-relief-goods/${_id}`);
  };

  return (
    <>
      <section className="bg-gray-200 dark:bg-black py-10">
        <Container>
          <div>
            <h2 className="text-2xl lg:text-4xl text-center font-bold text">
              Discover the Latest Updates on <br className="md:hidden" /> Relief
              Initiatives.
            </h2>
            <p className="text-sm lg:text-base text-center font-medium mt-4 text2">
              Explore our collection of relief goods and discover impactful
              stories, making a difference in communities in need.
            </p>
          </div>
        </Container>
      </section>
      <section className="pb-10 pt-5">
        <Container>
          <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(isLoading || isError || !data) && (
                <>
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                </>
              )}
              {data?.map((items: TReliefGoodsType) => (
                <div className="rounded-md border" key={items._id}>
                  <img
                    src={items.image}
                    alt={items.title}
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default AllPost;
