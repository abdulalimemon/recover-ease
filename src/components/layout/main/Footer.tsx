import { Link } from "react-router-dom";
import Container from "../Container";
import { Facebook, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <section className="border-t-2 py-10">
      <Container>
        <div className="grid justify-center lg:justify-between">
          <div className="flex flex-col self-center text-center md:block lg:col-start-1 md:space-x-6">
            <div className="hidden lg:flex flex-col md:flex-row items-center justify-center space-x-3 space-y-3 md:space-y-0 font-medium">
              <p className="text-base font-semibold text">
                ©{year} All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-5 font-medium">
            <Link to="/contact-us" className="text">Contact Us</Link>
            <Link to="/about-us" className="text">About Us</Link>
            <Link to="/faq" className="text">FAQ</Link>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <a
              href="#"
              title="Email"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary  text-white dark:text-black cursor-pointer"
            >
              <Mail className="size-5" />
            </a>
            <a
             
              href="https://www.twitter.com/"
              title="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full  cursor-pointer bg-primary  text-white dark:text-black"
            >
              <Twitter className="size-5" />
            </a>
            <a
             
              href="https://www.facebook.com/"
              title="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full  cursor-pointer bg-primary text-white dark:text-black"
            >
              <Facebook className="size-5" />
            </a>
          </div>
          <div className="lg:hidden flex flex-col md:flex-row items-center justify-center font-medium my-5">
            <p className="text-base font-semibold">
              © {year} All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
