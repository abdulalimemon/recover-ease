import App from "@/App";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./../pages/home/index";
import Login from "@/pages/auth/Login";
import Registration from "@/pages/auth/Registration";
import AllReliefGoods from "@/pages/all-relief-goods";
import DetailsReliefGoods from "@/pages/detail-relief-goods";
import FAQ from "@/pages/faq";
import NotFound from "@/pages/404/NotFound";
import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";
import Dashboard from "@/pages/dashboard/Home";
import Supplies from "@/pages/dashboard/supplies";
import CreateSupplies from "@/pages/dashboard/create-supplies";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Leaderboard from "@/pages/leaderboard";
import Community from "@/pages/community";
import Volunteer from "@/pages/volunteer";
import Testimonial from "@/pages/dashboard/testimonial";
import AboutUs from "@/pages/about-us";
import ContactUs from "@/pages/contact-us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "all-relief-goods",
        element: <AllReliefGoods />,
      },
      {
        path: "all-relief-goods/:id",
        element: <DetailsReliefGoods />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/home" />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "/dashboard/home",
        element: <Dashboard />,
      },
      {
        path: "create-supplies",
        element: <CreateSupplies />,
      },
      {
        path: "create-testimonial",
        element: <Testimonial />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
