import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Container from "@/components/layout/Container";
import { BadgeCheck } from "lucide-react";

const providerTestimonials = [
  {
    name: "John Doe",
    position: "CEO",
    company: "AidOrganizationX",
    testimonial:
      "Working with Recover Ease has been a game-changer for our relief efforts. The platform's innovative approach and seamless coordination have significantly improved our response time, ensuring that aid reaches those in need faster than ever before.",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1710094502~exp=1710098102~hmac=a24187c53643b222fb30cd29aa7864abc0c5673c34d5135c8adcf72c0f9ac16a&w=900",
  },
  {
    name: "Jane Smith",
    position: "Director of Operations",
    company: "ReliefTeamY",
    testimonial:
      "Recover Ease has revolutionized the way we manage relief distribution. The user-friendly interface and advanced features have empowered our team to work more efficiently, ultimately making a substantial impact on the ground during critical times.",
    image:
      "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?t=st=1710094603~exp=1710098203~hmac=31a300aee4999134f97338014c046881e55d77541ec4ad7b55a3ed0b72231afe&w=900",
  },
  {
    name: "Alex Rodriguez",
    position: "Founder",
    company: "AidConnectZ",
    testimonial:
      "The technology behind Recover Ease is impressive. Real-time data, intuitive dashboards, and a responsive system have transformed our disaster response strategy. This platform is a testament to the positive influence of technology in humanitarian efforts.",
    image:
      "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?t=st=1710094628~exp=1710098228~hmac=b28275bfcda0eceea1850028eb5a4551f71f3b1f1840c37574bab2f40de8f5d9&w=900",
  },
  {
    name: "Sophie Williams",
    position: "Coordinator",
    company: "RapidRelief Organization",
    testimonial:
      "Recover Ease stands out with its commitment to excellence. Our coordination and communication have been streamlined, allowing us to provide timely and targeted relief to communities affected by disasters. The impact has been remarkable.",
    image:
      "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1710094654~exp=1710098254~hmac=bb7a163bdbf1c2a72a0dcb7f73b9e53b8aded81411e83f22cf4150e38e0814fd&w=900",
  },
  {
    name: "David Chen",
    position: "Logistics Manager",
    company: "GlobalAid Solutions",
    testimonial:
      "Recover Ease's logistics management capabilities have been a game-changer for our operations. From inventory tracking to route optimization, the platform has enhanced our efficiency, enabling us to respond rapidly to unfolding crises.",
    image:
      "https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?t=st=1710094675~exp=1710098275~hmac=6c05c0e2240cae2baedac5e9c106d65b0852921b4e3a3fb96eefb03014f8f13a&w=900",
  },
  {
    name: "Maria Alvarez",
    position: "Volunteer Coordinator",
    company: "HelpingHands Foundation",
    testimonial:
      "As a volunteer coordinator, Recover Ease has simplified the volunteer recruitment process and task assignment. The platform's user-friendly interface and intuitive features have made our efforts more impactful, bringing hope to those in need.",
    image:
      "https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?t=st=1710094702~exp=1710098302~hmac=4dc9e942cb59bfd1f4ac0aa957d3dd08980b33ab950f9bc31ced19772afed2b0&w=900",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 lg:py-16 ">
      <Container>
        <div className="text-center py-10">
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            What Providers Are Saying.
          </h2>
          <p className="pt-4 text-lg text-center font-semibold text2">
            Discover the Impact of Recover Ease Through Our Partners
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper container"
          speed={600}
        >
          <div>
            {providerTestimonials.map((item, index) => (
              <SwiperSlide
                className="flex flex-col items-center mx-auto space-y-6 md:p-8"
                key={index}
              >
                <div className="flex justify-center items-center flex-col">
                  <BadgeCheck className="size-10 lg:size-16 dark:text-violet-500" />
                  <p className="py-2 text-xl font-bold text-center md:text-3xl lg:max-w-2xl xl:max-w-4xl text">
                    "{item.testimonial}"
                  </p>
                </div>

                <div className="flex justify-center space-x-3 pb-10 md:pb-1">
                  <img
                    // src="https://source.unsplash.com/80x80/?people?1"
                    src={item.image}
                    alt="images"
                    className="size-20 bg-center bg-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center items-center font-semibold">
                    <p className="text">{item.name}</p>
                    <p className="text-sm text2">{item.position}</p>
                    <p className="text-sm text2">{item.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
