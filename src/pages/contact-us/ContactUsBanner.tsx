import Container from "@/components/layout/Container";

const ContactUsBanner = () => {
  return (
    <section className="mt-16">
      <Container>
        <div>
          <div className="flex flex-col items-center lg:px-4 mx-auto text-center ">
            <h2 className="text-3xl font-bold md:text-6xl text-gradient">
              Get in Touch
            </h2>
            <h3 className="text-base font-medium md:font-bold md:text-4xl text mt-3">
              Reach Out and Connect with Us!
            </h3>
            <p className="mt-6 mb-5 text-sm md:text-base text">
              Our Contact Us page is your direct line to our team. Whether you
              have questions, feedback, or inquiries, we're here to assist you.
              Reach out via the contact information provided or fill out the
              form, and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsBanner;
