import Container from "@/components/layout/Container";
import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Recover Ease</title>
      </Helmet>
      <Navbar />
      <section className="my-10 h-[80vh] flex justify-center items-center">
        <Container>
          <div className="py-10">
            <div className="text-center">
              <p className="text-8xl font-bold text-gradient">404</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl text">
                Oops! Page Not Found.
              </h2>
              <p className="mt-4 text-base leading-7 text2">
                It seems like you've stumbled upon a page that doesn't exist.
                Don't worry, it happens to the best of us.
              </p>
              <div className="mt-4 flex items-center justify-center gap-x-3">
                <Link to="/">
                  <Button>
                    <ArrowLeft className="mr-2 size-5" />
                    Go back to the homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
