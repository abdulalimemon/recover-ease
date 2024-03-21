import Container from "@/components/layout/Container";

const CommunityBanner = () => {
  return (
    <section className="my-16">
      <Container>
        <div>
          <div className="flex flex-col items-center lg:px-4 mx-auto text-center ">
            <h3 className="text-sm font-medium md:font-bold md:text-2xl text mt-3">
              Where Kindness Finds a Home
            </h3>
            <h2 className="text-3xl py-2 md:py-5 font-bold md:text-6xl text-gradient">
              Our Community's Wall of Appreciation.
            </h2>
            <p className="mt-6 mb-5 text-sm md:text-base text">
              Welcome to our Gratitude Wall, a beacon of appreciation and
              resilience. In times of hardship, kindness lights our way. Here,
              amidst heartfelt messages from our community, we honor the bonds
              that uplift and inspire. Join us in celebrating the power of human
              connection. Add your voice to this tapestry of gratitude and
              spread kindness with every word.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityBanner;
