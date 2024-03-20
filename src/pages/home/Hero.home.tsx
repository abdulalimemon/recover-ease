import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import img from "@/assets/img/donation.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <section className="my-10">
      <Container className="h-full lg:h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 content-center h-full">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gradient">
              Empowering Hope,{" "}
              <span className="leading-snug">Rebuilding Lives</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold mt-2 mb-5 text">
              A Unified Platform for Efficient Relief Goods Distribution
            </p>
            <p className="text-sm md:text-base text2">
              In the face of adversity, our mission is clear – to bring relief
              where it's needed most. Welcome to our Distribution of Relief
              Goods Management Platform, a pioneering initiative dedicated to
              orchestrating seamless aid delivery in post-disaster scenarios.
            </p>
            <Link to="/about-us">
              <Button className="my-5 flex justify-center items-center">
                Explore More <ArrowRight className="size-5 ml-3" />
              </Button>
            </Link>
          </div>
          <div>
            <img src={img} alt="Hero section" className="rounded-lg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroHome;
