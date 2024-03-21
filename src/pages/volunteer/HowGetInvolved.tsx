import Container from "@/components/layout/Container";
import {
  Dessert,
  LogIn,
  Nfc,
  Rotate3D,
  SlidersHorizontal,
  Telescope,
} from "lucide-react";

const volunteerSteps = [
  {
    id: 1,
    title: "Explore Opportunities",
    description:
      "Browse through our diverse range of volunteer opportunities and find roles that align with your interests, skills, and availability.",
    bg: "bg-red-100 border-red-100",
    icon: <Telescope className="size-5 dark:text-red-900" />,
  },
  {
    id: 2,
    title: "Sign Up",
    description:
      "Complete the volunteer registration form, providing your contact information, areas of interest, and availability.",
    bg: "bg-blue-100 border-blue-100",
    icon: <LogIn className="size-5 dark:text-red-900" />,
  },
  {
    id: 3,
    title: "Attend Orientation",
    description:
      "Attend a volunteer orientation session to learn more about our organization, mission, and volunteer expectations.",
    bg: "bg-teal-100 border-teal-100",
    icon: <Rotate3D className="size-5 dark:text-red-900" />,
  },
  {
    id: 4,
    title: "Get Started",
    description:
      "Once registered, you'll receive updates on available volunteer opportunities and next steps to get involved.",
    bg: "bg-green-100 border-green-100",
    icon: <Dessert className="size-5 dark:text-red-900" />,
  },
  {
    id: 5,
    title: "Make an Impact",
    description:
      "Dive into your volunteer role with enthusiasm, dedication, and a willingness to learn and grow.",

    bg: "bg-orange-100 border-orange-100",
    icon: <SlidersHorizontal className="size-5 dark:text-red-900" />,
  },
  {
    id: 6,
    title: "Connect with Community",
    description:
      "Engage with our vibrant volunteer community, sharing experiences, ideas, and support.",
    bg: "bg-purple-100 border-purple-100",
    icon: <Nfc className="size-5 dark:text-red-900" />,
  },
];

const HowGetInvolved = () => {
  return (
    <section className="py-20">
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            How to Get Involved.
          </h2>
          <p className="text-sm md:text-base text-center font-semibold pt-5 w-full mx-auto md:w-3/4 lg:w-1/2 text2">
            Getting involved as a volunteer is easy! Follow these simple steps
            to join our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {volunteerSteps.map((item) => (
            <div
              key={item.id}
              className={`flex items-start w-full p-5 pb-3 border shadow-md rounded-lg ${item.bg}`}
            >
              <div className="mt-2">{item.icon}</div>
              <div className="ml-5">
                <h2 className="text-lg md:text-2xl font-semibold text-black">
                  {item.title}
                </h2>
                <p className="mt-4 mb-8 text-sm md:text-base text-gray-800 font-medium ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowGetInvolved;
