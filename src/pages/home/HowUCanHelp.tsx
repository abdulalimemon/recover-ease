import Container from "@/components/layout/Container";
import { Building, HandHeart, HandHelping } from "lucide-react";

const ctaContent = [
  {
    id: 1,
    title: "Organizations",
    content: `List your available relief goods and collaborate with us to ensure efficient distribution.`,
    bg: "bg-[#FEEBD6] border-[#FEEBD6]",
    icon: <Building className="size-10 dark:text-red-900" />,
  },
  {
    id: 2,
    title: "Volunteers",
    content: `Offer your time and skills to support relief efforts on the ground or remotely.`,
    bg: "bg-[#9CDAB6] border-[#9CDAB6]",
    icon: <HandHeart className="size-10 dark:text-red-900" />,
  },
  {
    id: 3,
    title: "Donors",
    content: `Make a direct impact by contributing to ongoing relief initiatives.`,
    bg: "bg-[#FFB2A8] border-[#FFB2A8]",
    icon: <HandHelping className="size-10 dark:text-red-900" />,
  },
];

const HowUCanHelp = () => {
  return (
    <section className="py-10">
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            How You Can Help.
          </h2>
          <p className="text-sm md:text-base text-center font-semibold pt-5 w-full mx-auto md:w-3/4 lg:w-1/2 text2">
            Be a part of our mission to bring relief and hope to those in need.
            Your support can make a difference in the lives of communities
            affected by disasters.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
          {ctaContent.map((item) => (
            <div
              key={item.id}
              className={`flex items-start w-full p-5 pb-3 border shadow-md rounded-lg ${item.bg}`}
            >
              {item.icon}
              <div className="ml-5">
                <h2 className="text-2xl font-semibold text-black">
                  {item.title}
                </h2>
                <p className="mt-4 mb-8 text-base text-gray-800 font-medium ">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowUCanHelp;
