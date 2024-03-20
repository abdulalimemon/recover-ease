import Container from "@/components/layout/Container";
import { BarChart, Briefcase, Gauge, Layers, Podcast, UsersRound } from "lucide-react";

const howWeRespondContent = [
  {
    id: 1,
    title: "Rapid Assessment",
    description:
      "Our first step is to conduct a swift and comprehensive assessment of the affected areas. This allows us to understand the immediate needs, prioritize actions, and deploy resources efficiently.",
    icon: <Gauge className="size-7 mb-4 dark:text-red-800" />,
  },
  {
    id: 2,
    title: "Coordinated Relief Efforts",
    description:
      "Collaboration is key. We work closely with local communities, government agencies, and partner organizations to ensure a coordinated and effective relief effort. This approach maximizes our impact and minimizes duplication of efforts.",
    icon: <Layers className="size-7 mb-4 dark:text-red-800" />,
  },
  {
    id: 3,
    title: "Targeted Aid Distribution",
    description:
      "We prioritize the distribution of aid based on the specific needs of each community. Whether it's providing food supplies, shelter kits, medical aid, or other essentials, our goal is to address immediate needs and support long-term recovery.",
    icon: <Briefcase className="size-7 mb-4 dark:text-red-800" />,
  },
  {
    id: 4,
    title: "Community Engagement",
    description:
      "Engaging with the affected communities is at the core of our response strategy. We actively involve community members in decision-making processes, respecting their insights and ensuring that our efforts align with their cultural and social contexts.",
    icon: <UsersRound className="size-7 mb-4 dark:text-red-800" />,
  },
  {
    id: 5,
    title: "Transparent Communication",
    description:
      "Open and transparent communication is crucial. We keep stakeholders, donors, and the public informed about our activities, progress, and challenges. This transparency builds trust and ensures accountability.",
    icon: <Podcast className="size-7 mb-4 dark:text-red-800" />,
  },
  {
    id: 6,
    title: "Continuous Evaluation and Improvement",
    description:
      "Our commitment to improvement is ongoing. We continuously evaluate our response efforts, learn from each experience, and adapt our strategies to enhance our effectiveness in future disaster responses.",
    icon: <BarChart className="size-7 mb-4 dark:text-red-800" />,
  },
];

const HowWeRespond = () => {
  return (
    <section className="py-10">
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            How We Respond.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {howWeRespondContent.map((item) => (
            <div
              className={`flex flex-col w-full p-5 border shadow-md rounded-lg`}
              key={item.id}
            >
              <div className="flex justify-end">{item.icon}</div>

              <h2 className="text-2xl  font-semibold text">{item.title}</h2>
              <p className="mt-4 mb-8 text-sm lg:text-base text2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowWeRespond;
