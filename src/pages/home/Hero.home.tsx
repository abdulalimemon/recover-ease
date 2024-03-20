import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import img from "@/assets/img/donation.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delayChildren: 0.25 },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.25 },
  },
};

const image = {
  initial: { x: 500, rotate: 0 },
  animate: {
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.25,
    },
  },
};

const HeroHome = () => {
  return (
    <section className="my-10 overflow-hidden">
      <Container className="h-full lg:h-[80vh]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 content-center h-full"
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-gradient"
              variants={introChildren}
            >
              Empowering Hope,{" "}
              <span className="leading-snug">Rebuilding Lives</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl lg:text-4xl font-bold mt-2 mb-5 text"
              variants={introChildren}
            >
              A Unified Platform for Efficient Relief Goods Distribution
            </motion.p>
            <motion.p
              className="text-sm md:text-base text2"
              variants={introChildren}
            >
              In the face of adversity, our mission is clear – to bring relief
              where it's needed most. Welcome to our Distribution of Relief
              Goods Management Platform, a pioneering initiative dedicated to
              orchestrating seamless aid delivery in post-disaster scenarios.
            </motion.p>
            <motion.div variants={introChildren}>
              <Link to="/about-us">
                <Button className="my-5 flex justify-center items-center">
                  Explore More <ArrowRight className="size-5 ml-3" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div variants={image} initial="initial" animate="animate">
            <img src={img} alt="Hero section" className="rounded-lg" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroHome;
