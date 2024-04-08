import Container from "@/components/layout/Container";
import { useGetCommentQuery } from "@/redux/features/comment/commentApi";
import { TCommentInputs } from "./PostComments";
import user from "@/assets/img/user1.png";
import CommentSkeleton from "./CommentSkeleton";

const UserComments = () => {
  const { data, isError, isLoading } = useGetCommentQuery(null);
  return (
    <section className="my-16">
      <Container>
        <div className="py-10">
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            Wall of Gratitude.
          </h2>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-md">
          {(isLoading || isError || !data) && (
            <>
              <CommentSkeleton />
              <CommentSkeleton />
              <CommentSkeleton />
            </>
          )}
          {data?.map((item: TCommentInputs, index: number) => (
            <div className="flex p-5 md:p-10" key={index}>
              <img
                className="object-cover size-14 md:size-20 rounded-full"
                src={user}
                alt="Avatar"
              />
              <div className="font-semibold ml-5 max-w-md">
                <h2 className="text-lg font-semibold mb-1 md:mb-2">
                  {item.name}
                </h2>
                <div className="flex flex-wrap">
                  <p className="text-sm text w-full break-words md:w-3/4">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UserComments;
