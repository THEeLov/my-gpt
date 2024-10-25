import Footer from "@/components/app/common/Footer";
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
      <nav className="w-full h-20 bg-foreground border-b-2 border-b-yellow-300 flex justify-between items-center">
        <Navbar />
      </nav>
      <main className="flex-grow w-full h-full bg-foreground flex">
        <Outlet />
      </main>
      <footer className="w-full bg-foreground h-20 border-t-2 border-t-yellow-300">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
