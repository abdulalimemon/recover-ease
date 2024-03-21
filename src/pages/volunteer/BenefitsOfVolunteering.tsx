import Container from "@/components/layout/Container";
import { useState } from "react";

const volunteerBenefits = [
  {
    id: 1,
    title: "Flexibility",
    description:
      "Choose volunteer opportunities that fit your schedule and preferences.",
  },
  {
    id: 2,
    title: "Skill Development",
    description:
      "Gain hands-on experience and develop transferable skills in areas such as leadership, communication, teamwork, and problem-solving.",
  },
  {
    id: 3,
    title: "Networking",
    description:
      "Connect with professionals, experts, and fellow volunteers in your field of interest, expanding your network and opportunities.",
  },
  {
    id: 4,
    title: "Recognition",
    description:
      "Receive recognition and appreciation for your contributions through awards, certificates, and acknowledgment events.",
  },
  {
    id: 5,
    title: "Impact",
    description:
      "Experience the satisfaction of making a tangible difference in the lives of others and contributing to positive social change.",
  },
];
// HowGetInvolved
const BenefitsOfVolunteering = () => {
  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx: any) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <section>
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            Benefits of Volunteering with Us.
          </h2>
          <p className="text-center text-sm md:text-base mt-3 font-semibold pt-5 w-full mx-auto md:w-3/4 text2">
            Experience the enriching journey of becoming a part of our vibrant
            volunteer community, where you'll discover a host of advantages.
          </p>
        </div>
        <div className="flex justify-center overflow-hidden">
          <div className="max-w-[550px] rounded-lg pb-20 pt-10 space-y-6 cursor-pointer">
            {volunteerBenefits.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleToggle(idx)}
                className="flex items-center"
              >
                {/* the index div  */}
                <div className="w-16 h-16 bg-blue-700 flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                  <span>0{idx + 1}</span>
                </div>
                <div className="w-10 h-[2px] bg-blue-700 relative">
                  <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-blue-700"></span>
                  <span className="bg-blue-700 w-10 h-1"></span>
                </div>
                {/* main accordion div  */}
                <div>
                  <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-blue-700 relative">
                    <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-blue-700 absolute top-0 right-0"></span>
                    <h2 className="text-black text-xl font-semibold text-center">
                      {item.title}
                    </h2>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                      isOpen === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#121c21] text-white p-6 text-center text-sm">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsOfVolunteering;
