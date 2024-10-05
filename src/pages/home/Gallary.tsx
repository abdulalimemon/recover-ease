import Container from "@/components/layout/Container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const slides = [
  {
    src: "https://images.pexels.com/photos/8042425/pexels-photo-8042425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coordinated Relief Efforts",
    description:
      "Efficient coordination ensures that relief goods reach affected communities promptly. Our team on the ground working together to make a positive impact.",
  },
  {
    src: "https://images.pexels.com/photos/8054617/pexels-photo-8054617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Community Support",
    description:
      "Communities coming together to support each other during challenging times. Your donations and contributions make a significant difference in rebuilding lives.",
  },
  {
    src: "https://images.pexels.com/photos/9090942/pexels-photo-9090942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Humanitarian Aid",
    description:
      "Humanitarian aid extends a helping hand to those in need. Your generosity enables us to provide essential relief goods to those affected by disasters worldwide.",
  },
  {
    src: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hope in Every Delivery",
    description:
      "Each delivery brings hope and relief to communities facing adversity. Your support ensures that aid is distributed efficiently and reaches the right hands.",
  },
  {
    src: "https://c7.alamy.com/comp/D36FDP/leogane-haiti-locals-with-relief-goods-on-the-street-D36FDP.jpg",
    title: "Local Engagement",
    description:
      "Local engagement is crucial in understanding the specific needs of communities. We work closely with locals to tailor our relief efforts and maximize impact.",
  },
  {
    src: "https://img.freepik.com/free-photo/volunteers-collecting-food-donations-close-up_23-2149182032.jpg?w=900&t=st=1709970051~exp=1709970651~hmac=4b7f82f85725ea75cdb71041b90829b59219c4f5d7b34f7b1d6e5e995a12d319",
    title: "Volunteer Contributions",
    description:
      "Volunteers play a crucial role in collecting and distributing relief goods. Their dedication and support make a significant impact in times of crisis.",
  },
  {
    src: "https://img.freepik.com/free-photo/person-helping-their-neighbors-with-food_23-2149139738.jpg?w=900&t=st=1709970026~exp=1709970626~hmac=079a48fd5f445e50a48dc7418b3c0c110eec4fadfed84d44fe72683bc40d0796",
    title: "Neighborhood Assistance",
    description:
      "In times of need, neighbors come together to help each other. Your donations ensure that relief reaches even the most vulnerable members of our communities.",
  },
  {
    src: "https://img.freepik.com/free-photo/medium-shot-people-with-food-donations_23-2149182009.jpg?w=900&t=st=1709970132~exp=1709970732~hmac=f8b3b07eadf473827e918828ce93152866d4a42bab7c6262336a27c443d06bf9",
    title: "Community Resilience",
    description:
      "Building community resilience through the distribution of essential goods. Together, we stand strong in the face of adversity, supporting one another.",
  },
  {
    src: "https://img.freepik.com/free-photo/unrecognizable-volunteer-packing-donated-food-cardboard-box_637285-10765.jpg?w=900&t=st=1709970100~exp=1709970700~hmac=ba19dc3556dbd7afa4c62d5f9980d2c96b7b52e36de8eefbc960c7cff73d0963",
    title: "Packing for a Cause",
    description:
      "Volunteers packing donated food into cardboard boxes for distribution. Your contributions directly impact our ability to respond swiftly to emergencies.",
  },
  {
    src: "https://images.pexels.com/photos/8042460/pexels-photo-8042460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Emergency Response",
    description:
      "Swift and effective emergency response is crucial. Our teams are dedicated to providing immediate relief in the aftermath of disasters, ensuring no one is left behind.",
  },
];

const Gallary = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="py-10">
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            Gallary.
          </h2>
        </div>
        <div className="my-10">
          <ScrollArea className="whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {slides.map((artwork, index) => (
                <figure key={index} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={artwork.src}
                      alt={`Photo by ${artwork.description}`}
                      className="aspect-[3/4] object-cover cursor-pointer"
                      width={300}
                      height={400}
                      onClick={() => setIndex(index)}
                    />
                  </div>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Lightbox
            plugins={[Captions, Fullscreen, Zoom, Thumbnails]}
            captions={{
              showToggle: true,
              descriptionTextAlign: "end",
            }}
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={slides}
          />
        </div>
      </Container>
    </section>
  );
};

export default Gallary;
