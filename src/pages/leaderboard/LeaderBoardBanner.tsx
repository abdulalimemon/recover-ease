import Container from "@/components/layout/Container";

const LeaderBoardBanner = () => {
  return (
    <section className="mt-16">
      <Container>
        <div>
          <div className="flex flex-col items-center lg:px-4 mx-auto text-center ">
            <h2 className="text-3xl font-bold md:text-6xl text-gradient">
              Leaderboard
            </h2>
            <p className="mt-6 mb-5 text-sm md:text-base text lg:font-medium">
              Explore the top contributors, donors, and volunteers who are
              making a difference in our community.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeaderBoardBanner;
