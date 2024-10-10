import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-row">
      <AdminSidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <AdminNavbar />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AdminLayout;
