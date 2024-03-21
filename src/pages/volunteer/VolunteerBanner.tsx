import Container from "@/components/layout/Container";

const VolunteerBanner = () => {
  return (
    <section className="my-20">
      <Container>
        <div>
          <div className="flex flex-col items-center lg:px-4 mx-auto text-center ">
            <h3 className="text-sm font-medium md:font-bold md:text-2xl text mt-3">
              Discover Opportunities to Make a Difference
            </h3>
            <h2 className="text-3xl font-bold md:text-6xl text-gradient py-2 md:py-5">
              Join Our Volunteer Community.
            </h2>

            <p className="mt-6 mb-5 text-sm md:text-base text">
              Welcome to our volunteer community! Join us in making a difference
              and contributing to meaningful causes around the world. Whether
              you're passionate about environmental conservation, social
              justice, education, or healthcare, there's a place for you here.
              Explore the various volunteer opportunities available and embark
              on a journey of impact and personal growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VolunteerBanner;
