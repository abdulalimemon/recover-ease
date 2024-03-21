import Container from "@/components/layout/Container";

const AboutUsBanner = () => {
  return (
    <section className="my-16">
      <Container>
        <div>
          <div className="flex flex-col items-center lg:px-4 mx-auto text-center ">
            <h3 className="text-sm font-medium md:font-bold md:text-2xl text mt-3">
              About Us
            </h3>
            <h2 className="text-3xl font-bold md:text-6xl text-gradient">
              Get to Know Recover Ease
            </h2>

            <p className="mt-6 mb-5 text-sm md:text-base text">
              Recover Ease is dedicated to bridging the gap between generosity
              and those in need, facilitating relief efforts worldwide. With a
              commitment to transparency, integrity, and innovation, we ensure
              that every donation makes a direct impact on communities facing
              crises. Through collaboration and empathy, we empower individuals
              and organizations to contribute to positive change. Join us in
              creating a world where no one is left behind in times of need.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsBanner;
