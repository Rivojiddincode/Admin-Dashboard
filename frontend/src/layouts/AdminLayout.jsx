import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import AdminHeader from "../components/layout/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;