import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import useAuthData from "@/hooks/useAuthData";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const { user } = useAuthData();

  if (!user) {
    return <Navigate to="/signin"/>
  }

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
