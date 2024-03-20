import Container from "@/components/layout/Container";
import { Layers, Twitch, Users } from "lucide-react";

const infos = [
  {
    id: 1,
    title: "About Us",
    content: `
        At Recover Ease, we are a team of passionate individuals committed to making a positive difference in the wake of disasters. Our collective vision is to create a world where relief efforts are not only effective but also compassionate. With a deep understanding of the challenges faced during post-disaster scenarios, we have developed a platform that serves as a vital tool for coordinating and managing relief goods distribution.
      `,
    bg: "bg-yellow-100 border-yellow-100",
    icon: <Twitch className="size-7 mb-4 dark:text-violet-500" />,
  },
  {
    id: 2,
    title: "Who Are We",
    content: `
        We are a dedicated group of professionals, including disaster response experts, technologists, and community advocates. Our diverse backgrounds converge with a shared goal: to leverage technology for the greater good. Recover Ease represents the synergy of expertise and innovation, working together to streamline relief operations and enhance the overall efficiency of post-disaster recovery.
      `,
    bg: "bg-purple-100 border-purple-100",
    icon: <Users className="size-7 mb-4 dark:text-violet-500" />,
  },
  {
    id: 3,
    title: "What We Do",
    content: `
    Recover Ease is a pioneering solution that focuses on optimizing the distribution of relief goods in the aftermath of disasters. Our platform facilitates seamless coordination, ensuring that relief goods reach affected communities in a timely and effective manner. By centralizing and automating key processes, we aim to bring relief organizations, volunteers, and communities together in a concerted effort to rebuild and recover.
      `,
    bg: "bg-red-100 border-red-100",
    icon: <Layers className="size-7 mb-4 dark:text-violet-500" />,
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-10">
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">Who We Are.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
          {infos.map((item) => (
            <div
              className={`flex flex-col w-full p-5 border rounded-lg ${item.bg}`}
              key={item.id}
            >
              <div>{item.icon}</div>

              <h2 className="text-2xl font-semibold text-black">
                {item.title}
              </h2>
              <p className="mt-4 mb-8 text-sm lg:text-base text-black">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
