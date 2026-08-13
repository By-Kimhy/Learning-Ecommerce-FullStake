import { Sidebar } from "../components/ui/sidebar";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${isActive ? "bg-primary text-white" : "hover:bg-muted"}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${isActive ? "bg-primary text-white" : "hover:bg-muted"}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${isActive ? "bg-primary text-white" : "hover:bg-muted"}`
              }
            >
              Users
            </NavLink>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${isActive ? "bg-primary text-white" : "hover:bg-muted"}`
              }
            >
              Orders
            </NavLink>
          </nav>
        </div>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline">Settings</Button>
            <Button variant="destructive">Logout</Button>
          </div>
        </header>

        <Separator />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
