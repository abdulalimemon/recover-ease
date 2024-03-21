import Container from "@/components/layout/Container";
import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";
import { TVolunteerInputs } from "../volunteer/VolunteerForm";
import VolunteerListSkeleton from "./VolunteerListSkeleton";

const VolunteerList = () => {
  const {
    data: volunteerData,
    isError,
    isLoading,
  } = useGetVolunteerQuery(null);

  return (
    <section className="py-16">
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            Our Volunteers.
          </h2>
          <p className="text-sm md:text-base text-center font-semibold pt-5 w-full mx-auto md:w-3/4 lg:w-1/2 text2">
            Meet the dedicated members of our volunteer community who are making
            a difference every day through their commitment and compassion.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10">
          {(isLoading || isError || !volunteerData) && (
            <>
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
              <VolunteerListSkeleton />
            </>
          )}
          {volunteerData?.map((item: TVolunteerInputs) => (
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 size-28 md:size-36 mb-4 bg-center bg-cover rounded-full "
                src={item.image}
              />
              <p className="text-sm md:text-xl font-semibold text">
                {item.name}
              </p>
              <p className="text-xs md:text-base text">{item.occupation}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VolunteerList;
