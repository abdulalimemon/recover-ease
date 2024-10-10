import { Link } from "react-router-dom";
import Container from "../Container";
import { Facebook, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="border-t-2 py-5 bg-[#f7f4f4] dark:bg-[#020617]">
      <Container>
        <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/4">
            <p className="font-bold text-xl text-gradient">Recover Ease</p>
            <p className="mt-3 text-sm">
              Helping those in need, when they need it most. Our mission is to
              ensure fast, organized relief efforts to deliver essential
              supplies and aid during emergencies.
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div>
              <h3 className="tracking-wide pb-3 text-base font-semibold lg:text-xl">
                Quick Links
              </h3>
              <div className="space-y-1 flex flex-col font-medium text-base">
                <Link to="/" className="text">
                  Home
                </Link>
                <Link to="/all-relief-goods" className="text">
                  Relief Goods
                </Link>
                <Link to="/leaderboard" className="text">
                  Leaderboard
                </Link>
                <Link to="/volunteer" className="text">
                  Volunteer
                </Link>
              </div>
            </div>
            <div>
              <h3 className="tracking-wide pb-3 text-base font-semibold lg:text-xl">
                About
              </h3>
              <div className="space-y-1 flex flex-col font-medium text-base">
                <Link to="/about-us" className="text">
                  About Us
                </Link>
                <Link to="/contact-us" className="text">
                  Contact Us
                </Link>

                <Link to="/community" className="text">
                  Community
                </Link>
                <Link to="/faq" className="text">
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h3 className="tracking-wide pb-3 text-base font-semibold lg:text-xl">
                Resources
              </h3>
              <div className="space-y-1 flex flex-col font-medium text-base">
                <Link to="/" className="text">
                  Home
                </Link>
                <Link to="/contact-us" className="text">
                  Contact
                </Link>
                <Link to="/leaderboard" className="text">
                  Leaderboard
                </Link>
                <Link to="/volunteer" className="text">
                  Volunteer
                </Link>
              </div>
            </div>
            <div>
              <h3 className="tracking-wide pb-5 text-base font-semibold lg:text-xl">
                Connect With Us
              </h3>

              <div className="flex space-x-5">
                <a
                  href="mailto:abdulalimemon2@gmail.com"
                  title="Email"
                  className="flex items-center justify-center size-8 rounded-full bg-primary  text-white dark:text-black cursor-pointer"
                >
                  <Mail className="size-4" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  title="Twitter"
                  className="flex items-center justify-center size-8 rounded-full  cursor-pointer bg-primary  text-white dark:text-black"
                >
                  <Twitter className="size-4" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  title="Facebook"
                  className="flex items-center justify-center size-8 rounded-full  cursor-pointer bg-primary text-white dark:text-black"
                >
                  <Facebook className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 border-gray-400 dark:border-gray-700" />

        <div className="flex items-center justify-center">
          <p className="text-base font-semibold text">
            © {year} All rights reserved by Recover Ease.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
