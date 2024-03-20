import Container from "@/components/layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How does the relief goods distribution platform work?",
    answer:
      "The platform serves as a centralized system for coordinating and managing the distribution of relief goods in post-disaster scenarios. It utilizes React, Redux for state management, RTK Query for efficient data fetching, and React Router DOM for navigation. The goal is to ensure timely and effective delivery of relief goods to affected communities.",
    value: "value-1",
  },
  {
    question: "What technologies are used in the development of this platform?",
    answer:
      "The platform is developed using React for building user interfaces, Redux for state management, RTK Query for efficient data fetching, and React Router DOM for navigation. These technologies collectively contribute to a robust and responsive relief goods management system.",
    value: "value-2",
  },
  {
    question:
      "How can organizations and volunteers get involved in relief efforts?",
    answer:
      "Organizations and volunteers can join relief efforts by registering on the platform. Organizations can contribute by listing their available relief goods, while volunteers can offer their services. The platform streamlines communication and coordination, ensuring that relief efforts are efficient and targeted.",
    value: "value-3",
  },
  {
    question:
      "What types of relief goods are typically managed on the platform?",
    answer:
      "The platform manages a diverse range of relief goods, including emergency food supplies, shelter kits, warm clothing donations, medical aid packages, clean water initiatives, hygiene essentials kits, educational supplies, blankets for winter, solar lanterns, children's toys, mobile health clinics, and agricultural supplies like vegetable seeds kits.",
    value: "value-4",
  },
  {
    question:
      "How does the platform ensure the transparency of relief efforts?",
    answer:
      "The platform promotes transparency by providing detailed information about each relief goods post, including images, titles, categories, and quantities. Users can easily access this information, fostering trust and accountability in the distribution process. Real-time updates and communication further enhance transparency.",
    value: "value-5",
  },
  {
    question: "Can individuals contribute to relief efforts on the platform?",
    answer:
      "Yes, individuals can contribute by volunteering their time or resources. They can also make donations directly to registered organizations. The platform encourages community involvement, recognizing that collective efforts are crucial in providing effective relief to disaster-affected areas.",
    value: "value-6",
  },
  {
    question: "How does the platform ensure the security of user data?",
    answer:
      "The platform prioritizes the security of user data by implementing industry-standard encryption protocols and robust security measures. User information is stored securely, and access is restricted to authorized personnel only. Regular security audits and updates are conducted to ensure the highest level of protection.",
    value: "value-7",
  },
  {
    question:
      "Is the platform accessible during emergencies and natural disasters?",
    answer:
      "Yes, the platform is designed to be accessible during emergencies and natural disasters. The responsive design ensures usability on various devices, and the use of efficient technologies allows for reliable performance even in challenging conditions. The platform's goal is to facilitate quick and effective relief operations during critical times.",
    value: "value-8",
  },
  {
    question: "How are relief goods delivered to affected communities?",
    answer:
      "Relief goods are delivered to affected communities through a coordinated logistics system. Organizations list their available goods on the platform, and the system helps optimize routes for delivery. Real-time tracking and updates ensure that relief goods reach their intended destinations in a timely and efficient manner.",
    value: "value-9",
  },
  {
    question: "How can organizations collaborate on the platform?",
    answer:
      "Organizations can collaborate by sharing information about their relief efforts and available resources. The platform facilitates communication and coordination among organizations, ensuring a united and effective response to post-disaster scenarios. Collaborative efforts enhance the overall impact of relief initiatives.",
    value: "value-10",
  },
];

const FaqSection = () => {
  return (
    <section className="pt-10 pb-16">
      <Container>
        <div>
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-center my-6 text">
            FAQ's
          </h2>
        </div>
        <div className="py-5">
          <div className="flex justify-center items-center">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-lg text">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
