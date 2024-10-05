import { Link } from "react-router-dom";
import Container from "../Container";
import { Facebook, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="border-t-2 py-5 bg-[#f7f4f4] dark:bg-[#020617]">
      <Container>
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="font-bold text-xl">
              Recover <span className="text-red-500">Ease</span>
            </Link>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <div className="flex flex-wrap justify-between items-center space-x-5 font-medium">
                <Link to="/" className="text">
                  Home
                </Link>
                <Link to="/contact-us" className="text">
                  Contact Us
                </Link>
                <Link to="/about-us" className="text">
                  About Us
                </Link>
                <Link to="/faq" className="text">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-400 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col gap-5 items-center sm:flex-row sm:justify-between">
            <p className="text-base font-semibold text">
              © {year} All rights reserved by Recover Ease.
            </p>

            <div className="flex -mx-2 space-x-5">
              <a
                href="mailto:abdulalimemon2@gmail.com"
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
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
