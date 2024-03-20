import Container from "@/components/layout/Container";
import DetailReliefBreadcrumb from "./DetailReliefBreadcrumb";
import { useSingleReliefGoodsQuery } from "@/redux/features/reliefGoods/reliefGoodsApi";
import { useParams } from "react-router-dom";
import DetailsPostSkeleton from "@/components/layout/main/DetailsPostSkeleton";
import DonateNowModal from "./DonateNowModal";

const DetailsReliefPost = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useSingleReliefGoodsQuery(id);

  if (isLoading || isError) {
    return (
      <section className="py-10">
        <Container>
          <div className="p-0 lg:p-5 mx-auto">
            <DetailsPostSkeleton />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <DetailReliefBreadcrumb title={data.title} />
      <section className="pb-10 pt-5">
        <Container>
          <div className="p-0 lg:p-5 mx-auto">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img
                src={data?.image}
                alt={data?.title}
                className="w-full h-60 sm:h-96 rounded-md"
              />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-slate-50 dark:bg-gray-900">
                <div className="space-y-2">
                  <p className="inline-block text-2xl font-semibold sm:text-3xl text">
                    {data?.title}
                  </p>
                  <p className="text-xs dark:text-gray-400 text">
                    {data?.category}
                  </p>
                </div>
                <div className="dark:text-gray-100">
                  <p className="text">{data?.description}</p>
                </div>
                <div className="mt-5">
                  <p className="text-lg text-right">
                    <span className="font-semibold">Amount</span>:{" "}
                    {data?.amount}
                  </p>
                </div>
                <div className="my-10 w-1/2 mx-auto">
                  <DonateNowModal data={data} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DetailsReliefPost;
