import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../BackToTop";
import ScrollToTop from "../ScrollToTop";
import { Toaster } from "@/components/ui/sonner";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <ScrollToTop />
      <Toaster />
    </>
  );
};

export default MainLayout;
