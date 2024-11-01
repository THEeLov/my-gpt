import Navbar from "@/components/app/common/Navbar";
import useAuthData from "@/hooks/useAuthData";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const { user } = useAuthData();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="min-h-screen max-h-screen flex flex-col items-center">
      <nav className="w-full h-20 flex justify-between items-center navbarfooterBackground">
        <Navbar />
      </nav>
      <main className="flex-grow w-full flex bg-foreground">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
